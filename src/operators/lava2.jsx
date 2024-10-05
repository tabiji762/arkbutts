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
               operatorName="Lava Alter"
               operatorClass="Caster"
               profile="charavatars/char_1011_lava2.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'block', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(84, 62, 105, 0.3)'
               accentColor='rgb(84, 62, 105)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_1011_lava2.png", "Lava the Purgatory", 'Splash Caster', 'Ranged', 'Arts', 5]}

                    // show elite1, show elite2
                    showElites={['block', 'block']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'flex', 'flex', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -10s', 'DP Cost -1', 'Improves Talent', 'DP Cost -1']}
                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'ATK +90']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 0, 0, -10, 0, -3, 0]}

                    // hp, def, atk
                    trustStats={[0, 0, 90]}

                    hpRange={[692, 962, 1203, 1543]}
                    defRange={[46, 70, 96, 115]}
                    atkRange={[370, 522, 670, 798]}
                    resRange={[10, 15, 20]}
                    redeployRange={[80, 80, 80]}
                    blockRange={[1, 1, 1]}
                    costRange={[32, 35, 35]}
                    aspdRange={[2.9, 2.9, 2.9]}

                    maxRangeValues={[50, 70, 80]}

                    opRanges={[
                         <table>
                              <tbody>
                                   <tr><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /></tr>
                                   <tr><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Deals AOE Arts damage</p>}

                    // flex or none

                    talent1Title={<h2>Spell Formation</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'flex']}
                    talent1Visibility={['none', 'flex', 'flex']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>Immediately obtains 15 SP after first deployment. On each deployment, grants SP +2 to other Caster allies on the field. When deployed, other Caster allies obtain +2 SP after deployment</p>,
                         <p>Immediately obtains 30 SP after first deployment. On each deployment, grants SP +4 to other Caster allies on the field. When deployed, other Caster allies obtain +4 SP after deployment</p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>Immediately obtains 20 <span className='blueText'>(+5)</span> SP after first deployment. On each deployment, grants SP +3 <span className='blueText'>(+1)</span> to other Caster allies on the field. When deployed, other Caster allies obtain +3 <span className='blueText'>(+1)</span> SP after deployment</p>,
                         <p>Immediately obtains 35 <span className='blueText'>(+5)</span> SP after first deployment. On each deployment, grants SP +5 <span className='blueText'>(+1)</span> to other Caster allies on the field. When deployed, other Caster allies obtain +5 <span className='blueText'>(+1)</span> SP after deployment</p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Alternate Operator'}
                    bskill2Title={'Heat Charge γ'}

                    bskill1img='bskills/bskill_ctrl_sp.png'
                    bskill2img='bskills/bskill_pow_spd3.png'

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
                         <p>When this Operator is assigned to a Power Plant, increases the drone recovery rate by <span className='blueText'>+20%</span></p>
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
                         'Flame Quenched Dagger',
                         'Ring of Hellfire',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skchr_lava2_1.png',
                         'skills/skill_icon_skchr_lava2_2.png',
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
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+2%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+4%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+6%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+8%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+10%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+12%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+14%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+16%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+18%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
                         <p>Attack Range <span className='blueText'>+1</span> tile, ATK <span className='blueText'>+20%</span>, and attack up to <span className='blueText'>2</span> targets simultaneously</p>,
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
                    skill1InitialSp={[10, 10, 10, 10, 10, 10, 10, 10, 10, 10]}
                    skill1SpCost={[60, 59, 58, 57, 56, 55, 54, 53, 52, 50]}
                    skill1Duration={[25, 26, 27, 28, 29, 30, 31, 32, 33, 35]}

                    // skill 2
                    skill2Content={[
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>30%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>30%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>30%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>35%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>35%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>35%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>40%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>40%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>40%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
                         <p>Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals <span className='blueText'>50%</span> ATK as Arts damage every second to all enemies in the surrounding 8 tiles</p>,
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
                    skill2InitialSp={[30, 30, 30, 30, 30, 30, 30, 30, 30, 30]}
                    skill2SpCost={[80, 79, 78, 77, 76, 75, 74, 73, 72, 70]}
                    skill2Duration={[30, 31, 32, 33, 34, 35, 36, 37, 38, 40]}

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
                    moduleNames={['Sarkaz\'s Knife', '', '', '', '']}
                    moduleCodes={['SPC-X', '', '', '', '']}
                    moduleTypes={[
                         'url(uniequiptype/spc-x.png)',
                         '',
                         '',
                         '',
                         '',
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_lava2.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    // 1 trait for each module
                    traitContent={[
                         <p>Deals AOE Arts damage <br/> Attack range <span className='blueText'>expands</span></p>,
                         '',
                         '',
                         '',
                         ''
                    ]}

                    // in order of the talent that is modified by the module 
                    // im banking on the hope that modules only change 1 talent and the trait stays constant through the 3 stages
                    // 1 talent for each module
                    talentNames={[
                         'Spell Formation',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    // use none or flex
                    moduleRangeVisibility={['flex', 'none', 'none', 'none', 'none']}

                    moduleRange={[
                         <table>
                              <tbody>
                                   <tr><td/><td/><td/></tr>
                                   <tr><td className='center-tile'/><td/><td/><td/></tr>
                                   <tr><td/><td/><td/></tr>
                              </tbody>
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
                         '+80', '+130', '+165'
                    ]}
                    module1Stat2Values={[
                         '+43', '+55', '+62'
                    ]}
                    module1Stat3Values={[
                         '', '', ''
                    ]}

                    module1TalentContent={[
                         <p>Immediately obtains 30 SP after first deployment. On each deployment, grants SP +4 to other Caster allies on the field. When deployed, other Caster allies obtain +4 SP after deployment <span className='orangeText'>(original)</span></p>,
                         <p>Immediately obtains 33 SP after first deployment. On each deployment, grants SP +4 to other Caster allies on the field. When deployed, other Caster allies obtain +4 SP after deployment</p>,
                         <p>Immediately obtains 35 SP after first deployment. On each deployment, grants SP +4 to other Caster allies on the field. When deployed, other Caster allies obtain +4 SP after deployment</p>,
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
                         'Lava the Purgatory',
                         'Female',
                         'Undisclosed',
                         'Victoria',
                         'Jun. 22',
                         'Sarkaz',
                         '158cm',
                         'Originium crystals distributed across the surface of her body, confirmed Infected by medical examination.'
                    ]}

                    physicalExam={[
                         'Standard',
                         'Standard',
                         'Normal',
                         'Standard',
                         'Excellent',
                         'Excellent'
                    ]}

                    profile={
                         <p>Born in Londinium, Victoria, Lava is the younger twin sister of her fellow Operator, Hibiscus. It has been a few years since she contracted Oripathy and came to Rhodes Island for treatment. She has remained ever diligent during her time in Rhodes Island and never wasted even a moment in her quest to hone her Originium Arts prowess.</p>
                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>12%</span></p>
                              <p>Mild crystallization visible on her left arm.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.28u/L</span></p>
                              <p>The extended, high-intensity training; high-risk Originium Arts research; and the frequent field operations that Purgatory has taken part in have naturally taken their toll on her condition. Thanks to the meticulous care of her instructor, Pith, and Medic Operator Hibiscus, Purgatory's condition, though deteriorating, is still kept at manageable levels.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Ever since our Originium Arts instructors took note of Lava's unparalleled talent for Arts, the instructors have formulated a full-fledged curriculum to allow Lava to master her Originium Arts more efficiently and systematically. The results were remarkable, and Lava herself has also become obsessed with her studies in Originium Arts and being able to put them into actual use, to the point that she neglects rest during her own free time. She has had the opportunity to study under the tutelage of many of our casters, including some particularly exceptional elite operators. This has been a source of pride to Lava, and it has given her all the more reason to spend time to improve her skills.</p>
                              <p>Lava has slowly come to realize that there is much more to Originium Arts than the physical damage you inflict on the surface; and they go much deeper than damage alone. Originium Arts is an academic discipline that is constantly being studied by casters, be it the research of the myriad of Arts there is or their origins. Operator Lava is particularly talented in this field of study, and she sought to seek out the truth and the meaning of this power by taking on the calamities that plague our world herself. During her pursuit and her participation of the neutralization of those countless crises, she slowly discovered her destiny, hidden behind the tragedies of Oripathy and war, and she is trying to take control of it.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Although she may seem to be a rebellious young woman, ignorant of world affairs, Operator Lava is actually very scrupulous. She empathizes with society's underdogs and the insignificant yet most important wishes they have, and she takes it upon herself to help them. As she becomes more powerful, the responsibility she shoulders also becomes greater – This is not limited to the missions that she must complete as a Rhodes Island operator, but also what she asks from herself, her refusal to turn her back on those in need, and her strong desire to correct society's injustices. As Lava was raised in a normal family, poverty and unfairness were never on Lava's mind, yet after she started to live on her own, as a Sarkaz and an Infected, Lava gradually came to be aware of the immense, uncalled-for hatred that society has toward the "oppressed."</p>
                              <p>Because there are limits to her power, there are bound to be those who seek her aid that she cannot save. Because of her status as a Sarkaz and an Infected, she will always be antagonized by certain intolerant strangers. In her pursuit of justice, Lava has gradually come to understand that the "right way" she has read in books is nothing like the reality she faces. Having gone through so many incidents during her time at Rhodes Island, she has slowly come to understand its ideals, even choosing to firmly stand on its side. This is a choice that she has made herself – Rhodes Island showed her the way, and she has long become an inseparable member as she continued to grow. In the future, she will undoubtedly be an important key to Rhodes Island's growth and leadership.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>Just as Operator Lava's power continued to improve, so too did her combat equipment. Along with the gradual improvement in its performance, the appearance of her combat uniform is one of the aspects that she pays the most attention to. As can be seen in her language and the way she interacts with others, Lava has become much more mature and approachable. Perhaps this is why she's become somewhat apprehensive about revealing her interests.</p>
                              <p>"What's that? You're kidding! Lava spent her pay on tweaking her combat outfit again? She always spends her allowance on weird stuff like this, but I really just don't see the difference. Well... Now that you mention it, compared to when she just started out, her outfit's changed quite a bit. She changes it little by little, though. How is anyone supposed to notice?! Last time, she got so mad just because of this, saying I didn't care about her as a sister. That I forced all those healthy meals on her, but I never paid attention to her hairstyle and how she changes her outfit... Sheesh, of course I care about her. I care about her so much, I know what kinds of food she eats, how many times she goes to the bathroom, and when exactly she goes to bed and wakes up each and every day," said Operator Hibiscus, her arms confidently crossed as she unwittingly confessed to abusing her privileges to our record keeping personnel.</p>
                              <p>"That 'costume?' Eh, that's no costume in the first place, and I definitely didn't make her wear it. That's just what girls like to do. We want to know if anyone notices what's changed about us. That's why she went through all that trouble putting that movie together all while not leaving even a trace. She wanted to show all that off to everyone. It turned out okay. Everyone seemed to like the way she looked. That's why she keeps all those outfits and works on her hair, adding new elements she comes up with bit by bit. Don't you think Lava was boring when she spent all her time picking up those simple Arts tricks? Hobbies like this are what make girls cute," quipped a certain laid-back operator as she waved her fan around, joining in on the message's recording on her own accord.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>Having demonstrated her prowess in our evaluations, Lava left Reserve Op Team A1 she was assigned to after she became a full-fledged member. To Lava, her time as an on-the-job trainee is irreplaceable. She had a group of kind and caring partners she could open her heart to; the effect this has had on her growth is simply beyond measure. Her relationship with Hibiscus has also finally been repaired, and the two sisters have learned to tolerate and understand each other. What a great ending.</p>
                              <p>"What do you mean, 'what a great ending?' Do you know how what she did right after I 'compromised' with her? Healthy meals, healthy meals, and healthy meals! Not only that, she even gets in the way of my training and makes me go to bed before it's even dark out so to keep me from pulling all-nighters! Hmph, I'm not gonna let her push me around anymore. We get along better than we used to, but I'm not gonna spend any more than time her than I have to."</p>
                              <p>Ahem... After that, Lava began to take part in operations of greater importance, becoming a powerful and dependable Caster.</p>
                              <p>We must take care to not underestimate the dangers and ploys that may harm us as we battle the many injustices in our world. This applies not only to Lava, but also Rhodes Island as a whole. Both have faced many seemingly unsurmountable dangers, and often sacrifices had to be made. During the ■■■■ Incident—</p>
                              <p>[Log Partially Missing]</p>
                              <p>—Having worked together for so long, this was undoubtedly the most difficult part of the whole incident to those teammates. After the ■■■■ Incident, it was as though Lava became a mature, full-grown adult in the span of a night, having learned to remain calm when it's time to part ways and to treasure the moments when we meet.</p>
                              <p>I just wish that... the children who grew up in such difficulties and hardships would know how to cherish their own lives after they come to understand the pain of loss.</p>
                              <p>
                                   [Addendum 1]
                                   <br/>
                                   Permission has not been granted to access information on related incidents.
                              </p>
                              <p>
                                   [Addendum 2]
                                   <br/>
                                   Out of respect for the wishes of the parties involved, access to certain information pertaining to the operator and the pertinent incidents has been restricted.
                              </p>
                              <p>
                                   [Addendum 3]
                                   <br/>
                                   Currently, Operator Lava's psychological condition remains mostly stable.
                              </p>
                         </div>
                    }

                    promotionRecord={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Promote Lava the Purgatory to Elite 2</p>
                              <br className='break-size' />
                              <p>As with all Rhodes Island operators, Lava is required to regularly undergo psychological evaluations and counseling. One point worthy of note is that Lava's mental health values are not particularly stable. After she finds herself involved in sudden, unexpected major incidents, Operator Lava always comes out demonstrating a stronger resolve and determination. In contrast, her mental health also deteriorates by a demonstrable degree. The value she sees in her own life decreases after each incident, just as the sacrificing herself to protect others becomes more and more of a viable strategy to her. The braver and stronger she gets, the higher the price she has to pay for her power.</p>
                              <p>This has been a source of concern to Medical Operator Hibiscus, who frequently misuses her permissions to retrieve the relevant data.</p>
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
                         <p>I have some free time, so I guess I could help you out... What's this? This has got nothing to do with disasters and Arts, just some normal paperwork? Hey!</p>
                    }

                    talk1={
                         <p>You wanna try some fortune-telling? Well, that brings me back. I haven't done it for a while. I could take a look at your fortune to kill some time, I guess. Hmm, if your luck isn't beyond words as always... Well, you're gonna have to prove my results wrong.</p>
                    }

                    talk2={
                         <p>I do research on Arts because it's part of my responsibilities as a Caster. If I can't even do that, how am I supposed to protect those who... Huh? You got sweets? For me? Uh, thanks...</p>
                    }

                    talk3={
                         <p>Hibiscus... My sister always helps people whenever they need, even if it's not part of her mission. It's like she's not a Sarkaz at all, what with how kind she is. I really wonder how many people there are in this world who will repay her kindness, though.</p>
                    }

                    talkAfterPromotion1={
                         <p>Why I'm not into fortune telling anymore? 'cause the fear and curiosity that people have about the future usually has to do with natural phenomena. That, and I've realized the results you get with fortune telling don't really mean much, having come face to face with so many cruelties.</p>
                    }

                    talkAfterPromotion2={
                         <p>In terms of performance, books and staffs are just about the same as Arts conductors. If you ask me, I think knives are much more practical. When you're exhausted after a melee, or you're out in the wilderness, just trying to survive, all those words in the books aren't going to do you much good.</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>It's a pain to fight as a team, but when I look back on those times I fought side by side with my Reserve Ops teammates now... It brings back memories, I guess. If I get the chance to fight alongside them again... No, never mind.</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>I wasn't that grumpy and curt now, was I? How come Hibiscus still treats me like a kid who hasn't grown up yet? It's like she's doing it to pick on me! We finally managed to make up, but it just ticks me off when I see her act so calm about it!</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>The times we live in are so messed up, there's just way too much malevolence going around in this world. We have to change that. I can't stand all those rotten hypocrites acting all kindhearted treating my fellow Sarkaz like that... just because of who we are.</p>
                    }

                    idle={
                         <p>Hmm... You always look so peaceful in your sleep.</p>
                    }

                    onboard={
                         <p>Hey, what's the big idea? Who let you come in without knock– Oh, it's you, Doctor. Why am I wearing this? Well... I'm hitting the training grounds to test my limits once more. Wanna come watch, Doctor?</p>
                    }

                    watchingBattleRecord={
                         <p>I got it all down.</p>
                    }

                    promotion1={
                         <p>There are lots of talented Casters out there, but I'm not so lucky. That's why I have to get stronger if I want to be able to save the world. Thanks for helping me out, Doctor.</p>
                    }

                    promotion2={
                         <p>I've got the hang of fire Arts now. If I keep working on this, I might just make it to the boundaries of modern Arts theory... I might even be able to manipulate space and matter.</p>
                    }

                    addedToSquad={
                         <p>I've got a good idea of the enemy's weaknesses. Let's go.</p>
                    }

                    appointedAsSquadLeader={
                         <p>I'm not good at this kinda stuff... Just gotta get this over with quickly, right?</p>
                    }

                    depart={
                         <p>I'm counting on you to have my back while I take care of the enemies.</p>
                    }

                    beginOperation={
                         <p>You've strayed from the path of righteousness. Your sinful souls deserve no mercy.</p>
                    }

                    selectingOperator1={
                         <p>No time to hesitate.</p>
                    }

                    selectingOperator2={
                         <p>Now!</p>
                    }

                    deployment1={
                         <p>Let's get this started.</p>
                    }

                    deployment2={
                         <p>Prepare to cast. </p>
                    }

                    inBattle1={
                         <p>Hah!</p>
                    }

                    inBattle2={
                         <p>Tear them apart!</p>
                    }

                    inBattle3={
                         <p>Too weak. There's no point in hiding!</p>
                    }

                    inBattle4={
                         <p>Your tricks won't work here!</p>
                    }

                    fourStarResult={
                         <p>It's only by overcoming challenges that we manage to accomplish something.</p>
                    }

                    threeStarResult={
                         <p>Hmph... Accept your defeat in pain and fear. Evil will always be defeated.</p>
                    }

                    subThreeStarResult={
                         <p>This shows how powerful we are now. It's far from enough, though. I know I can do better than this. No, I have to do better.</p>
                    }

                    operationFailure={
                         <p>Gah... I gotta... eradicate all evil...</p>
                    }

                    assignedToFacility={
                         <p>I still have lots to do. Let me stay here.</p>
                    }

                    tap={
                         <p>D-Don't pat my head!</p>
                    }

                    trustTap={
                         <p>I'm reading. There's still a lot I need to learn... It's time for tea already? Let's get going, then.</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Morning, Doctor.</p>
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
                         'Dusk Wisteria',
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
                              <p>0011 New Release/Dusk Wisteria</p>
                              <p>Handmade in Lungmen, tailor-fitted with special consideration to exotic design elements. The outfit has been improved in accordance with the customer's preference to incorporate Yan's novel trends.</p>
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
                         'characters/char_1011_lava2/char_1011_lava2_1.png',
                         'characters/char_1011_lava2/char_1011_lava2_1.png',
                         'characters/char_1011_lava2/char_1011_lava2_2b.png',
                         'characters/char_1011_lava2/char_1011_lava2_nian6b.png',
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
                                   itemUrl="url('icons/MTL_ASC_CST1.png')"
                                   itemAmount='x4'
                                   itemDesc='Caster Chip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G2.png')"
                                   itemAmount='x6'
                                   itemDesc='Orirock Cube' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE2.png')"
                                   itemAmount='x3'
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
                                   itemUrl="url('icons/MTL_ASC_CST3.png')"
                                   itemAmount='x3'
                                   itemDesc='Caster Dualchip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x8'
                                   itemDesc='White Horse Kohl' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG1.png')"
                                   itemAmount='x13'
                                   itemDesc='Grindstone' />
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    skillImages={[
                         'skills/skill_icon_skchr_lava2_1.png',
                         'skills/skill_icon_skchr_lava2_2.png',
                         ''
                    ]}

                    skillNames={[
                         'Flame Quenched Dagger',
                         'Ring of Hellfire',
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
                                   itemUrl="url('icons/MTL_SL_STRG1.png')"
                                   itemAmount='x7'
                                   itemDesc='Sugar Substitute' />
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
                                   itemUrl="url('icons/MTL_SL_OC3.png')"
                                   itemAmount='x4'
                                   itemDesc='Crystalline Component' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G3.png')"
                                   itemAmount='x4'
                                   itemDesc='Orirock Cluster' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS3.png')"
                                   itemAmount='x2'
                                   itemDesc='Integrated Device' />
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
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x3'
                                   itemDesc='White Horse Kohl' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE3.png')"
                                   itemAmount='x5'
                                   itemDesc='Aketon' />
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
                                   itemUrl="url('icons/MTL_SL_DS.png')"
                                   itemAmount='x4'
                                   itemDesc='D32 Steel' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x4'
                                   itemDesc='RMA70-24' />
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
                                   itemUrl="url('icons/MTL_SL_MANGANESE2.png')"
                                   itemAmount='x3'
                                   itemDesc='Manganese Trihydrate' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS3.png')"
                                   itemAmount='x2'
                                   itemDesc='Integrated Device' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G4.png')"
                                   itemAmount='x3'
                                   itemDesc='Orirock Concentration' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG2.png')"
                                   itemAmount='x4'
                                   itemDesc='Grindstone Pentahydrate' />
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
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x3'
                                   itemDesc='Optimized Device' />
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
                         'uniequipimg/uniequip_002_lava2.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    moduleNames={[
                         'Sarkaz\'s Knife',
                         '',
                         '',
                         '',
                         ''
                    ]}
                    moduleCodes={[
                         'SPC-X',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    //module 1
                    module1Missions={[
                         'Defeat a total of 80 enemies with Lava the Purgatory (excluding Support Units)',
                         'Clear Side Story WR-4 with a 3-star rating; You must deploy your own Lava the Purgatory, and have Lava the Purgatory defeat at least 8 enemies, including at least 1 "Lazy"'
                    ]}

                    module1Requirements={[
                         'Raise Lava the Purgatory\'s to Elite 2 Lv50',
                         'Raise Lava the Purgatory\'s trust to 50',
                         'Raise Lava the Purgatory\'s trust to 100'
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
                                   itemUrl="url('icons/MTL_SL_MANGANESE2.png')"
                                   itemAmount='x3'
                                   itemDesc='Manganese Trihydrate' />
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
                                   itemUrl="url('icons/MTL_SL_G4.png')"
                                   itemAmount='x5'
                                   itemDesc='Orirock Concentration' />
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