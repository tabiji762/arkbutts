import React, { useState, useEffect } from 'react';
import Boltsvg from './svg/Boltsvg';
import Rtrianglesvg from './svg/Rtrianglesvg';
import Timersvg from './svg/Timersvg';

function skills(props) {

     // run on first load
     useEffect(() => {
          document.getElementById('skill1Button').classList.add('active-button');
          if (props.skillVisibility[0] === false) {
               document.getElementById('skill1Button').classList.add('hide-element');
          }
          if (props.skillVisibility[1] === false) {
               document.getElementById('skill2Button').classList.add('hide-element');
          }
          if (props.skillVisibility[2] === false) {
               document.getElementById('skill3Button').classList.add('hide-element');
          }
     }, [])

     const [displaySkillName, setDisplaySkillName] = useState(props.skillNames[0]);
     const [displaySkillImage, setDisplaySkillImage] = useState(props.skillImages[0]);
     const [displaySkillRecoveryType, setDisplaySkillRecoveryType] = useState(props.skillRecoveryTypes[0]);
     const [displaySkillTriggerType, setDisplaySkillTriggerType] = useState(props.skillTriggerTypes[0]);

     const [currentContentList, setCurrentContentList] = useState(props.skill1Content);
     const [currentAddendumList, setCurrentAddendumList] = useState(props.skill1Addendum);
     const [currentInitialSpList, setCurrentInitialSpList] = useState(props.skill1InitialSp);
     const [currentSpCostList, setCurrentSpCostList] = useState(props.skill1SpCost);
     const [currentDurationList, setCurrentDurationList] = useState(props.skill1Duration);

     const [displayContent, setDisplayContent] = useState(currentContentList[0])
     const [displayAddendum, setDisplayAddendum] = useState(currentAddendumList[0])
     const [displayInitialSp, setDisplayInitialSp] = useState(currentInitialSpList[0])
     const [displaySpCost, setDisplaySpCost] = useState(currentSpCostList[0])
     const [displayDuration, setDisplayDuration] = useState(currentDurationList[0])

     const [rangeValue, setRangeValue] = useState(1)

     const [addendumVisibility, setAddendumVisibility] = useState(props.addendumVisibility[0])
     const [rangeVisibility, setRangeVisibility] = useState(props.rangeVisibility[0])
     const [displaySkillRange, setDisplaySkillRange] = useState(props.skillRanges[0])

     const [displayCurrentLevel, setDisplayCurrentLevel] = useState('S1')

     const handleRangeChange = (event) => {
          setRangeValue(event.target.value);

          const temp = parseInt(event.target.value)
          if (temp === 1) {
               setDisplayCurrentLevel('S1')
          }
          else if (temp === 2) {
               setDisplayCurrentLevel('S2')
          }
          else if (temp === 3) {
               setDisplayCurrentLevel('S3')
          }
          else if (temp === 4) {
               setDisplayCurrentLevel('S4')
          }
          else if (temp === 5) {
               setDisplayCurrentLevel('S5')
          }
          else if (temp === 6) {
               setDisplayCurrentLevel('S6')
          }
          else if (temp === 7) {
               setDisplayCurrentLevel('S7')
          }
          else if (temp === 8) {
               setDisplayCurrentLevel('S7M1')
          }
          else if (temp === 9) {
               setDisplayCurrentLevel('S7M2')
          }
          else {
               setDisplayCurrentLevel('S7M3')
          };

          setDisplayContent(currentContentList[event.target.value - 1]);
          setDisplayAddendum(currentAddendumList[event.target.value - 1]);
          setDisplayInitialSp(currentInitialSpList[event.target.value - 1]);
          setDisplaySpCost(currentSpCostList[event.target.value - 1]);
          setDisplayDuration(currentDurationList[event.target.value - 1]);
     }

     const handleChangeSkill = (skill) => {
          setDisplaySkillImage(props.skillImages[skill])
          setDisplaySkillName(props.skillNames[skill])
          setDisplaySkillRecoveryType(props.skillRecoveryTypes[skill])
          setDisplaySkillTriggerType(props.skillTriggerTypes[skill])

          setAddendumVisibility(props.addendumVisibility[skill])
          setRangeVisibility(props.rangeVisibility[skill])
          setDisplaySkillRange(props.skillRanges[skill])

          setRangeValue(1)

          setDisplayCurrentLevel('S1')

          if (skill === 0) {
               setCurrentContentList(props.skill1Content);
               setCurrentAddendumList(props.skill1Addendum);
               setCurrentInitialSpList(props.skill1InitialSp);
               setCurrentSpCostList(props.skill1SpCost);
               setCurrentDurationList(props.skill1Duration);

               document.getElementById('skill1Button').classList.add('active-button');
               document.getElementById('skill2Button').classList.remove('active-button');
               document.getElementById('skill3Button').classList.remove('active-button');
          }
          else if (skill === 1) {
               setCurrentContentList(props.skill2Content);
               setCurrentAddendumList(props.skill2Addendum);
               setCurrentInitialSpList(props.skill2InitialSp);
               setCurrentSpCostList(props.skill2SpCost);
               setCurrentDurationList(props.skill2Duration);

               document.getElementById('skill1Button').classList.remove('active-button');
               document.getElementById('skill2Button').classList.add('active-button');
               document.getElementById('skill3Button').classList.remove('active-button');
          }
          else {
               setCurrentContentList(props.skill3Content);
               setCurrentAddendumList(props.skill3Addendum);
               setCurrentInitialSpList(props.skill3InitialSp);
               setCurrentSpCostList(props.skill3SpCost);
               setCurrentDurationList(props.skill3Duration);

               document.getElementById('skill1Button').classList.remove('active-button');
               document.getElementById('skill2Button').classList.remove('active-button');
               document.getElementById('skill3Button').classList.add('active-button');
          }
     }

     useEffect(() => {
          setDisplayContent(currentContentList[0]);
     }, [currentContentList])
     useEffect(() => {
          setDisplayAddendum(currentAddendumList[0]);
     }, [currentAddendumList]);
     useEffect(() => {
          setDisplayInitialSp(currentInitialSpList[0]);
     }, [currentInitialSpList]);
     useEffect(() => {
          setDisplaySpCost(currentSpCostList[0]);
     }, [currentSpCostList]);
     useEffect(() => {
          setDisplayDuration(currentDurationList[0]);
     }, [currentDurationList]);


     return (
          <div style={{ display: props.display }} className="skills-container">
               <div className="skills-head-wrapper">
                    <div className="skills-head-content">
                         <img src={displaySkillImage} />
                         <div>
                              <h1>{displaySkillName}</h1>
                              <ul>
                                   <li><p>{displaySkillRecoveryType}</p></li>
                                   <li><p>{displaySkillTriggerType}</p></li>
                              </ul>
                         </div>
                    </div>
                    <div className="skills-head-buttons">
                         <h2 id="skill1Button" onClick={() => handleChangeSkill(0)}>I</h2>
                         <h2 id="skill2Button" onClick={() => handleChangeSkill(1)}>II</h2>
                         <h2 id="skill3Button" onClick={() => handleChangeSkill(2)}>III</h2>
                    </div>
               </div>
               <hr />
               <div className="skills-rangeinput">
                    <p>{displayCurrentLevel}</p>
                    <input id="skill-range" type="range" min="1" max={props.maxInputRange} value={rangeValue} onChange={handleRangeChange} />
               </div>
               <hr />
               <div className="skills-content">
                    <div className="skills-content-info">
                         <ul>
                              <li>
                                   <div>
                                        <Rtrianglesvg />
                                        <p>{displayInitialSp}</p>
                                   </div>

                                   <p className='stat-label'>Initial Sp</p>
                              </li>
                              <li>
                                   <div>
                                        <Boltsvg />
                                        <p>{displaySpCost}</p>
                                   </div>

                                   <p className='stat-label'>Sp Cost</p>
                              </li>
                              <li>
                                   <div>
                                        <Timersvg />
                                        <p>{displayDuration}s</p>
                                   </div>

                                   <p className='stat-label'>Duration</p>
                              </li>
                         </ul>
                         {displayContent}
                         <div style={{ display: addendumVisibility }}>
                              {displayAddendum}
                         </div>
                    </div>
                    <div className="skills-range-wrapper" style={{ display: rangeVisibility }}>
                         <p>Range</p>
                         {displaySkillRange}
                    </div>
               </div>
          </div>
     )
}

export default skills