import React, { useState, useEffect } from 'react';

function Modules(props) {

     useEffect(() => {
          document.getElementById('module-button1').classList.add('active-button')
          document.getElementById('module-level1').classList.add('active-button')
     }, [])

     // can be set as stand alone
     const [displayModuleName, setDisplayModuleName] = useState(props.moduleNames[0])
     const [displayModuleCode, setDisplayModuleCode] = useState(props.moduleCodes[0])
     const [displayModuleType, setDisplayModuleType] = useState(props.moduleTypes[0])
     const [displayModuleImg, setModuleImg] = useState(props.moduleImages[0])
     const [displayTalentName, setDisplayTalentName] = useState(props.talentNames[0])
     const [displayTraitContent, setDisplayTraitContent] = useState(props.traitContent[0])
     const [displayRange, setDisplayRange] = useState(props.moduleRange[0])

     // needs a different list for every module, needs two steps
     const [currentStatLabels, setCurrentStatLabels] = useState(props.module1StatLabels)
     const [currentStat1Values, setCurrentStat1Values] = useState(props.module1Stat1Values)
     const [currentStat2Values, setCurrentStat2Values] = useState(props.module1Stat2Values)
     const [currentStat3Values, setCurrentStat3Values] = useState(props.module1Stat3Values)
     const [currentStatVisibility, setCurrentStatVisibiltiy] = useState(props.module1StatVisibility)
     const [currentTalentContent, setCurrentTalentContent] = useState(props.module1TalentContent)

     const [displayStat1Value, setDisplayStat1Value] = useState(currentStat1Values[0])
     const [displayStat2Value, setDisplayStat2Value] = useState(currentStat2Values[0])
     const [displayStat3Value, setDisplayStat3Value] = useState(currentStat3Values[0])
     const [displayTalentContent, setDisplayTalentContent] = useState(currentTalentContent[0])

     useEffect(() => {
          setDisplayStat1Value(currentStat1Values[0])
          setDisplayStat2Value(currentStat2Values[0])
          setDisplayStat3Value(currentStat3Values[0])
          setDisplayTalentContent(currentTalentContent[0])

     }, [currentStat1Values, currentStat2Values, currentStat3Values, currentTalentContent])

     const displayStat1Container = {
          display: currentStatVisibility[0]
     }
     const displayStat2Container = {
          display: currentStatVisibility[1]
     }
     const displayStat3Container = {
          display: currentStatVisibility[2]
     }

     // range visibility
     const [currentRangeVisibility, setCurrentRangeVisibility] = useState(props.moduleRangeVisibility[0])

     const displayRangeContainer = {
          display: currentRangeVisibility
     }


     const handleModuleChange = (select) => {

          handleModuleStage(0)

          setDisplayModuleName(props.moduleNames[select])
          setDisplayModuleCode(props.moduleCodes[select])
          setDisplayModuleType(props.moduleTypes[select])
          setModuleImg(props.moduleImages[select])
          setDisplayTalentName(props.talentNames[select])
          setDisplayTraitContent(props.traitContent[select])

          setCurrentRangeVisibility(props.moduleRangeVisibility[select])
          setDisplayRange(props.moduleRange[select])

          let buttonIds = ['module-button1', 'module-button2', 'module-button3', 'module-button4', 'module-button5']
          buttonIds.forEach((id) => {
               if (id === buttonIds[select]) {
                    document.getElementById(id).classList.add('active-button')
               }
               else {
                    document.getElementById(id).classList.remove('active-button')
               };
          });

          if (select === 0) {
               setCurrentStatLabels(props.module1StatLabels)
               setCurrentStat1Values(props.module1Stat1Values)
               setCurrentStat2Values(props.module1Stat2Values)
               setCurrentStat3Values(props.module1Stat3Values)
               setCurrentStatVisibiltiy(props.module1StatVisibility)
               setCurrentTalentContent(props.module1TalentContent)
          }
          else if (select === 1) {
               setCurrentStatLabels(props.module2StatLabels)
               setCurrentStat1Values(props.module2Stat1Values)
               setCurrentStat2Values(props.module2Stat2Values)
               setCurrentStat3Values(props.module2Stat3Values)
               setCurrentStatVisibiltiy(props.module2StatVisibility)
               setCurrentTalentContent(props.module2TalentContent)
          }
          else if (select === 2) {
               setCurrentStatLabels(props.module3StatLabels)
               setCurrentStat1Values(props.module3Stat1Values)
               setCurrentStat2Values(props.module3Stat2Values)
               setCurrentStat3Values(props.module3Stat3Values)
               setCurrentStatVisibiltiy(props.module3StatVisibility)
               setCurrentTalentContent(props.module3TalentContent)
          }
          else if (select === 3) {
               setCurrentStatLabels(props.module4StatLabels)
               setCurrentStat1Values(props.module4Stat1Values)
               setCurrentStat2Values(props.module4Stat2Values)
               setCurrentStat3Values(props.module4Stat3Values)
               setCurrentStatVisibiltiy(props.module4StatVisibility)
               setCurrentTalentContent(props.module4TalentContent)
          }
          else {
               setCurrentStatLabels(props.module5StatLabels)
               setCurrentStat1Values(props.module5Stat1Values)
               setCurrentStat2Values(props.module5Stat2Values)
               setCurrentStat3Values(props.module5Stat3Values)
               setCurrentStatVisibiltiy(props.module5StatVisibility)
               setCurrentTalentContent(props.module5TalentContent)
          }
     }

     const handleModuleStage = (stage) => {
          setDisplayStat1Value(currentStat1Values[stage])
          setDisplayStat2Value(currentStat2Values[stage])
          setDisplayStat3Value(currentStat3Values[stage])
          setDisplayTalentContent(currentTalentContent[stage])

          let buttonIds = ['module-level1', 'module-level2', 'module-level3']
          buttonIds.forEach((id) => {
               if (id === buttonIds[stage]) {
                    document.getElementById(id).classList.add('active-button')
               }
               else {
                    document.getElementById(id).classList.remove('active-button')
               };
          });
     }
 
     return (
          <div style={{ display: props.display }} className='modules-wrapper'>
               <div className='modules-buttons-wrapper'>
                    <h2 id='module-button1' onClick={() => handleModuleChange(0)} style={{display: props.showModuleButtons[0]}}>I</h2>
                    <h2 id='module-button2' onClick={() => handleModuleChange(1)} style={{display: props.showModuleButtons[1]}}>II</h2>
                    <h2 id='module-button3' onClick={() => handleModuleChange(2)} style={{display: props.showModuleButtons[2]}}>III</h2>
                    <h2 id='module-button4' onClick={() => handleModuleChange(3)} style={{display: props.showModuleButtons[3]}}>IV</h2>
                    <h2 id='module-button5' onClick={() => handleModuleChange(4)} style={{display: props.showModuleButtons[4]}}>V</h2>
               </div>
               <div className='modules-content-wrapper'>
                    <div className='modules-content-head'>
                         <div className='modules-content-head-content'>
                              <img src={displayModuleImg} />
                              <ul>
                                   <li><h1>{displayModuleName}</h1></li>
                                   <li>
                                        <p>{displayModuleCode}</p>
                                        <span style={{ backgroundImage: displayModuleType }} />
                                   </li>
                              </ul>
                         </div>
                         <div className='modules-stages-wrapper'>
                              <span id="module-level1" onClick={() => handleModuleStage(0)} style={{backgroundImage: "url('uniequipstage/stg1.png')"}}/>
                              <span id="module-level2" onClick={() => handleModuleStage(1)} style={{backgroundImage: "url('uniequipstage/stg2.png')"}}/>
                              <span id="module-level3" onClick={() => handleModuleStage(2)} style={{backgroundImage: "url('uniequipstage/stg3.png')"}}/>
                         </div>
                    </div>
                    <hr />

                    <ul className='modules-stat-wrapper'>
                         <li style={displayStat1Container}>
                              <p>{currentStatLabels[0]}</p>
                              <p>{displayStat1Value}</p>
                         </li>
                         <li style={displayStat2Container}>
                              <p>{currentStatLabels[1]}</p>
                              <p>{displayStat2Value}</p>
                         </li>
                         <li style={displayStat3Container}>
                              <p>{currentStatLabels[2]}</p>
                              <p>{displayStat3Value}</p>
                         </li>
                    </ul>
                    <hr />

                    <div className='modules-trait-wrapper'>
                         <div className='modules-trait-content'>
                              <h2>Trait</h2>
                              {displayTraitContent}
                         </div>
                         <div className='modules-trait-range-wrapper' style={displayRangeContainer}>
                              <p>Range</p>
                              {displayRange}
                         </div>
                    </div>
                    <hr />

                    <div className='modules-talent-wrapper'>
                         <h2>{displayTalentName}</h2>
                         {displayTalentContent}
                    </div>
               </div>
          </div>
     )
}

export default Modules