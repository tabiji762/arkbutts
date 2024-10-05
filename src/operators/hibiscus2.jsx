import React, { useState, useEffect } from 'react';

import OperatorNav from '../components/OperatorNav.jsx';

import Overview from '../components/Overview.jsx';
import Skills from '../components/Skills.jsx';
import Modules from '../components/Modules.jsx';
import Summon from '../components/Summon.jsx';
import Files from '../components/Files.jsx';
import Outfits from '../components/Outfits.jsx';
import Resources from '../components/Resources.jsx';

import ItemContainer from '../components/ResourceItemContainer.jsx';

function Manifest() {

     const [overviewDisplay, setOverviewDisplay] = useState('grid');
     const [skillsDisplay, setSkillsDisplay] = useState('none');
     const [modulesDisplay, setModulesDisplay] = useState('none');
     const [summonDisplay, setSummonDisplay] = useState('none');
     const [filesDisplay, setFilesDisplay] = useState('none');
     const [outfitsDisplay, setOutfitsDisplay] = useState('none');
     const [resourcesDisplay, setResourcesDisplay] = useState('none');

     const [tabTitle, setTabTitle] = useState('OVERVIEW');

     const showTab = (tab) => {
          console.log(tab)

          setOverviewDisplay(tab === 'overview' ? 'flex' : 'none');
          setSkillsDisplay(tab === 'skills' ? 'flex' : 'none');
          setModulesDisplay(tab === 'modules' ? 'grid' : 'none');
          setSummonDisplay(tab === 'summon' ? 'grid' : 'none');
          setFilesDisplay(tab === 'files' ? 'grid' : 'none');
          setOutfitsDisplay(tab === 'outfits' ? 'flex' : 'none');
          setResourcesDisplay(tab === 'resources' ? 'flex' : 'none');

          setTabTitle(tab.toUpperCase());
     }
     return (
          <OperatorNav
               title={tabTitle}
               children=''
               operatorName="Hibiscus Alter"
               operatorClass="Medic"
               profile="charavatars/char_1024_hbisc2.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'block', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(74, 62, 105, 0.3)'
               accentColor='rgb(74, 62, 105)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_1024_hbisc2.png", "Hibiscus the Purifier", 'Incantation Medic', 'Ranged', 'Arts / Healing', 5]}

                    // show elite1, show elite2
                    showElites={['block', 'block']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'flex', 'flex', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -4s', 'ATK +22', 'Improves Talent', 'DP Cost -1']}
                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'ATK +60']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 22, 0, -4, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[0, 0, 60]}

                    hpRange={[826, 1088, 1296, 1508]}
                    defRange={[47, 69, 87, 109]}
                    atkRange={[178, 293, 408, 511]}
                    resRange={[10, 15, 20]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[1, 1, 1]}
                    costRange={[15, 17, 17]}
                    aspdRange={[1.6, 1.6, 1.6]}

                    maxRangeValues={[50, 70, 80]}

                    opRanges={[
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Attacks deal Arts damage and heal the HP of an ally within Attack Range for <span className='blueText'>50%</span> of the damage dealt</p>}

                    // flex or none

                    talent1Title={<h2>Dusk and Dawn</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'flex']}
                    talent1Visibility={['none', 'flex', 'flex']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>Attacks inflict 6% Arts Fragility to the target for 5 seconds</p>,
                         <p>Attacks inflict 12% Arts Fragility to the target for 5 seconds</p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>Attacks inflict 8% <span className='blueText'>(+2%)</span> Arts Fragility to the target for 5 seconds</p>,
                         <p>Attacks inflict 14% <span className='blueText'>(+2%)</span> Arts Fragility to the target for 5 seconds</p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Alternate Operator'}
                    bskill2Title={'Nursing Specialist'}

                    bskill1img='bskills/bskill_ctrl_sp.png'
                    bskill2img='bskills/bskill_train2_medic1.png'

                    bskillWrapperVisibility={['flex', 'flex', 'flex']}

                    bskill1Visibility={['flex', 'flex', 'flex']}
                    bskill2Visibility={['none', 'none', 'flex']}

                    bskill1Text={[
                         <p>When this Operator is assigned to the Control Center, each <span className='blueText'>Alternate Operator</span> increases the Morale of all Operators in the Control Center by <span className='blueText'>+0.05</span> per hour</p>,
                         <p>When this Operator is assigned to the Control Center, each <span className='blueText'>Alternate Operator</span> increases the Morale of all Operators in the Control Center by <span className='blueText'>+0.05</span> per hour</p>,
                         <p>When this Operator is assigned to the Control Center, each <span className='blueText'>Alternate Operator</span> increases the Morale of all Operators in the Control Center by <span className='blueText'>+0.05</span> per hour</p>
                    ]}
                    bskill2Text={[
                         <p></p>,
                         <p></p>,
                         <p>When this Operator is assigned to be the Trainer in the Training Room, Medic Operators' Specialization training speed <span className='blueText'>+30%</span>; if training this skill to Specialization Level <span className='blueText'>2</span>, training speed will be further increased to <span className='blueText'>+45%</span></p>
                    ]}
               />
               <Skills display={skillsDisplay}

                    // shows or hides skill1 button, skill2 button, skill3 button
                    skillVisibility={[true, true, false]}

                    // shows or hides the range part, use none or flex
                    rangeVisibility={['none', 'none', 'none']}

                    // use table tag to make range, s1, s2, s3 respectively
                    skillRanges={[
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                    ]}

                    // shows or hides addendum, use block or none
                    addendumVisibility={['none', 'none', 'none']}

                    // enforces max value of range input, nescessary for specialization and stuff
                    maxInputRange='10'

                    skillNames={[
                         'ATK Up γ',
                         'Nurturing Touch',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skcom_atk_up[3].png',
                         'skills/skill_icon_skchr_hbisc2_2.png',
                         ''
                    ]}
                    skillRecoveryTypes={[
                         'Auto Recovery',
                         'Auto Recovery',
                         ''
                    ]}
                    skillTriggerTypes={[
                         'Manual Trigger',
                         'Manual Trigger',
                         ''
                    ]}


                    // skill 1
                    skill1Content={[
                         <p>ATK <span className='orangeText'>+30%</span></p>,
                         <p>ATK <span className='orangeText'>+35%</span></p>,
                         <p>ATK <span className='orangeText'>+40%</span></p>,
                         <p>ATK <span className='orangeText'>+45%</span></p>,
                         <p>ATK <span className='orangeText'>+50%</span></p>,
                         <p>ATK <span className='orangeText'>+55%</span></p>,
                         <p>ATK <span className='orangeText'>+60%</span></p>,
                         <p>ATK <span className='orangeText'>+75%</span></p>,
                         <p>ATK <span className='orangeText'>+90%</span></p>,
                         <p>ATK <span className='orangeText'>+100%</span></p>,
                    ]}
                    skill1Addendum={[
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                    ]}
                    skill1InitialSp={[0, 0, 0, 5, 5, 5, 10, 10, 10, 15]}
                    skill1SpCost={[40, 40, 40, 37, 37, 37, 35, 34, 33, 30]}
                    skill1Duration={[30, 30, 30, 30, 30, 30, 30, 30, 30, 30]}

                    // skill 2
                    skill2Content={[
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-25%</span> and deals <span className='blueText'>80%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-25%</span> and deals <span className='blueText'>90%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-25%</span> and deals <span className='blueText'>100%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-30%</span> and deals <span className='blueText'>110%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-30%</span> and deals <span className='blueText'>120%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-30%</span> and deals <span className='blueText'>130%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-35%</span> and deals <span className='blueText'>140%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-40%</span> and deals <span className='blueText'>150%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-40%</span> and deals <span className='blueText'>160%</span> ATK as Arts damage to them per second</p>,
                         <p>Reduces the Movement Speed of <span className='blueText'>2</span> enemies within range by <span className='blueText'>-45%</span> and deals <span className='blueText'>170%</span> ATK as Arts damage to them per second</p>,
                    ]}
                    skill2Addendum={[
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                         <p><span className='orangeText'></span></p>,
                    ]}
                    skill2InitialSp={[10, 10, 10, 10, 10, 10, 10, 10, 10, 10]}
                    skill2SpCost={[25, 24, 23, 22, 21, 20, 19, 19, 18, 18]}
                    skill2Duration={[8, 8, 8, 8, 8, 8, 8, 8, 8, 8]}

                    // skill 3
                    skill3Content={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}
                    skill3Addendum={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    skill3InitialSp={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill3SpCost={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill3Duration={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
               />
               <Modules display={modulesDisplay}

                    // hard code 5 max module, hopefully hg doesnt add more than that
                    showModuleButtons={['flex', 'none', 'none', 'none', 'none']}
                    moduleNames={['Crystal Corsage', '', '', '', '']}
                    moduleCodes={['INC-X', '', '', '', '']}
                    moduleTypes={[
                         'url(uniequiptype/inc-x.png)',
                         '',
                         '',
                         '',
                         '',
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_hbisc2.png',
                         '',
                         '',
                         '',
                         '',
                    ]}
                    
                    // 1 trait for each module
                    traitContent={[
                         <p>Attacks deal Arts damage and heal the HP of an ally within Attack Range for <span className='blueText'>60%</span> of the damage dealt</p>,
                         '',
                         '',
                         '',
                         ''
                    ]}

                    // in order of the talent that is modified by the module 
                    // im banking on the hope that modules only change 1 talent and the trait stays constant through the 3 stages
                    // 1 talent for each module
                    talentNames={[
                         'Dusk and Dawn',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    // use none or flex
                    moduleRangeVisibility={['none', 'none', 'none', 'none', 'none']}

                    moduleRange={[
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>
                    ]}

                    // module 1 stuff
                    module1StatVisibility={['flex', 'flex', 'none']}

                    module1StatLabels={[
                         'HP', 'ATK', ''
                    ]}
                    module1Stat1Values={[
                         '+100', '+120', '+140'
                    ]}
                    module1Stat2Values={[
                         '+25', '+33', '+40'
                    ]}
                    module1Stat3Values={[
                         '', '', ''
                    ]}

                    module1TalentContent={[
                         <p>Attacks inflict <span className='blueText'>(12%)</span> [Arts Fragility] to the target for 5 seconds <span className='orangeText'>(original)</span></p>,
                         <p>Attacks inflict <span className='blueText'>(17%)</span> [Arts Fragility] to the target for 5 seconds</p>,
                         <p>Attacks inflict <span className='blueText'>(20%)</span> [Arts Fragility] to the target for 5 seconds</p>,
                    ]}

                    // module 2 stuff
                    module2StatVisibility={['none', 'none', 'none']}

                    module2StatLabels={[
                         '', '', ''
                    ]}
                    module2Stat1Values={[
                         '', '', ''
                    ]}
                    module2Stat2Values={[
                         '', '', ''
                    ]}
                    module2Stat3Values={[
                         '', '', ''
                    ]}

                    module2TalentContent={[
                         <p><span className='orangeText'>(original)</span></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    // module 3 stuff
                    module3StatVisibility={['none', 'none', 'none']}

                    module3StatLabels={[
                         '', '', ''
                    ]}
                    module3Stat1Values={[
                         '', '', ''
                    ]}
                    module3Stat2Values={[
                         '', '', ''
                    ]}
                    module3Stat3Values={[
                         '', '', ''
                    ]}

                    module3TalentContent={[
                         <p><span className='orangeText'>(original)</span></p>,
                         <p></p>,
                         <p></p>,
                    ]}
                    // module 4 stuff
                    module4StatVisibility={['none', 'none', 'none']}

                    module4StatLabels={[
                         '', '', ''
                    ]}
                    module4Stat1Values={[
                         '', '', ''
                    ]}
                    module4Stat2Values={[
                         '', '', ''
                    ]}
                    module4Stat3Values={[
                         '', '', ''
                    ]}

                    module4TalentContent={[
                         <p><span className='orangeText'>(original)</span></p>,
                         <p></p>,
                         <p></p>,
                    ]}
                    // module 5 stuff
                    module5StatVisibility={['none', 'none', 'none']}

                    module5StatLabels={[
                         '', '', ''
                    ]}
                    module5Stat1Values={[
                         '', '', ''
                    ]}
                    module5Stat2Values={[
                         '', '', ''
                    ]}
                    module5Stat3Values={[
                         '', '', ''
                    ]}

                    module5TalentContent={[
                         <p><span className='orangeText'>(original)</span></p>,
                         <p></p>,
                         <p></p>,
                    ]}
               />
               <Summon display={summonDisplay}

                    // e1, and e2 buttons respectively
                    buttonVisibility={['none', 'none']}

                    maxInputRanges={[0, 0, 0]}

                    summonName=''
                    positionType=''
                    damageType=''
                    summonImg=''

                    summonRangeStat={[
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>
                    ]}

                    hpRange={[0, 0, 0, 0]}
                    defRange={[0, 0, 0, 0]}
                    atkRange={[0, 0, 0, 0]}
                    resRange={[0, 0, 0]}
                    redeployRange={[0, 0, 0]}
                    blockRange={[0, 0, 0]}
                    costRange={[0, 0, 0]}
                    
                    aspdRange={[0, 0, 0]}
               />
               <Files display={filesDisplay}

                    filesDisplay={[
                         'flex', //basic info
                         'flex', //physical exam
                         'flex', // profile
                         'flex', // clinical analysis
                         'flex', // archive 1
                         'flex', // archive 2
                         'flex', // archive 3
                         'flex', // archive 4
                         'flex', // promotion record
                         'none', // class conversion record 1
                         'none', // class conversion record 2
                    ]}

                    basicInfo={[
                         'Hibiscus the Purifier',
                         'Female',
                         'Undisclosed',
                         'Victoria',
                         'Jun. 21',
                         'Sarkaz',
                         '160cm',
                         'Confirmed Infected according to medical test report.'
                    ]}

                    physicalExam={[
                         'Normal',
                         'Standard',
                         'Standard',
                         'Normal',
                         'Normal',
                         'Excellent'
                    ]}

                    profile={
                         <p>Following both systematic training in medical theory and long-term training in clinical practice, Hibiscus has graduated from intern doctor to formal Medic Operator, as well as one of the Medical Department's attending physicians. Hibiscus possesses not only ample experience in medical field work, but has made considerable contributions to health management and aftercare as a theoretical researcher.</p>
                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>14%</span></p>
                              <p>Large abnormal shadows located about operator's thoracic cavity.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.30u/L</span></p>
                              <p>
                                   Condition provisionally shows no signs of degradation. 
                                   <br/>
                                   "Hibiscus is highly specialized in health management, and she's just as strict on herself as you'd expect. But even so, that battle left a grave impact on her, and the extent of her infection is no cause for optimism. Regular examinations will be needed." –Ansel
                              </p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>We've all borne witness to the growth of the children emerging from Reserve Op Team A1, as a youthful influence and the next generation of Rhodes Island. But among them, the way Hibiscus has changed draws particular attention.</p>
                              <p>While the maturation of her technique goes without saying, the old Hibiscus who made unyielding demands of everyone around her has "vanished," one could say, at some point. How long has it been since anyone's seen her making a grand scene of confiscating a patient's snacks and fiercely requiring them to follow her health schedule to the letter? These days, she need only gently advise them what would be best for their health, and they'll readily comply. We have reason to believe that in her heart lies a kind of innate power to have others warm up to her. She's simply picked up on a better way showing this side of herself to others.</p>
                              <p>The young pupil nipping at Operator Pith's heels, asking about this and that, day after day, is now a mentor herself, instructing even younger new interns. Without even realizing it, her work within the Medical Department has taken on a degree of professionalism, and you can often find her by hospital beds, patiently soothing patients who are panicked or afraid. It's something no one but her could accomplish... Time pushes us all onwards, never allowing us much of a look back on what we've lose to the past. But now and again, on seeing what's come of this baptism by time, the wisdom gained, how can we not be relieved?</p>
                              <p>If only everyone were still here for it.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>How long does it take to go from an intern lacking any fundamentals to an attending physician in charge of her own interns? Five years? Ten? To the majority who give up on it partway through, it's a goal that's out of reach for one's entire life.</p>
                              <p>Certainly, many medical personnel aboard Rhodes Island are astounding in terms of professional ability and reserves of knowledge. But for them, finding the time to systematically teach students the vast swathes of modern medical theory is near-impossible. Under those circumstances, Hibiscus simply had to treat every practical as an opportunity to learn. She meticulously summed up her medical experience, earnestly took note of every bit of wisdom her seniors offered, seized nearly every free moment to pour through reference materials, and gradually digested it all until she finally attained a comprehensive mastery.</p>
                              <p>Hibiscus has an exceptional amount of experience in her chosen vocation of patient care, and her gentle personality and delicate mood allows her treatments to proceed without a hitch. Having acquired enough medical knowledge over the years, Hibiscus has been attempting to synthesize a systematic theory of healthcare based on her initial field of expertise, nutrition. The value of her current research results has been recognized even by Dr. Kal'tsit. Guided by her theories, Hibiscus has directed a gradual upgrade of the Medical Department's ward facilities. Guided by her theories, Hibiscus has directed a gradual upgrade of the Medical Department's ward facilities. And judging by the recovery of the patients afterwards, these measures have shown clear results.</p>
                              <p>"The idea of medical treatment isn't just to bring patients out of life-threatening situations. It's just as important that we provide ample care to the sick, keeping their bodies and minds healthy so they can fend off encroaching illness. It's long-term work, and requires plenty of patience, attention, and concern for your patients from the bottom of your heart." An additional paragraph authored by Hibiscus, from a revision of the Rhodes Island Medical Department handbook.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>When Rhodes Island's Medic Operators are carrying out field missions, they typically have at least one Field Operator accompanying, so as to ensure the safety of medical personnel. We noted a fair degree of disconcerting information in reports from Field Operators who've worked alongside Hibiscus.</p>
                              <p>"Mission got off to a rocky start. Local Infected was clearly cautious of, even hostile towards us..."</p>
                              <p>"I was a hair from beating the hell out of him. What reined me in in the end wasn't Rhodes employee regulations, it was Dr. Hibiscus... I know he was Infected. I am too, so is Dr. Hibiscus. He was clearly aware she had saved his life. So how could he say those things to her... No conflict ultimately arose between us."</p>
                              <p>The above is an extract from one such Field Operator's mission report. However, similar notes appear in the reports of many other operators that work with Hibiscus. More concerning still is that all incidents of this nature go completely unmentioned in her own mission reports.</p>
                              <p>Hibiscus's consistent silence regarding this has worried more than us: Lava has also repeatedly asked that we pay closer mind to Hibiscus's physical and mental state.</p>
                              <p>"She's not gonna say anything about it herself. But that doesn't mean it doesn't bother her... I want you to keep an eye on her for me. After all, she's just a dummy who acts like she can take care of herself. That's it. She just acts like it."</p>
                              <p>Renouncing prejudice and hatred has always been the stance of Rhodes Island, but we cannot deny that such animosity for Infected and the Sarkaz objectively exists, all across the land. While shouldered with such a complex identity, and doing everything she can to fulfill her duties as a doctor, the source of hostility is more often than not the very one she's trying to help. Others can only imagine the pressure she must be bearing, truly empathizing is something else altogether. We very much hope that Hibiscus can open her heart to others. But until she herself seeks help, all we can do is continue to watch over her and give her a degree of choice when assigning missions.</p>
                              <p>So far, Hibiscus still has never refused a single field mission.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>Hibiscus often mentions the block of buildings where she used to live.</p>
                              <p>Based on her descriptions, it was akin to a slum hidden in a corner of bustling Londinium. Many who lived there were of different races and nationalities. There were Feline workers local to Londinium, as well as traders from Sargon and Vouivre. Everyone came from different backgrounds, but their shared experience of "we have to do all we can before we can put down roots here" was enough to bring them together.</p>
                              <p>As Hibiscus paints a picture of the peace and harmony there, colored in nostalgia, we can't help but wonder – could such a neighborhood truly exist? Especially now, years on, with the chaos Londinium has been through, we fear that even if that block was once reality, it's long since been reduced to ruins.</p>
                              <p>Perhaps she's seeing these things through rose-tinted glasses. Perhaps she was simply lucky, and this Sarkaz girl with no concept of prejudice found friendly faces in her first contact outside her household. Regardless, these earliest memories have become the simplest, yet staunchest grounds Hibiscus has for believing in goodwill. Upon these lands exist hatred and prejudice, but so too do love and kindness. As for which outnumbers which, it hardly seems a question at all to her. A lamp in the cold night may not be enough for warmth, but it can be what supports the conviction to keep going. By her own actions, the Hibiscus of today is passing down that lamp.</p>
                              <p>She may be far more resilient than we can imagine.</p>
                         </div>
                    }

                    promotionRecord={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Promote Lava the Purgatory to Elite 2</p>
                              <br className='break-size' />
                              <p>"...On this mission, Operator Hibiscus displayed exceptional professionalism. She looked after Infected with every ounce of her heart, acted decisively at critical moments, and from an objective lens removed the danger of a large-scale infection in the Afterglow... In summary, based on Hibiscus's outstanding performance, I suggest that she be awarded a corresponding promotion."</p>
                              <p>"But it's worth mentioning that during the mission, she often acted rashly without regard for her own safety. Though her intent was to better fulfil her duties as a doctor, we cannot condone such risky methods. Nobody requires that Rhodes Island's medical personnel place the safety of their patients ahead of their own; this cannot be considered a proper philosophy. We'd like Operator Hibiscus to make a habit of protecting herself from dangerous situations in the future."</p>
                              <p>–Extract from Rhodes Island Afterglow Branch Officer-in-Charge Andante's mission report on the Vyseheim incident</p>
                              <br className='break-size'/>
                              <p>"Vyseheim's Afterglow is a very interesting place. The coffee and specialty snacks are absolutely scrumptious, and the people love to sing and dance, not to mention how welcoming they are. During my mission as a Medic, I received plenty of assistance from the locals... I miss it there very much."</p>
                              <p>–Extract from Hibiscus's mission report on the Vyseheim incident</p>
                         </div>
                    }

                    classConversionRecord1={
                         <div>
                         </div>
                    }

                    classConversionRecord2={
                         <div>
                         </div>
                    }

                    appointedAsAssistant={
                         <p>Doctor–oh, no need to panic, I'm not dragging you into a checkup, I'd just like to sit down in here for a moment... Out of all of Rhodes Island, it feels like your office is the one place that hasn't changed.</p>
                    }

                    talk1={
                         <p>Doctor, we're about to partially renovate Rhodes Island's wards to better meet patient aftercare needs. I've written down all the supplies we need here. Would you like to check over it quickly? Yes, I am in charge of this work now.</p>
                    }

                    talk2={
                         <p>Doctor, I've adjusted the flavor of my healthy meals based on everyone's input. I came to realize that blindly insisting on my own views might not actually be best–you can only resolve conflicts better once you listen to the other side, and stand in their shoes... It would've been nice if I'd realized that sooner.</p>
                    }

                    talk3={
                         <p>I've always been so hard on everyone, keeping them to healthy schedules, never letting them do anything bad for their illness. It turns out I was the one failing at all of that, heheh... But don't worry, there's still a lot I've got to do. I'm not giving in yet.</p>
                    }

                    talkAfterPromotion1={
                         <p>Diseases don't just torment the body–they impact the mind too. "How will others see me? Can I ever live how I used to?" Everyone has worries like that... If I can't help my patients put them to rest, then my treatment isn't done yet.</p>
                    }

                    talkAfterPromotion2={
                         <p>I once saved a child in Leithanien. When she came to and saw me, she screamed for her life and ran away. Before that, I never thought there was much of a difference between Caprinae horns and Sarkaz horns. We can't change how everyone sees things, but at the very least, I don't want my patients to fear me.</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>I think Lava's really changed lately. She gets up and sleeps early without needing me to remind her, and she barely ever talks back when I nag her, but it's all the more worrying for some reason... Doctor, if you ever feel tired or depressed, you can come vent to me! I'd be perfectly happy!</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>This flute? It's actually an Arts staff. It's from when I went to Vyseheim. It was there I used Arts to harm someone for the first time, and it was the first I saw a friend leave us forever, just out of reach. Every time I hold this staff, all my feelings in that moment come back to me.</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>We happily see off recovered patients, and say goodbye to former companions with a smile. People come and leave. Our varied dreams may lead us to different paths, but we'll always mean something to each other... Doctor, would you be open for food with me today? I'll go and ask Lava along.</p>
                    }

                    idle={
                         <p>Doctor, you might be reliable with work, but you act just like a child when you're off. Now you're sleeping on desk again. I've told you so many times, it's bad for your spine, and you might catch a cold just like that... *sigh* If I'm not there one day, could you really take care of yourself?</p>
                    }

                    onboard={
                         <p>Doctor, I'm back–Umm, Doctor, I know my last field assignment took longer than usual, but don't look at me like you don't recognize me... Medic Operator Hibiscus, reporting in.</p>
                    }

                    watchingBattleRecord={
                         <p>Everyone's taking charge of themselves, now–that's nice to see.</p>
                    }

                    promotion1={
                         <p>I'm suddenly reminded of my time in A1, training with everybody... Everyone's matured so much now. I'll keep up the effort, for all we've been through.</p>
                    }

                    promotion2={
                         <p>odily trauma can be treated through medicine and surgery, but how do we cure the pain from hostility and prejudice? Healing people's hearts, Doctor, that's what I will devote myself to.</p>
                    }

                    addedToSquad={
                         <p>I won't fail you–this time, I'll be sure to protect everyone.</p>
                    }

                    appointedAsSquadLeader={
                         <p>I'm leading? I wasn't usually the one doing that before... No, I won't shirk responsibility.</p>
                    }

                    depart={
                         <p>Don't be afraid. I've got your backs.</p>
                    }

                    beginOperation={
                         <p>I'm not going to let you harm my friends.</p>
                    }

                    selectingOperator1={
                         <p>I'll make sure everyone's safe.</p>
                    }

                    selectingOperator2={
                         <p>Doctor, I'm here.</p>
                    }

                    deployment1={
                         <p>First aid ready. Medical support standying by.</p>
                    }

                    deployment2={
                         <p>I wish this to be the last time, if possible...</p>
                    }

                    inBattle1={
                         <p>If we can prevent more harm this way, I'll stand my ground.</p>
                    }

                    inBattle2={
                         <p>Please tell me if this hurts.</p>
                    }

                    inBattle3={
                         <p>I can do more than just heal.</p>
                    }

                    inBattle4={
                         <p>Hold it. There's no sense in getting any more hurt.</p>
                    }

                    fourStarResult={
                         <p>It's always easier to harm than heal. But... is it really something to be proud of...?</p>
                    }

                    threeStarResult={
                         <p>I'm so glad everyone could come back safe...</p>
                    }

                    subThreeStarResult={
                         <p>Prioritize treating the wounded. I'll guard against counterattacks.</p>
                    }

                    operationFailure={
                         <p>I still couldn't... protect everyone...</p>
                    }

                    assignedToFacility={
                         <p>Some beds have emptied.</p>
                    }

                    tap={
                         <p>You need me, Doctor?</p>
                    }

                    trustTap={
                         <p>Doctor, here's your healthy recipe for today. Make sure you eat on time.</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Staying healthy is just as important as working hard, Doctor. Don't let either slip.</p>
                    }
               />
               <Outfits display={outfitsDisplay}

                    // 8 entries for the 3 elites and 5 outfits limit
                    // i hope they dont add more than 5 limit to one op

                    //use flex or none
                    buttonVisibility={[
                         'flex',
                         'flex',
                         'flex',
                         'none',
                         'none',
                         'none',
                         'none',
                         'none',
                    ]}

                    outfitNames={[
                         'Default I',
                         'Default I',
                         'Default II',
                         '',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitDescriptions={[
                         <div className='outfits-description'>
                              <p>An outfit commonly worn by Operators.</p>
                              <p>While not as practical as a uniform, it's what they find most comfortable.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>An outfit commonly worn by Operators.</p>
                              <p>While not as practical as a uniform, it's what they find most comfortable.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>An outfit that has been improved after the Operator's Promotion.</p>
                              <p>Custom-made to suit each Operator's experiences and needs, these outfits are designed to provide them maximum flexibility on any battlefield. Furthermore, this is all done without compromising the comfort that they've come to expect.</p>
                         </div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                    ]}

                    outfitAddendums={[
                         '- Base outfit',
                         '- Base outfit',
                         '- Unlocked at Elite 2',
                         '',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_1024_hbisc2/char_1024_hbisc2_1b.png',
                         'characters/char_1024_hbisc2/char_1024_hbisc2_1b.png',
                         'characters/char_1024_hbisc2/char_1024_hbisc2_2b.png',
                         '',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2024nian_deco.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

               />
               <Resources display={resourcesDisplay}

                    // use flex or none
                    // 1st for E1, entire container, and the hr below, 2nd for E2

                    eliteVisibility={['flex', 'flex']}
                    eliteResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x20,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_ASC_MED1.png')"
                                   itemAmount='x4'
                                   itemDesc='Medic Chip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS2.png')"
                                   itemAmount='x3'
                                   itemDesc='Device' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G2.png')"
                                   itemAmount='x4'
                                   itemDesc='Orirock Cube' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x120,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_ASC_MED3.png')"
                                   itemAmount='x3'
                                   itemDesc='Medic Dualchip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x9'
                                   itemDesc='White Horse Kohl' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G3.png')"
                                   itemAmount='x18'
                                   itemDesc='Orirock Cluster' />
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    skillImages={[
                         'skills/skill_icon_skcom_atk_up[3].png',
                         'skills/skill_icon_skchr_hbisc2_2.png',
                         ''
                    ]}

                    skillNames={[
                         'Attack Up γ',
                         'Nurturing Touch',
                         ''
                    ]}

                    skillResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL1.png')"
                                   itemAmount='x4'
                                   itemDesc='Skill Summary 1' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL1.png')"
                                   itemAmount='x4'
                                   itemDesc='Skill Summary 1' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-1-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG2.png')"
                                   itemAmount='x7'
                                   itemDesc='Sugar' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH2.png')"
                                   itemAmount='x3'
                                   itemDesc='Polyester' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON2.png')"
                                   itemAmount='x4'
                                   itemDesc='Oriron' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PGEL3.png')"
                                   itemAmount='x4'
                                   itemDesc='Coagulating Gel' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IAM3.png')"
                                   itemAmount='x3'
                                   itemDesc='Incandescent Alloy' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE1.png')"
                                   itemAmount='x3'
                                   itemDesc='Manganese Ore' />
                         </div>,
                    ]}


                    //skill specialization stuff
                    skillSpecVisibility={[
                         'flex',
                         'flex',
                         'none'
                    ]}

                    skill1SpecResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x5'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE2.png')"
                                   itemAmount='x3'
                                   itemDesc='Manganese Trihydrate' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_CCF.png')"
                                   itemAmount='x2'
                                   itemDesc='Compound Cutting Fluid' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IAM4.png')"
                                   itemAmount='x3'
                                   itemDesc='Incandescent Alloy Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x5'
                                   itemDesc='RMA70-24' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x10'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_DS.png')"
                                   itemAmount='x4'
                                   itemDesc='D32 Steel' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RS.png')"
                                   itemAmount='x4'
                                   itemDesc='Refined Solvent' />
                         </div>
                    ]}

                    skill2SpecResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x5'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG2.png')"
                                   itemAmount='x3'
                                   itemDesc='Grindstone Polyhydrate' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL1.png')"
                                   itemAmount='x4'
                                   itemDesc='Loxic Kohl' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON4.png')"
                                   itemAmount='x3'
                                   itemDesc='Oriron Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IAM4.png')"
                                   itemAmount='x5'
                                   itemDesc='Incandescent Alloy Block' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x10'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OEU.png')"
                                   itemAmount='x4'
                                   itemDesc='Crystalline Electronic Unit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RS.png')"
                                   itemAmount='x3'
                                   itemDesc='Refined Solvent' />
                         </div>
                    ]}

                    skill3SpecResources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}

                    //module stuff

                    moduleVisibility={[
                         'flex',
                         'none',
                         'none',
                         'none',
                         'none'
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_hbisc2.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    moduleNames={[
                         'Crystal Corsage',
                         '',
                         '',
                         '',
                         ''
                    ]}
                    moduleCodes={[
                         'INC-X',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    //module 1
                    module1Missions={[
                         'During battle, have Hibiscus the Purifier use Nurturing Touch a total of 10 times (excluding Support Units)',
                         'Clear Side Story LE-4 with a 3-star rating; You must deploy your own Hibiscus the Purifier, and use Nurturing Touch at least 2 times'
                    ]}

                    module1Requirements={[
                         'Raise Hibiscus the Purifier\'s to Elite 2 Lv50',
                         'Raise Hibiscus the Purifier\'s trust to 50',
                         'Raise Hibiscus the Purifier\'s trust to 100'
                    ]}
                    module1Resources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x2'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG4.png')"
                                   itemAmount='x3'
                                   itemDesc='Sugar Lump' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x40,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl=""
                                   itemUrl=""
                                   itemAmount=''
                                   itemDesc='' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x2'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/mod_update_token_1.png')"
                                   itemAmount='x20'
                                   itemDesc='Data Supplement Stick' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x4'
                                   itemDesc='Oriron Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x50,000'
                                   itemDesc='LMD' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x2'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_2.png')"
                                   itemAmount='x8'
                                   itemDesc='Data Supplement Instrument' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x5'
                                   itemDesc='RMA70-24' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x60,000'
                                   itemDesc='LMD' />
                         </div>
                    ]}

                    // module 2
                    module2Missions={[
                         '',
                         ''
                    ]}

                    module2Requirements={[
                         '',
                         '',
                         ''
                    ]}

                    module2Resources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}


                    //module 3
                    module3Missions={[
                         '',
                         ''
                    ]}

                    module3Requirements={[
                         '',
                         '',
                         ''
                    ]}

                    module3Resources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}


                    // module 4
                    module4Missions={[
                         '',
                         ''
                    ]}

                    module4Requirements={[
                         '',
                         '',
                         ''
                    ]}

                    module4Resources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}

                    // module 5
                    module5Missions={[
                         '',
                         ''
                    ]}

                    module5Requirements={[
                         '',
                         '',
                         ''
                    ]}

                    module5Resources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}
               />

          </OperatorNav>
     )
}

export default Manifest