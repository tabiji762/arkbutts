import React, { useState, useEffect } from 'react';

import Elite0svg from './svg/Elite0svg.jsx';
import Elite1svg from './svg/Elite1svg.jsx';
import Elite2svg from './svg/Elite2svg.jsx';

function summon(props) {

     const [currentHpRange, setCurrentHpRange] = useState(props.hpRange.slice(0, 2))
     const [currentDefRange, setCurrentDefRange] = useState(props.defRange.slice(0, 2))
     const [currentAtkRange, setCurrentAtkRange] = useState(props.atkRange.slice(0, 2))

     const [displayHp, setHp] = useState(currentHpRange[0])
     const [displayDef, setDef] = useState(currentDefRange[0])
     const [displayAtk, setAtk] = useState(currentAtkRange[0])

     const [displayRes, setRes] = useState(props.resRange[0]);
     const [displayRedeploy, setRedeploy] = useState(props.redeployRange[0]);
     const [displayBlock, setBlock] = useState(props.blockRange[0]);
     const [displayCost, setCost] = useState(props.costRange[0]);
     const [displayAspd, setAspd] = useState(props.aspdRange[0]);

     const [displayRangeStat, setRangeStat] = useState(props.summonRangeStat[0])

     const [rangeValue, setRangeValue] = useState(1)

     const [rangeMaxValue, setRangeMaxValue] = useState(props.maxInputRanges[0])

     useEffect(()=>{
          setHp(Math.round(currentHpRange[0]+(((currentHpRange[1]-currentHpRange[0])/(rangeMaxValue-1))*(rangeValue-1))))
          setDef(Math.round(currentDefRange[0]+(((currentDefRange[1]-currentDefRange[0])/(rangeMaxValue-1))*(rangeValue-1))))
          setAtk(Math.round(currentAtkRange[0]+(((currentAtkRange[1]-currentAtkRange[0])/(rangeMaxValue-1))*(rangeValue-1))))
     }, [rangeValue])

     useEffect(()=>{
          document.getElementById('button1').classList.add('active-button')
     }, [])

     const handleRangeChange = (event) => {
          setRangeValue(event.target.value);
     }

     useEffect(()=>{
          setHp(currentHpRange[0])
          setDef(currentDefRange[0])
          setAtk(currentAtkRange[0])
     }, [currentHpRange, currentDefRange, currentAtkRange])

     const handleEliteChange = (elite) => {
          setRangeValue(1)
          setRangeMaxValue(props.maxInputRanges[elite])

          setCurrentHpRange(props.hpRange.slice(elite, elite + 2));
          setCurrentDefRange(props.defRange.slice(elite, elite + 2));
          setCurrentAtkRange(props.atkRange.slice(elite, elite + 2));
          
          setRes(props.resRange[elite]);
          setRedeploy(props.redeployRange[elite]);
          setBlock(props.blockRange[elite]);
          setCost(props.costRange[elite]);
          setAspd(props.aspdRange[elite]);

          setRangeStat(props.summonRangeStat[elite]);

          let buttonIds = ['button1', 'button2', 'button3']
          buttonIds.forEach((id) => {
               if (id === buttonIds[elite]) {
                    document.getElementById(id).classList.add('active-button')
               }
               else {
                    document.getElementById(id).classList.remove('active-button')
               };
          });
     }


     return (
          <div style={{ display: props.display }} className="summon-wrapper">
               <div className='summon-head-wrapper'>
                    <div className='summon-head-content'>
                         <img src={props.summonImg} />
                         <ul>
                              <li><h1>{props.summonName}</h1></li>
                              <li>
                                   <p>{props.positionType}</p>
                                   <p>{props.damageType}</p>
                              </li>
                         </ul>
                    </div>
                    <ul className='summon-buttons-wrapper'>
                         <li id="button1" onClick={()=>handleEliteChange(0)}><Elite0svg /></li>
                         <li id="button2"  onClick={()=>handleEliteChange(1)} style={{display: props.buttonVisibility[0]}}><Elite1svg /></li>
                         <li id="button3"  onClick={()=>handleEliteChange(2)} style={{display: props.buttonVisibility[1]}}><Elite2svg /></li>
                    </ul>
               </div>
               <hr />

               <div className='summon-rangeinput'>
                    <ul>                    
                         <li><p>Level</p></li>
                         <li><p>{rangeValue}</p></li>
                    </ul>
                    <input type="range" min="1" max={rangeMaxValue} value={rangeValue} onChange={handleRangeChange} />
               </div>
               <hr />

               <div className='summon-stats-wrapper'>
                    <div className='range-stat'>
                         <p>Range</p>
                         {displayRangeStat}
                    </div>
                    <div>
                         <p>Health</p>
                         <h2>{displayHp}</h2>
                    </div>
                    <div>
                         <p>Defense</p>
                         <h2>{displayDef}</h2>
                    </div>
                    <div>
                         <p>Arts Resistance</p>
                         <h2>{displayRes}</h2>
                    </div>
                    <div>
                         <p>Attack</p>
                         <h2>{displayAtk}</h2>
                    </div>
                    <div>
                         <p>Redeploy</p>
                         <h2>{displayRedeploy}s</h2>
                    </div>
                    <div>
                         <p>Block</p>
                         <h2>{displayBlock}</h2>
                    </div>
                    <div>
                         <p>DP Cost</p>
                         <h2>{displayCost}</h2>
                    </div>
                    <div>
                         <p>Attack Speed</p>
                         <h2>{displayAspd}s</h2>
                    </div>
               </div>
          </div>
     )
}

export default summon