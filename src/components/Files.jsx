import React, { useState, useLayoutEffect, useEffect } from 'react';
import Arrowsvg from './svg/Arrowsvg.jsx';
import Description from './svg/Description.jsx';
import Mic from './svg/Mic.jsx'

function Files(props) {

     const displayer = {
          display: props.display,
     }

     const [filesVisibility, setFilesVisibility] = useState('flex');
     const [dialogueVisibility, setDialogueVisibility] = useState('none');

     const filesDisplay = {
          display: filesVisibility,
     }

     const dialogueDisplay = {
          display: dialogueVisibility,
     }

     const [basicInfoHeight, setBasicInfoHeight] = useState(0)
     const [physicalExamHeight, setPhysicalExamHeight] = useState(0)
     const [profileHeight, setProfileHeight] = useState(0)
     const [clinicalAnalysisHeight, setClinicalAnalysisHeight] = useState(0)
     const [archiveFile1Height, setArchiveFile1Height] = useState(0)
     const [archiveFile2Height, setArchiveFile2Height] = useState(0)
     const [archiveFile3Height, setArchiveFile3Height] = useState(0)
     const [archiveFile4Height, setArchiveFile4Height] = useState(0)
     const [promotionRecordHeight, setPromotionRecordHeight] = useState(0)
     const [classConversionRecord1Height, setclassConversionRecord1Height] = useState(0)
     const [classConversionRecord2Height, setclassConversionRecord2Height] = useState(0)

     useEffect(() => {
          document.getElementById('filesbutton1').classList.add('active-button');
     }, [])

     // these take care of the arrow rotation
     useEffect(() => {
          if (basicInfoHeight === 0) {
               document.getElementById('basic-info-arrow').classList.add('rotate-arrow');
          }
          else {
               document.getElementById('basic-info-arrow').classList.remove('rotate-arrow');
          }
     }, [basicInfoHeight]);
     useEffect(() => {
          if (document.getElementById('physical-exam-arrow')) {
               if (physicalExamHeight === 0) {
                    document.getElementById('physical-exam-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('physical-exam-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [physicalExamHeight]);
     useEffect(() => {
          if (document.getElementById('profile-arrow')) {
               if (profileHeight === 0) {
                    document.getElementById('profile-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('profile-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [profileHeight]);
     useEffect(() => {
          if (document.getElementById('clinical-analysis-arrow')) {
               if (clinicalAnalysisHeight === 0) {
                    document.getElementById('clinical-analysis-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('clinical-analysis-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [clinicalAnalysisHeight]);
     useEffect(() => {
          if (document.getElementById('archive-file-1-arrow')) {
               if (archiveFile1Height === 0) {
                    document.getElementById('archive-file-1-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('archive-file-1-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [archiveFile1Height]);
     useEffect(() => {
          if (document.getElementById('archive-file-2-arrow')) {
               if (archiveFile2Height === 0) {
                    document.getElementById('archive-file-2-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('archive-file-2-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [archiveFile2Height]);
     useEffect(() => {
          if (document.getElementById('archive-file-3-arrow')) {
               if (archiveFile3Height === 0) {
                    document.getElementById('archive-file-3-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('archive-file-3-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [archiveFile3Height]);
     useEffect(() => {
          if (document.getElementById('archive-file-4-arrow')) {
               if (archiveFile4Height === 0) {
                    document.getElementById('archive-file-4-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('archive-file-4-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [archiveFile4Height]);
     useEffect(() => {
          if (document.getElementById('promotion-record-arrow')) {
               if (promotionRecordHeight === 0) {
                    document.getElementById('promotion-record-arrow').classList.add('rotate-arrow');
               } else {
                    document.getElementById('promotion-record-arrow').classList.remove('rotate-arrow');
               }
          }
     }, [promotionRecordHeight]);
     useEffect(() => {
          if (classConversionRecord1Height === 0) {
               document.getElementById('class-conversion-record-1-arrow').classList.add('rotate-arrow');
          } else {
               document.getElementById('class-conversion-record-1-arrow').classList.remove('rotate-arrow');
          }
     }, [classConversionRecord1Height]);
     useEffect(() => {
          if (classConversionRecord2Height === 0) {
               document.getElementById('class-conversion-record-2-arrow').classList.add('rotate-arrow');
          } else {
               document.getElementById('class-conversion-record-2-arrow').classList.remove('rotate-arrow');
          }
     }, [classConversionRecord2Height]);

     // handles accordion stuff
     const toggleAccordion = (index) => {
          const heightList = [
               basicInfoHeight,
               physicalExamHeight,
               profileHeight,
               clinicalAnalysisHeight,
               archiveFile1Height,
               archiveFile2Height,
               archiveFile3Height,
               archiveFile4Height,
               promotionRecordHeight,
               classConversionRecord1Height,
               classConversionRecord2Height
          ];

          const setHeightList = [
               setBasicInfoHeight,
               setPhysicalExamHeight,
               setProfileHeight,
               setClinicalAnalysisHeight,
               setArchiveFile1Height,
               setArchiveFile2Height,
               setArchiveFile3Height,
               setArchiveFile4Height,
               setPromotionRecordHeight,
               setclassConversionRecord1Height,
               setclassConversionRecord2Height
          ];
          const idList = [
               'basic-info-content',
               'physical-exam-content',
               'profile-content',
               'clinical-analysis-content',
               'archive-file-1-content',
               'archive-file-2-content',
               'archive-file-3-content',
               'archive-file-4-content',
               'promotion-record-content',
               'class-conversion-1-content',
               'class-conversion-2-content',
          ];

          if (heightList[index] === 0) {
               setHeightList[index](document.getElementById(idList[index]).scrollHeight)
          }
          else {
               setHeightList[index](0)
          };
     }

     // switches between files and dialogue page
     const switchPage = (requestedPage) => {
          if (requestedPage === 'files') {
               setFilesVisibility('flex')
               setDialogueVisibility('none')

               document.getElementById('filesbutton1').classList.add('active-button');
               document.getElementById('filesbutton2').classList.remove('active-button');
          }
          else {
               setFilesVisibility('none')
               setDialogueVisibility('flex')

               document.getElementById('filesbutton1').classList.remove('active-button');
               document.getElementById('filesbutton2').classList.add('active-button');
          }
     }



     return (
          <div style={displayer} className="files-container">
               <ul className="files-buttons">
                    <li id="filesbutton1" onClick={() => switchPage('files')}><Description /></li>
                    <li id="filesbutton2" onClick={() => switchPage('dialogue')}><Mic /></li>
               </ul>

               <ul className="files-group" style={filesDisplay}>
                    <li style={{ display: props.filesDisplay[0] }}>
                         <div className='files-head' onClick={() => toggleAccordion(0)}>
                              <h2>Basic Info</h2>
                              <div id='basic-info-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='basic-info-content' className='files-wrapper-2' style={{ height: basicInfoHeight }}>
                              <p>[Codename] <span className='focusText'>{props.basicInfo[0]}</span></p>
                              <p>[Gender] <span className='focusText'>{props.basicInfo[1]}</span></p>
                              <p>[Combat Experience] <span className='focusText'>{props.basicInfo[2]}</span></p>
                              <p>[Place of Birth] <span className='focusText'>{props.basicInfo[3]}</span></p>
                              <p>[Date of Birth] <span className='focusText'>{props.basicInfo[4]}</span></p>
                              <p>[Race] <span className='focusText'>{props.basicInfo[5]}</span></p>
                              <p>[Height] <span className='focusText'>{props.basicInfo[6]}</span></p>
                              <p>[Infection Status] <span className='focusText'>{props.basicInfo[7]}</span></p>
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[1] }}>
                         <div className='files-head' onClick={() => toggleAccordion(1)}>
                              <h2>Physical Examination</h2>
                              <div id='physical-exam-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='physical-exam-content' className='files-wrapper-2' style={{ maxHeight: physicalExamHeight }}>
                              <p>[Physical Strength] <span className='focusText'>{props.physicalExam[0]}</span></p>
                              <p>[Mobility] <span className='focusText'>{props.physicalExam[1]}</span></p>
                              <p>[Physiological Endurance] <span className='focusText'>{props.physicalExam[2]}</span></p>
                              <p>[Tactical Acumen] <span className='focusText'>{props.physicalExam[3]}</span></p>
                              <p>[Combat Skill] <span className='focusText'>{props.physicalExam[4]}</span></p>
                              <p>[Originium Arts Assimilation] <span className='focusText'>{props.physicalExam[5]}</span></p>
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[2] }}>
                         <div className='files-head' onClick={() => toggleAccordion(2)}>
                              <h2>Profile</h2>
                              <div id='profile-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='profile-content' className='files-wrapper-2' style={{ maxHeight: profileHeight }}>
                              {props.profile}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[3] }}>
                         <div className='files-head' onClick={() => toggleAccordion(3)}>
                              <h2>Clinical Analysis</h2>
                              <div id='clinical-analysis-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='clinical-analysis-content' className='files-wrapper-2' style={{ maxHeight: clinicalAnalysisHeight }}>
                              {props.clinicalAnalysis}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[4] }}>
                         <div className='files-head' onClick={() => toggleAccordion(4)}>
                              <h2>Archive File 1</h2>
                              <div id='archive-file-1-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='archive-file-1-content' className='files-wrapper-2' style={{ maxHeight: archiveFile1Height }}>
                              {props.archiveFile1}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[5] }}>
                         <div className='files-head' onClick={() => toggleAccordion(5)}>
                              <h2>Archive File 2</h2>
                              <div id='archive-file-2-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='archive-file-2-content' className='files-wrapper-2' style={{ maxHeight: archiveFile2Height }}>
                              {props.archiveFile2}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[6] }}>
                         <div className='files-head' onClick={() => toggleAccordion(6)}>
                              <h2>Archive File 3</h2>
                              <div id='archive-file-3-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='archive-file-3-content' className='files-wrapper-2' style={{ maxHeight: archiveFile3Height }}>
                              {props.archiveFile3}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[7] }}>
                         <div className='files-head' onClick={() => toggleAccordion(7)}>
                              <h2>Archive File 4</h2>
                              <div id='archive-file-4-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='archive-file-4-content' className='files-wrapper-2' style={{ maxHeight: archiveFile4Height }}>
                              {props.archiveFile4}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[8] }}>
                         <div className='files-head' onClick={() => toggleAccordion(8)}>
                              <h2>Promotion Record</h2>
                              <div id='promotion-record-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='promotion-record-content' className='files-wrapper-2' style={{ maxHeight: promotionRecordHeight }}>
                              {props.promotionRecord}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[9] }}>
                         <div className='files-head' onClick={() => toggleAccordion(9)}>
                              <h2>Class Conversion Record 1</h2>
                              <div id='class-conversion-record-1-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='class-conversion-1-content' className='files-wrapper-2' style={{ maxHeight: classConversionRecord1Height }}>
                              {props.classConversionRecord1}
                         </div>
                    </li>
                    <li style={{ display: props.filesDisplay[10] }}>
                         <div className='files-head' onClick={() => toggleAccordion(10)}>
                              <h2>???</h2>
                              <div id='class-conversion-record-2-arrow'>
                                   <Arrowsvg />
                              </div>
                         </div>
                         <hr />
                         <div id='class-conversion-2-content' className='files-wrapper-2' style={{ maxHeight: classConversionRecord2Height }}>
                              {props.classConversionRecord2}
                         </div>
                    </li>
               </ul>

               <ul className="dialogue-group" style={dialogueDisplay}>
                    <li>
                         <p className='focusText'>Appointed as Assistant</p>
                         {props.appointedAsAssistant}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk 1</p>
                         {props.talk1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk 2</p>
                         {props.talk2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk 3</p>
                         {props.talk3}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk after Promotion 1</p>
                         {props.talkAfterPromotion1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk after Promotion 2</p>
                         {props.talkAfterPromotion2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk after Trust Increase 1</p>
                         {props.talkAfterTrustIncrease1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk after Trust Increase 2</p>
                         {props.talkAfterTrustIncrease2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Talk after Trust Increase 3</p>
                         {props.talkAfterTrustIncrease3}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Idle</p>
                         {props.idle}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Onboard</p>
                         {props.onboard}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Watching Battle Record</p>
                         {props.watchingBattleRecord}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Promotion 1</p>
                         {props.promotion1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Promotion 2</p>
                         {props.promotion2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Added to Squad</p>
                         {props.addedToSquad}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Appointed as Squad Leader</p>
                         {props.appointedAsSquadLeader}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Depart</p>
                         {props.depart}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Begin Operation</p>
                         {props.beginOperation}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Selecting Operator 1</p>
                         {props.selectingOperator1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Selecting Operator 2</p>
                         {props.selectingOperator2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Deployment 1</p>
                         {props.deployment1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Deployment 2</p>
                         {props.deployment2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>In Battle 1</p>
                         {props.inBattle1}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>In Battle 2</p>
                         {props.inBattle2}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>In Battle 3</p>
                         {props.inBattle3}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>In Battle 4</p>
                         {props.inBattle4}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>4-star Result</p>
                         {props.fourStarResult}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>3-star Result</p>
                         {props.threeStarResult}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Sub 3-star Result</p>
                         {props.subThreeStarResult}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Operation Failure</p>
                         {props.operationFailure}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Assigned to Facility</p>
                         {props.assignedToFacility}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Tap</p>
                         {props.tap}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Trust Tap</p>
                         {props.trustTap}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Title</p>
                         {props.title}
                    </li>
                    <hr />

                    <li>
                         <p className='focusText'>Greeting</p>
                         {props.greeting}
                    </li>
                    <hr />
               </ul>
          </div>
     )
}

export default Files