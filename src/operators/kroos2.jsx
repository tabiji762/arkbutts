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
               operatorName="Kroos Alter"
               operatorClass="Sniper"
               profile="charavatars/char_1021_kroos2.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'block', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(168, 131, 71, 0.3)'
               accentColor='rgb(168, 131, 71)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_1021_kroos2.png", "Kroos the Keen Glint", 'Marksman Sniper', 'Ranged', 'Physical', 5]}

                    // show elite1, show elite2
                    showElites={['block', 'block']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'flex', 'flex', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -10s', 'DP Cost -1', 'Improves Talent', 'DP Cost -1']}
                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'ATK +75']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 0, 0, -10, 0, -3, 0]}

                    // hp, def, atk
                    trustStats={[0, 0, 75]}

                    hpRange={[679, 971, 1246, 1520]}
                    defRange={[61, 103, 148, 176]}
                    atkRange={[169, 283, 411, 502]}
                    resRange={[0, 0, 0]}
                    redeployRange={[80, 80, 80]}
                    blockRange={[1, 1, 1]}
                    costRange={[13, 15, 15]}
                    aspdRange={[1, 1, 1]}

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

                    traitText={<p>Attacks aerial enemies first</p>}

                    // flex or none

                    talent1Title={<h2>Bullseye</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'flex']}
                    talent1Visibility={['none', 'flex', 'flex']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>When attacking, has a 10% chance to deal 150% damage and Stun the target for 0.2 seconds</p>,
                         <p>When attacking, has a 20% chance to deal 150% damage and Stun the target for 0.2 seconds</p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>When attacking, has a 10% chance to deal 160% <span className='blueText'>(+10%)</span> damage and Stun the target for 0.2 seconds</p>,
                         <p>When attacking, has a 20% chance to deal 160% <span className='blueText'>(+10%)</span> damage and Stun the target for 0.2 seconds</p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Alternate Operator'}
                    bskill2Title={'Combat Techniques: Marksman'}

                    bskill1img='bskills/bskill_ctrl_sp.png'
                    bskill2img='bskills/bskill_train_fastshot.png'

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
                         <p>When this Operator is assigned to be the Trainer in the Training Room, <span className='blueText'>Sniper Operators'</span> Specialization training speed +30%; if the trainee's Job Branch is <span className='blueText'>Marksman</span>, training speed will be further increased by <span className='blueText'>+45%</span></p>
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
                         'Traceless',
                         'Silencer',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skchr_kroos2_1.png',
                         'skills/skill_icon_skchr_kroos2_2.png',
                         ''
                    ]}
                    skillRecoveryTypes={[
                         'Offensive Recovery',
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
                         <p>ATK <span className='blueText'>+10%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+13%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+16%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+20%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+23%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+26%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+30%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+33%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+36%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
                         <p>ATK <span className='blueText'>+40%</span>, attacks hit <span className='blueText'>2</span> times in a row and gain <span className='blueText'>Camouflage</span></p>,
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
                    skill1InitialSp={[3, 3, 3, 5, 5, 5, 7, 8, 9, 10]}
                    skill1SpCost={[20, 20, 20, 17, 17, 17, 15, 15, 15, 15]}
                    skill1Duration={[11, 11, 11, 12, 12, 12, 13, 14, 14, 15]}

                    // skill 2
                    skill2Content={[
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>40</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>36</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>32</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
                         <p>Attack Interval reduces slightly and attacks hit <span className='blueText'>2</span> times in a row. After hitting a target <span className='blueText'>32</span> times, attacks hit <span className='blueText'>4</span> times in a row for the remainder of the skill duration</p>,
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
                    skill2InitialSp={[10, 11, 12, 15, 16, 17, 20, 20, 25, 25]}
                    skill2SpCost={[50, 49, 48, 45, 44, 43, 40, 40, 40, 35]}
                    skill2Duration={[22, 22, 22, 24, 24, 24, 26, 28, 28, 30]}

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
                    moduleNames={['Truth or Dare', '', '', '', '']}
                    moduleCodes={['MAR-X', '', '', '', '']}
                    moduleTypes={[
                         'url(uniequiptype/mar-x.png)',
                         '',
                         '',
                         '',
                         '',
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_kroos2.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    // 1 trait for each module
                    traitContent={[
                         <p>Attacks aerial enemies first <br/> Increases ATK to <span className="blueText">110%</span> when attacking aerial targets</p>,
                         '',
                         '',
                         '',
                         ''
                    ]}
                    
                    // in order of the talent that is modified by the module 
                    // im banking on the hope that modules only change 1 talent and the trait stays constant through the 3 stages
                    // 1 talent for each module
                    talentNames={[
                         'Bullseye',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    // use none or block
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
                         '+110', '+160', '+190'
                    ]}
                    module1Stat2Values={[
                         '+22', '+27', '+31'
                    ]}
                    module1Stat3Values={[
                         '', '', ''
                    ]}

                    module1TalentContent={[
                         <p>When attacking, has a 20% chance to deal 150% damage and Stun the target for 0.2 seconds <span className='orangeText'>(original)</span></p>,
                         <p>When attacking, has a 20% chance to deal 160% damage and Stun the target for 0.2 seconds</p>,
                         <p>When attacking, has a 20% chance to deal 165% damage and Stun the target for 0.2 seconds</p>,
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
                         'Kroos The Keen Glint',
                         'Female',
                         'Undisclosed',
                         'Rim Billiton',
                         'Nov. 22',
                         'Cautus',
                         '161cm',
                         'Confirmed Infected by medical examination.'
                    ]}

                    physicalExam={[
                         'Standard',
                         'Standard',
                         'Standard',
                         'Excellent',
                         'Excellent',
                         'Standard'
                    ]}

                    profile={
                         <p>Following extensive training and practical experience, Kroos has been smoothly promoted to formal Operator status, principally tasked with field missions. Under the guidance of Rhodes Island's Instructors and from tempering in the field, she has greatly matured, gaining her own insight into and views on firing techniques and concealing movements.</p>
                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>10%</span></p>
                              <p>Very fortunately, she continues to present no obvious external symptoms of Oripathy.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.25u/L</span></p>
                              <p>Oripathy shows signs of spread, owing to her undertaking of long-term field assignments. Close attention needs to be paid.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>After years of maturing, everyone can clearly see how Kroos has transformed. Is she taller? For a fact. Is her hair longer? Sure is. Have her tastes shifted? Seeing how she dresses now, you'd be right. Apart from those changes though, she still seems to be the same Kroos we know and love. She loves to play, laugh, and goof off. However, if you ever see her curled up in some corner, napping, pay careful attention to whether she really is off-guard. The old her would lazily greet you as you approach, still half-asleep. Now? Get just a little closer, and next second you'll find yourself caught her trap. Then she'll shoot to her feet, free you from it, and tell you in that same old tone that it was just a little prank. But after seeing her proficiency at disassembling her traps, and that her crossbow was specially refitted with a bayonet, we're sure you'll realize at least one thing.</p>
                              <p>No longer is she Reserve Operator Kroos. </p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Excerpts from Kroos' trapping notes: On 'Magic Tricks'</p>
                              <p>
                                   'Marathon Alarms'
                                   <br />
                                   This is that prank Fang and the rest pulled to get me out of bed, but now I finally get to use it on others! Wish I could see the looks on their faces when they wake up from their nap to find a few extra alarm clocks~
                                   <br />
                                   Notes: Not to be used bedside or on people in deep sleeps, they'll wake up grumpy.
                                   <br />
                                   .....
                                   <br />
                                   People stuck in combat situations get very sensitive to sounds. That's how they become part of the trap themselves, one after another. Can completely numb the enemy's senses, or alert teammates that they're coming. But not all that practical, on account of all the alarm clocks you'd need. Switch out for appropriate substitute based on the battlefield.
                              </p>
                              <p>
                                   'Invisible Warning Tape'
                                   <br />
                                   There's a lot of fun to be had with a roll of clear sticky tape. Most classic's when you stick strips all across a doorframe and lead a good friend into it. Watching them get stuck or even trip really brings a smile to your face!
                                   <br />
                                   Notes: Target must however be chosen with care, and watch the mood they're in. If it doesn't turn out funny, apologize straight away
                                   <br />
                                   .....
                                   <br />
                                   At first I used tactical rope, but nowadays this purpose-developed tripwire has the edge in concealment, weight and price. Based on real combat testing, this see-through thread gets exactly the effect you want, and even marries well with other traps. Gives you a level of lethality from the materials alone, and can be wound in a pinch to work as tactical rope. Considering how all-purpose it is, I should apply for a reel with Logistics next time I'm out on the field. Majorly useful.
                              </p>
                              <p>
                                   'Hollow Cake'
                                   <br />
                                   Preparing this one's a pain in the rear, but especially funny. Hollow out a hole in a cake, fill it with other stuff and then re-cover. Wait for everyone's looks when they come to eat the cake and find "something nice" inside.
                                   <br />
                                   Notes: Some people don't have very good teeth, so make sure not to stuff anything too hard in.
                                   <br />
                                   .....
                                   <br />
                                   You're not just limited to food when you pull this one in practical combat. Kettles, cupboards, supplies. Just use your thinker, and the world's full of stuff to use against your enemies.
                              </p>
                              <p>
                                   'Me'
                                   <br />
                                   My mates have always loved showing up next to me from out of nowhere to scare me, which got me thinking: if I use myself to draw their attention, won't it be even harder for them to notice all the little shadows where I've tucked my pranks?
                                   <br />
                                   Notes: People have all their focus on you when they scare you, so you'd best not make any moves and give it away.
                                   <br />
                                   .....
                                   <br />
                                   What does the enemy most want to see? Me, of course. Me, hurt. Me, dead. The instructors said: "No hunter hunts forever." There'll always come a day when a Sniper Operator becomes someone else's prey. So why not... treat myself as bait, and give the other guy a "nice surprise?" Right, no hunter hunts forever, but there are some hunters who'll disguise themselves as the prey.
                              </p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>After passing the examination and becoming a formal Operator, Kroos is now qualified to accept solo missions. Her treatment of assignments is painstakingly conscientious. She can delicately sort out all manner of conflicting views, and she's more than fluent in communicating with her employers. She's never had a contract broken or an assignment failed. When on field missions with other operators, she rigorously abides by schedules and even raises her own views, all to ensure the mission succeeds perfectly. When on break from field work, she remains aboard Rhodes Island, where she'll assist the instructors by sharing her combat experiences with the reserve operators. Or perhaps she'll take part in some recon and solo operation training, either way keeping her itinerary full. The Kroos of today is a cheerful, good-humored, and self-disciplining woman; she's discarded her bad habits, and strived to excel at what she does. You've long since known that Kroos was worth trusting, but now you can rest easy while she's on almost any assignment, because you know she'll never betray your confidence.</p>
                              <p>The facts have proven as much.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>At this point, how long has Kroos gone without rest?</p>
                              <p>It all depends on how you define "rest." If it means closing her eyes and sleeping, she isn't much different from back then. But if rest means unloading her burdens and falling deep in dreamland without a care in the world?</p>
                              <p>In that case, it's been a very long time now.</p>
                              <p>Because of her mistake.</p>
                              <p>Or put another way– what she's fixated on as her mistake.</p>
                              <p>In Rim Billiton, when Reserve Op Team A1 still operated together, a bolt skewered the body of a squadmate, and it left its eternal scar on Kroos' spirit too.</p>
                              <p>If only she hadn't been nervous, if only her shot hadn't strayed, if only she'd kept tighter aim, none of it would've happened.</p>
                              <p>This is what she tells herself.</p>
                              <p>Again and again.</p>
                              <p>On the battlefield, everything changes in the blink of an eye, and she'd already done the best she could. Everyone told her that.</p>
                              <p>But, after seeing that scar in front of her, she still can't forgive herself.</p>
                              <p>She should've done better.</p>
                              <p>She has to do better.</p>
                              <p>.....</p>
                              <p>Ever since then, her sleep's become unusually light.</p>
                              <p>She confirms the rustle of every blade of grass, every sound on the pavement, one by one.</p>
                              <p>She's scared.</p>
                              <p>Scared of her own negligence, of allowing another crisis to befall a comrade.</p>
                              <p>She's long since been unable to sleep soundly, even aboard Rhodes Island.</p>
                              <p>And the reward she most hopes for at the end of a hard day's work has changed too, from a neverending dream, to a simple breather on a bench.</p>
                              <p>This, for her and her alone,</p>
                              <p>is the price of maturity.</p>
                         </div>
                    }

                    promotionRecord={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Promote Kroos the Keen Glint to Elite 2</p>
                              <br className='break-size' />
                              <p>
                                   Rhodes Island Workshop Armament Remodel Record
                                   <br />
                                   Client Operator: Kroos
                                   <br />
                                   Client Armament: Rhodes Island Standardized Crossbow
                              </p>
                              <p>
                                   Remodeling Entry 1
                                   <br />
                                   Details of remodeling: personalization adjustments
                                   <br />
                                   Results of remodeling: added trinketry in every known color
                                   <br />
                                   Reason for remodeling: personal operator preference
                              </p>
                              <p>
                                   Remodeling Entry 2
                                   <br />
                                   Details of remodeling: sights
                                   <br />
                                   Results of remodeling: removed optical sights, switched for iron sights
                                   <br />
                                   Reason for remodeling: personal operator use habit, (speculation) optical possibly obstructing field of view
                              </p>
                              <p>
                                   Remodeling Entry 3
                                   <br />
                                   Details of remodeling: personalization adjustments
                                   <br />
                                   Results of remodeling: removed trinketry, added new trinketry onto crossbow body, used high friction material by operator request
                                   <br />
                                   Reason for remodeling: (speculation) personal operator preference changed
                              </p>
                              <p>
                                   Remodeling Entry 4
                                   <br />
                                   Details of remodeling: whole body
                                   <br />
                                   Results of remodeling: used newest materials to increase strength of entire crossbow, improved load method, further boosting operator rate of rapid-fire
                                   <br />
                                   Reason for remodeling: operator proposed adjustments based on near-future fieldwork and change in style of weapon use
                              </p>
                              <p>
                                   Remodeling Entry 5
                                   <br />
                                   Details of remodeling: foregrip attachment
                                   <br />
                                   Results of remodeling: installed bayonet on foregrip
                                   <br />
                                   Reason for remodeling: unclear, (speculation) for extreme cases where sniper operator has close combat needs
                              </p>
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
                         <p>We'll be alright without sorting these files, won't we? Can lie down for a bit more, then. It's good for you, the more you rest. Gets rid of those bags under your eyes, at least.</p>
                    }

                    talk1={
                         <p>Got a heap of useful info from our mission in Yan this time. It's all written up in a report, submitted and filed. Come on, Doctor, I'm not a reserve op anymore. I can pull up my socks and write a report start to finish, easy enough.</p>
                    }

                    talk2={
                         <p>At the end of the day, the best thing to do with apples is munch them outright, or bake them into pies so you can share with everyone– it's too wasteful using them as targets. And if you just want to split one in two, you're better off with a kitchen knife and all.</p>
                    }

                    talk3={
                         <p>I've got a bucketload of magic tricks to bring friends closer. The "marathon alarms," the "invisible warning tape," the "hollow cake," they're all brilliant at their job. What ones do you fancy learning, Doctor?</p>
                    }

                    talkAfterPromotion1={
                         <p>I'm awake, Doctor. I'm not like I was then–it's not that easy to sleep even if I want to. What do you need me doing? Any field missions? Maybe instructing the reserve ops?</p>
                    }

                    talkAfterPromotion2={
                         <p>Accidents always happen too quickly. Quicker than a bolt flies, even. And I can never react in time. And then I just watch things happen one after another, and... it'd be nice if I could be like you, Doctor, see some things coming. At least, when it comes to preparing, I've got confidence I don't botch anything.</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>Doctor, don't tiptoe behind me again! I know when you're close up most times, but on the off-chance you sneak a bit too well, I might just give you a bad scare out of reflex.</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>We all came out of that fight in Rim Billiton a bit more grown up, but... *exhale*... It'd be nice if getting better didn't come with a cost, you know...</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>There's no place you can escape to, and no dreams you don't wake up from. When we face something terrible, we can only choose to give it our all, hard as we can. Might leave a sting or an ache, but at the very least, you won't carry that regret all your life.</p>
                    }

                    idle={
                         <p>You know, it's a happy thing, getting to fall asleep.</p>
                    }

                    onboard={
                         <p>Hi-hiii~! Doctor! I'm back! Haven't got caught up in hassle lately, have you? Haha, that's good. Right, I'm heading back to my room to rest up. If there's anything you want dealing with, remember to give me a shout.</p>
                    }

                    watchingBattleRecord={
                         <p>Some still fight the same as ever. It's nice to see.</p>
                    }

                    promotion1={
                         <p>I've gotten these badges how many times now? But whenever hand me one, Doctor, I'm as happy as could be.</p>
                    }

                    promotion2={
                         <p>Once you raise your crossbow, the only things left swimming in your eyes are your sight and your target. But before you pull the trigger, there's so much you've got to think about... I won't have a shred of neglect, ever again.</p>
                    }

                    addedToSquad={
                         <p>Hi, everyone! I'm here to slack off~</p>
                    }

                    appointedAsSquadLeader={
                         <p>Alright, I'll be handing out jobs, then.</p>
                    }

                    depart={
                         <p>We're heading out! Remember to mind your cover!</p>
                    }

                    beginOperation={
                         <p>Relax, relax! The targets aren't that bad.</p>
                    }

                    selectingOperator1={
                         <p>Go ahead, I've been ready and set.</p>
                    }

                    selectingOperator2={
                         <p>Oh? Is it my turn?</p>
                    }

                    deployment1={
                         <p>Shh! Don't make any more noise!</p>
                    }

                    deployment2={
                         <p>On alert!</p>
                    }

                    inBattle1={
                         <p>Where d'you think you're going?</p>
                    }

                    inBattle2={
                         <p>kokodayoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
                    }

                    inBattle3={
                         <p>Stand still.</p>
                    }

                    inBattle4={
                         <p>Bye byeeee~</p>
                    }

                    fourStarResult={
                         <p>That's spot-on work! Have a rest, Doctor, I'll keep a watch on the follow-up.</p>
                    }

                    threeStarResult={
                         <p>So long as it turns out well, a little pain's no big problem.</p>
                    }

                    subThreeStarResult={
                         <p>They won't be much threat. D'you want me to catch up with them?</p>
                    }

                    operationFailure={
                         <p>We have an orderly retreat! Don't let yourself panic!</p>
                    }

                    assignedToFacility={
                         <p>This place is nice! Maybe I can find some beauty sleep in here. </p>
                    }

                    tap={
                         <p>Heheh.</p>
                    }

                    trustTap={
                         <p>You can't go just yet! I've got a nice surprise ready for all my friends!</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Yaaawn... good morning~ </p>
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
                         'flex',
                         'none',
                         'none',
                         'none',
                         'none',
                    ]}

                    outfitNames={[
                         'Default I',
                         'Default I',
                         'Default II',
                         'Along the Corridor',
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
                         <div className='outfits-description'>
                              <p>0011 New Arrivals/Along the Corridor</p>
                              <p>Made by Lungmen craftsmen from premium Shangshu silk. Elegant and classical patterns with cyan lining make for a dignified outfit.</p>
                         </div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                    ]}

                    outfitAddendums={[
                         '- Base outfit',
                         '- Base outfit',
                         '- Unlocked at Elite 2',
                         '- Store, 18op',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_1021_kroos2/char_1021_kroos2_1b.png',
                         'characters/char_1021_kroos2/char_1021_kroos2_1b.png',
                         'characters/char_1021_kroos2/char_1021_kroos2_2b.png',
                         'characters/char_1021_kroos2/char_1021_kroos2_nian8b.png',
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
                                   itemUrl="url('icons/MTL_ASC_SNP1.png')"
                                   itemAmount='x4'
                                   itemDesc='Sniper Chip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH3.png')"
                                   itemAmount='x5'
                                   itemDesc='Polyester' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE2.png')"
                                   itemAmount='x2'
                                   itemDesc='Polyketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x120,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_ASC_SNP3.png')"
                                   itemAmount='x3'
                                   itemDesc='Sniper Dualchip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OC4.png')"
                                   itemAmount='x7'
                                   itemDesc='Crystalline Circuit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x10'
                                   itemDesc='Oriron Cluster' />
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    skillImages={[
                         'skills/skill_icon_skchr_kroos2_1.png',
                         'skills/skill_icon_skchr_kroos2_2.png',
                         ''
                    ]}

                    skillNames={[
                         'Traceless',
                         'Silencer',
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
                                   itemUrl="url('icons/MTL_SL_KETONE1.png')"
                                   itemAmount='x5'
                                   itemDesc='Diketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS2.png')"
                                   itemAmount='x2'
                                   itemDesc='Device' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G2.png')"
                                   itemAmount='x8'
                                   itemDesc='Orirock Cube' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS3.png')"
                                   itemAmount='x3'
                                   itemDesc='Integrated Device' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL1.png')"
                                   itemAmount='x3'
                                   itemDesc='Loxic Kohl' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE3.png')"
                                   itemAmount='x3'
                                   itemDesc='Aketon' />
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
                                   itemUrl="url('icons/MTL_SL_IAM4.png')"
                                   itemAmount='x3'
                                   itemDesc='Incandescent Alloy Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7012.png')"
                                   itemAmount='x3'
                                   itemDesc='RMA70-12' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OC4.png')"
                                   itemAmount='x3'
                                   itemDesc='Crystalline Circuit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PGEL4.png')"
                                   itemAmount='x5'
                                   itemDesc='Polymerized Gel' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x10'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BN.png')"
                                   itemAmount='x4'
                                   itemDesc='Bipolar Nanoflake' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x3'
                                   itemDesc='Optimized Device' />
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
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x3'
                                   itemDesc='Oriron Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_SS.png')"
                                   itemAmount='x1'
                                   itemDesc='Semi-Synthetic Solvent' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PLCF.png')"
                                   itemAmount='x3'
                                   itemDesc='Cutting Fluid Solution' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x4'
                                   itemDesc='Optimized Device' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x10'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PP.png')"
                                   itemAmount='x4'
                                   itemDesc='Polymerization Preparation' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x4'
                                   itemDesc='Oriron Block' />
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
                         'uniequipimg/uniequip_002_kroos2.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    moduleNames={[
                         'Truth or Dare',
                         '',
                         '',
                         '',
                         ''
                    ]}
                    moduleCodes={[
                         'MAR-X',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    //module 1
                    module1Missions={[
                         'During battle, have Kroos the Keen Glint use Silencer a total of 5 times (excluding Support Units)',
                         'Clear Main Theme 3-8 with a 3-star rating; You must deploy your own Kroos the Keen Glint, and have Kroos the Keen Glint defeat Skullshatterer'
                    ]}

                    module1Requirements={[
                         'Raise Kroos the Keen Glint\'s to Elite 2 Lv50',
                         'Raise Kroos the Keen Glint\'s trust to 50',
                         'Raise Kroos the Keen Glint\'s trust to 100'
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
                                   itemUrl="url('icons/MTL_SL_IAM4.png')"
                                   itemAmount='x3'
                                   itemDesc='Incandescent Alloy Block' />
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
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x4'
                                   itemDesc='RMA70-24' />
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
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x5'
                                   itemDesc='Optimized Device' />
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