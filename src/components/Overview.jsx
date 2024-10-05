import React, { useState, useEffect } from 'react';
import Starsvg from './svg/starsvg.jsx'

import Elite0svg from './svg/Elite0svg.jsx';
import Elite1svg from './svg/Elite1svg.jsx';
import Elite2svg from './svg/Elite2svg.jsx';

function overview(props) {

     // chunk of useState constants
     const [displayHp, setDisplayHp] = useState(props.hpRange[0]);
     const [displayDef, setDisplayDef] = useState(props.defRange[0]);
     const [displayAtk, setDisplayAtk] = useState(props.atkRange[0]);
     const [displayRes, setDisplayRes] = useState(props.resRange[0]);
     const [displayRedeploy, setDisplayRedeploy] = useState(props.redeployRange[0]);
     const [displayBlock, setDisplayBlock] = useState(props.blockRange[0]);
     const [displayCost, setDisplayCost] = useState(props.costRange[0]);
     const [displayAspd, setDisplayAspd] = useState(props.aspdRange[0]);

     const [displayRange, setDisplayRange] = useState(props.opRanges[0])

     const [rangeValue, setRangeValue] = useState(1)
     const [maxRangeValue, setMaxRangeValue] = useState(props.maxRangeValues[0])

     const [currentHpRange, setCurrentHpRange] = useState(props.hpRange.slice(0, 2));
     const [currentDefRange, setCurrentDefRange] = useState(props.defRange.slice(0, 2));
     const [currentAtkRange, setCurrentAtkRange] = useState(props.atkRange.slice(0, 2));

     const [potentialToggle, setPotentialToggle] = useState(false);
     const [trustToggle, setTrustToggle] = useState(false);

     const [currentElite, setCurrentElite] = useState(0);

     const [displayTalentWrapper, setDisplayTalentWrapper] = useState(props.talentWrapperVisibility[0]);
     const [talent1Visibility, setTalent1Visibility] = useState(props.talent1Visibility[0]);
     const [talent2Visibility, setTalent2Visibility] = useState(props.talent2Visibility[0]);
     const [displayTalent1, setDisplayTalent1] = useState(props.talent1Text[0]);
     const [displayTalent2, setDisplayTalent2] = useState(props.talent2Text[0]);

     const [displayBskillWrapper, setDisplayBskillWrapper] = useState(props.bskillWrapperVisibility[0]);
     const [bskill1Visibility, setBskill1Visibility] = useState(props.bskill1Visibility[0]);
     const [bskill2Visibility, setBskill2Visibility] = useState(props.bskill2Visibility[0]);
     const [displayBskill1, setDisplayBskill1] = useState(props.bskill1Text[0]);
     const [displayBskill2, setDisplayBskill2] = useState(props.bskill2Text[0]);

     // potential and trust stuff
     const togglePotential = () => {
          setPotentialToggle(!potentialToggle)
          document.getElementById('potentialButton').classList.toggle('active-button');
     }
     const toggleTrust = () => {
          setTrustToggle(!trustToggle)
          document.getElementById('trustButton').classList.toggle('active-button');
     }

     // changes range value
     const handleRangeChange = (event) => {
          setRangeValue(event.target.value)
     }

     // calls change stats
     useEffect(() => {
          // stuff
          let tempHp = Math.round(currentHpRange[0] + (((currentHpRange[1] - currentHpRange[0]) / (maxRangeValue - 1)) * (rangeValue - 1)))
          let tempDef = Math.round(currentDefRange[0] + (((currentDefRange[1] - currentDefRange[0]) / (maxRangeValue - 1)) * (rangeValue - 1)))
          let tempAtk = Math.round(currentAtkRange[0] + (((currentAtkRange[1] - currentAtkRange[0]) / (maxRangeValue - 1)) * (rangeValue - 1)))
          if (potentialToggle === true) {
               tempHp = tempHp + props.potStats[0];
               tempDef = tempDef + props.potStats[1];
               tempAtk = tempAtk + props.potStats[2];
          }
          if (trustToggle === true) {
               tempHp = tempHp + props.trustStats[0];
               tempDef = tempDef + props.trustStats[1];
               tempAtk = tempAtk + props.trustStats[2];
          }
          setDisplayHp(tempHp);
          setDisplayDef(tempDef);
          setDisplayAtk(tempAtk);


          // second batch of stuff
          let tempRes = props.resRange[currentElite];
          let tempRedeploy = props.redeployRange[currentElite];
          let tempBlock = props.blockRange[currentElite];
          let tempCost = props.costRange[currentElite];
          let tempAspd = props.aspdRange[currentElite];

          if (potentialToggle === true) {
               tempRes = tempRes + props.potStats[3];
               tempRedeploy = tempRedeploy + props.potStats[4];
               tempBlock = tempBlock + props.potStats[5];
               tempCost = tempCost + props.potStats[6];
               tempAspd = tempAspd + props.potStats[7];

               setDisplayTalent1(props.potTalent1Text[currentElite]);
               setDisplayTalent2(props.potTalent2Text[currentElite]);
          } else {
               setDisplayTalent1(props.talent1Text[currentElite]);
               setDisplayTalent2(props.talent2Text[currentElite]);
          }

          setDisplayRes(tempRes);
          setDisplayRedeploy(tempRedeploy);
          setDisplayBlock(tempBlock);
          setDisplayCost(tempCost);
          setDisplayAspd(tempAspd);
     }, [rangeValue, trustToggle, potentialToggle, currentElite])


     // changes stats and ranges based on eltie
     const elitePicker = (elite) => {
          setCurrentElite(elite);
          setCurrentHpRange(props.hpRange.slice(elite, elite + 2));
          setCurrentDefRange(props.defRange.slice(elite, elite + 2));
          setCurrentAtkRange(props.atkRange.slice(elite, elite + 2));

          let buttonIds = ['elite0Button', 'elite1Button', 'elite2Button']
          buttonIds.forEach((id) => {
               if (id === buttonIds[elite]) {
                    document.getElementById(id).classList.add('active-button')
               }
               else {
                    document.getElementById(id).classList.remove('active-button')
               };
          });

          setRangeValue(1);
          setDisplayRange(props.opRanges[elite]);
          setMaxRangeValue(props.maxRangeValues[elite]);

          setDisplayBskill1(props.bskill1Text[elite]);
          setDisplayBskill2(props.bskill2Text[elite]);
          setBskill1Visibility(props.bskill1Visibility[elite]);
          setBskill2Visibility(props.bskill2Visibility[elite]);
          setDisplayBskillWrapper(props.bskillWrapperVisibility[elite]);

          setDisplayTalentWrapper(props.talentWrapperVisibility[elite]);
          setTalent1Visibility(props.talent1Visibility[elite]);
          setTalent2Visibility(props.talent2Visibility[elite]);
}

useEffect(() => {
     setDisplayHp(currentHpRange[0]);
     setDisplayDef(currentDefRange[0]);
     setDisplayAtk(currentAtkRange[0]);
}, [currentHpRange, currentDefRange, currentAtkRange]);

useEffect(() => {
     document.getElementById('elite0Button').classList.add('active-button')
}, []);


return (
     <div style={{ display: props.display }} className="overview-container">
          <div className="overview-head">
               <div className="overview-head-1">
                    <div className="overview-head-image">
                         <img src={props.overviewInfo[0]} />
                         <div className="overview-head-stars">
                              <div style={{ display: props.showStars[0] }}>
                                   <Starsvg />
                              </div>
                              <div style={{ display: props.showStars[1] }}>
                                   <Starsvg />
                              </div>
                              <div style={{ display: props.showStars[2] }}>
                                   <Starsvg />
                              </div>
                              <div style={{ display: props.showStars[3] }}>
                                   <Starsvg />
                              </div>
                              <div style={{ display: props.showStars[4] }}>
                                   <Starsvg />
                              </div>
                              <div style={{ display: props.showStars[5] }}>
                                   <Starsvg />
                              </div>
                         </div>
                    </div>
                    <ul>
                         <li><h1>{props.overviewInfo[1]}</h1></li>
                         <li><p style={{ color: 'var(--subtextcolor)' }}>{props.overviewInfo[2]}</p></li>
                    </ul>
               </div>
               <ul className="overview-head-2">
                    <li>{props.overviewInfo[3]}</li>
                    <li>{props.overviewInfo[4]}</li>
               </ul>
          </div>
          <hr />

          <div className="overview-buttons">
               <div className="overview-buttons-wrapper">
                    <div id="elite0Button" className="overview-elite-button" onClick={() => elitePicker(0)}>
                         <Elite0svg />
                    </div>
                    <div id="elite1Button" className="overview-elite-button" onClick={() => elitePicker(1)} style={{ display: props.showElites[0] }}>
                         <Elite1svg />
                    </div>
                    <div id="elite2Button" className="overview-elite-button" onClick={() => elitePicker(2)} style={{ display: props.showElites[1] }}>
                         <Elite2svg />
                    </div>
               </div>
               <div className="overview-buttons-wrapper">
                    <div className="overview-pottrust-wrapper">
                         <p id="potentialButton" onClick={() => togglePotential()} className='overview-pottrust-button'>Potentials</p>
                         <ul className="overview-pottrust-stats">
                              <li>{props.potentialInfo[0]}</li>
                              <li>{props.potentialInfo[1]}</li>
                              <li>{props.potentialInfo[2]}</li>
                              <li>{props.potentialInfo[3]}</li>
                              <li>{props.potentialInfo[4]}</li>
                         </ul>
                    </div>
                    <div className="overview-pottrust-wrapper">
                         <p id="trustButton" onClick={() => toggleTrust()} className='overview-pottrust-button'>Trust</p>
                         <ul className="overview-pottrust-stats">
                              <li style={{display: props.trustInfoVisibility[0]}}>{props.trustInfo[0]}</li>
                              <li style={{display: props.trustInfoVisibility[1]}}>{props.trustInfo[1]}</li>
                         </ul>
                    </div>
               </div>
          </div>
          <hr />

          <div className="overview-rangeinput">
               <ul>
                    <li>Level</li>
                    <li id="current-level-displayer">{rangeValue}</li>
               </ul>
               <input type="range" min="1" max={maxRangeValue} value={rangeValue} onChange={handleRangeChange} />
          </div>
          <hr />

          <div className="overview-stats-wrapper">
               <div className="stat-wrapper">
                    <p>Range</p>
                    {displayRange}
               </div>
               <ul className="stat-wrapper">
                    <li>Health</li>
                    <li><h2>{displayHp}</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>Defense</li>
                    <li><h2>{displayDef}</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>Arts Resistance</li>
                    <li><h2>{displayRes}</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>Attack</li>
                    <li><h2>{displayAtk}</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>Redeploy</li>
                    <li><h2>{displayRedeploy}s</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>Block</li>
                    <li><h2>{displayBlock}</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>DP Cost</li>
                    <li><h2>{displayCost}</h2></li>
               </ul>
               <ul className="stat-wrapper">
                    <li>Attack Speed</li>
                    <li><h2>{displayAspd}s</h2></li>
               </ul>
          </div>
          <hr></hr>

          <div className="overview-trait-wrapper">
               <h2>Trait</h2>
               {props.traitText}
          </div>
          <hr style={{ display: displayTalentWrapper }} />

          <div className="overview-talents-wrapper" style={{ display: displayTalentWrapper }}>
               <h2 className='wrapper-name'>TALENTS</h2>
               <div className='talent-wrapper'>
                    <div style={{ display: talent1Visibility }}>
                         {props.talent1Title}
                         {displayTalent1}
                    </div>
                    <div style={{ display: talent2Visibility }}>
                         {props.talent2Title}
                         {displayTalent2}
                    </div>
               </div>
          </div>
          <hr />

          <div className="overview-bskills-wrapper" style={{ display: displayBskillWrapper }}>
               <h2 className='wrapper-name'>BASE SKILLS</h2>
               <div className='bskills-wrapper'>
                    <ul style={{ display: bskill1Visibility }}>
                         <li className="bskill-title">
                              <h2>{props.bskill1Title}</h2>
                              <img src={props.bskill1img} />
                         </li>
                         <li>{displayBskill1}</li>
                    </ul>
                    <ul style={{ display: bskill2Visibility }}>
                         <li className="bskill-title">
                              <h2>{props.bskill2Title}</h2>
                              <img src={props.bskill2img} />
                         </li>
                         <li>{displayBskill2}</li>
                    </ul>
               </div>

          </div>
     </div>
)
}

export default overview