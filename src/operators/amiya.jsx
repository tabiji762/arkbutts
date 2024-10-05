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
               operatorName="Amiya"
               operatorClass="Caster"
               profile="charavatars/char_002_amiya.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'block', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(180, 40, 60, 0.3)'
               accentColor='rgb(180, 40, 60)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_002_amiya.png", "Amiya", 'Core Caster', 'Ranged', 'Arts', 5]}

                    // show elite1, show elite2
                    showElites={['block', 'block']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'flex', 'flex', 'none']}

                    potentialInfo={['Max HP +200', 'DP Cost -1', 'ATK +30', 'DP Cost -1', 'Improves Talent']}
                    trustInfoVisibility={['block', 'block']}
                    trustInfo={['HP +200', 'ATK +70']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[200, 0, 30, 0, 0, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[200, 0, 70]}

                    hpRange={[699, 958, 1198, 1480]}
                    defRange={[48, 81, 110, 121]}
                    atkRange={[276, 390, 514, 612]}
                    resRange={[10, 15, 20]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[1, 1, 1]}
                    costRange={[18, 20, 20]}
                    aspdRange={[1.6, 1.6, 1.6]}

                    maxRangeValues={[50, 70, 80]}

                    opRanges={[
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
                                   <tr><td className="center-tile" /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Deals Arts Damage</p>}

                    // flex or none
                    
                    talent1Title={<h2>???</h2>}
                    talent2Title={<h2>Emotional Absorption</h2>}
                    
                    talentWrapperVisibility={['flex', 'flex', 'flex']}
                    talent1Visibility={['flex', 'flex', 'none']}
                    talent2Visibility={['none', 'none', 'flex']}

                    talent1Text={[
                         <p>?????</p>,
                         <p>?????</p>,
                         <p></p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p>Restores 2 extra Skill Points when attacking an enemy and 8 extra Skill Points when killing an enemy</p>
                    ]}

                    potTalent1Text={[
                         <p>?????</p>,
                         <p>?????</p>,
                         <p></p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p>Restores 3 <span className='blueText'>(+1)</span> extra Skill Points when attacking an enemy and 10 <span className='blueText'>(+2)</span> extra Skill Points when killing an enemy</p>,
                    ]}

                    bskill1Title={'Agreement'}
                    bskill2Title={'Violin Solo'}

                    bskill1img='bskills/bskill_ctrl_t_spd.png'
                    bskill2img='bskills/bskill_dorm_all2.png'

                    bskillWrapperVisibility={['flex', 'flex', 'flex']}

                    bskill1Visibility={['flex', 'flex', 'flex']}
                    bskill2Visibility={['none', 'none', 'flex']}

                    bskill1Text={[
                         <p>When this Operator is assigned to the Control Center, all Trading Posts' order efficiency <span className='blueText'>+7%</span> (only the most effective one will take effect when assigned Operators have the same skill effect) </p>,
                         <p>When this Operator is assigned to the Control Center, all Trading Posts' order efficiency <span className='blueText'>+7%</span> (only the most effective one will take effect when assigned Operators have the same skill effect) </p>,
                         <p>When this Operator is assigned to the Control Center, all Trading Posts' order efficiency <span className='blueText'>+7%</span> (only the most effective one will take effect when assigned Operators have the same skill effect) </p>
                    ]}
                    bskill2Text={[
                         <p></p>,
                         <p></p>,
                         <p>When this Operator is assigned to the <span className="blueText">Control Center</span>, all Factories' productivity <span className="blueText">+2%</span> (only the most effective one will take effect when assigned Operators have the same skill effect) </p>
                    ]}
               />
               <Skills display={skillsDisplay}

                    // shows or hides skill1 button, skill2 button, skill3 button
                    skillVisibility={[true, true, true]}

                    // shows or hides the range part, use none or flex
                    rangeVisibility={['none', 'none', 'flex']}

                    // use table tag to make range, s1, s2, s3 respectively
                    skillRanges={[
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td /><td /><td /><td /></tr>
                                   <tr><td className='center-tile' /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    // shows or hides addendum, use block or none
                    addendumVisibility={['none', 'block', 'none']}

                    // enforces max value of range input, nescessary for specialization and stuff
                    maxInputRange='10'

                    skillNames={[
                         'Tactical Chant γ',
                         'Spirit Burst',
                         'Chimera'
                    ]}
                    skillImages={[
                         'skills/skill_icon_skcom_magic_rage[3].png',
                         'skills/skill_icon_skchr_amiya_2.png',
                         'skills/skill_icon_skchr_amiya_3.png'
                    ]}
                    skillRecoveryTypes={[
                         'Auto Recovery',
                         'Auto Recovery',
                         'Auto Recovery'
                    ]}
                    skillTriggerTypes={[
                         'Manual Trigger',
                         'Auto Trigger',
                         'Manual Trigger'
                    ]}


                    // skill 1
                    skill1Content={[
                         <p>ASPD <span className='blueText'>+30</span></p>,
                         <p>ASPD <span className='blueText'>+35</span></p>,
                         <p>ASPD <span className='blueText'>+40</span></p>,
                         <p>ASPD <span className='blueText'>+45</span></p>,
                         <p>ASPD <span className='blueText'>+50</span></p>,
                         <p>ASPD <span className='blueText'>+55</span></p>,
                         <p>ASPD <span className='blueText'>+60</span></p>,
                         <p>ASPD <span className='blueText'>+70</span></p>,
                         <p>ASPD <span className='blueText'>+80</span></p>,
                         <p>ASPD <span className='blueText'>+90</span></p>,
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
                    skill1InitialSp={[0, 0, 5, 5, 5, 5, 10, 10, 10, 15]}
                    skill1SpCost={[40, 35, 35, 35, 35, 35, 32, 32, 32, 30]}
                    skill1Duration={[30, 30, 30, 30, 30, 30, 30, 30, 30, 30]}

                    // skill 2
                    skill2Content={[
                         <p>Fires <span className='blueText'>6</span> times with <span className='blueText'>33%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>6</span> times with <span className='blueText'>35%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>6</span> times with <span className='blueText'>37%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>7</span> times with <span className='blueText'>39%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>7</span> times with <span className='blueText'>41%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>7</span> times with <span className='blueText'>43%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>7</span> times with <span className='blueText'>45%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>8</span> times with <span className='blueText'>50%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>8</span> times with <span className='blueText'>55%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                         <p>Fires <span className='blueText'>8</span> times with <span className='blueText'>60%</span> ATK when attacking and attacks random targets within Attack Range</p>,
                    ]}
                    skill2Addendum={[
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                         <p><span className='orangeText'>Automatically activated; Amiya is Stunned for 10 seconds after the skill duration</span></p>,
                    ]}
                    skill2InitialSp={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill2SpCost={[100, 100, 100, 100, 100, 100, 100, 100, 100, 100]}
                    skill2Duration={[25, 25, 25, 25, 25, 25, 25, 25, 25, 25]}

                    // skill 3
                    skill3Content={[
                         <p>ATK <span className='blueText'>+100%</span>, Max HP <span className='blueText'>+25%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+110%</span>, Max HP <span className='blueText'>+25%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+120%</span>, Max HP <span className='blueText'>+25%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+130%</span>, Max HP <span className='blueText'>+50%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+140%</span>, Max HP <span className='blueText'>+50%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+150%</span>, Max HP <span className='blueText'>+50%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+160%</span>, Max HP <span className='blueText'>+75%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+180%</span>, Max HP <span className='blueText'>+75%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+200%</span>, Max HP <span className='blueText'>+75%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
                         <p>ATK <span className='blueText'>+230%</span>, Max HP <span className='blueText'>+100%</span>, Range expands, damage type changes to <span className='blueText'>True</span>; After the skill ends, Amiya will automatically be retreated</p>,
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
                    skill3SpCost={[120, 120, 120, 120, 120, 120, 120, 120, 120, 120]}
                    skill3Duration={[30, 30, 30, 30, 30, 30, 30, 30, 30, 30]}
               />
               <Modules display={modulesDisplay}

                    // hard code 5 max module, hopefully hg doesnt add more than that
                    showModuleButtons={['flex', 'none', 'none', 'none', 'none']}
                    moduleNames={['DWDB-221E', '', '', '', '']}
                    moduleCodes={['CCR-Y', '', '', '', '']}
                    moduleTypes={[
                         'url(uniequiptype/ccr-y.png)',
                         '',
                         '',
                         '',
                         '',
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_amiya.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    // 1 trait for each module
                    traitContent={[
                         <p>Deals Arts Damage <br/> Gain <span className='blueText'>1 SP</span> when normal attacks hit an elite or leader enemy. </p>,
                         '',
                         '',
                         '',
                         ''
                    ]}
                    
                    // in order of the talent that is modified by the module 
                    // im banking on the hope that modules only change 1 talent and the trait stays constant through the 3 stages
                    // 1 talent for each module
                    talentNames={[
                         'Emotional Absorption',
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
                         '+100', '+130', '+150'
                    ]}
                    module1Stat2Values={[
                         '+30', '+40', '+50'
                    ]}
                    module1Stat3Values={[
                         '', '', ''
                    ]}

                    module1TalentContent={[
                         <p>Restores 2 extra Skill Points when attacking an enemy and 8 extra Skill Points when killing an enemy <span className='orangeText'>(original)</span></p>,
                         <p>Restores 3 extra Skill Points when attacking an enemy and 8 extra Skill Points when killing an enemy</p>,
                         <p>Restores 3 extra Skill Points when attacking an enemy and 10 extra Skill Points when killing an enemy</p>,
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
                         'none', // archive 1
                         'none', // archive 2
                         'none', // archive 3
                         'none', // archive 4
                         'none', // promotion record
                         'flex', // class conversion record 1
                         'flex', // class conversion record 2
                    ]}

                    basicInfo={[
                         'Amiya',
                         'Female',
                         '3 Years',
                         'Rim Billiton',
                         'Dec. 23',
                         'Cautus / Chimera',
                         '142cm',
                         'Showed Physical Signs of Originium, infection confirmed by medical report'
                    ]}

                    physicalExam={[
                         'Normal',
                         'Standard',
                         'Normal',
                         'Excellent',
                         'Standard',
                         '■ ■'
                    ]}

                    profile={
                         <p>
                              The public face of Rhodes Island and its top executive.
                              Although Amiya appears to be a young and inexperienced girl,
                              she is universally trusted and highly qualified for her position.
                              Amiya now leads Rhodes Island in fighting for the future of the Infected and striving to exorcise the dark shadow of Originium from the land.
                         </p>
                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>
                                   Imaging test for this Operator showed blurry outlines of internal organs with visible unusual dark spots.
                                   Unusually high concentrations of Originium particles were present in her circulation,
                                   indicating signs of infection and confirming her as infected at this stage.
                              </p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>19%</span></p>
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.27u/L</span></p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                         </div>
                    }

                    archiveFile2={
                         <div>
                         </div>
                    }

                    archiveFile3={
                         <div>
                         </div>
                    }

                    archiveFile4={
                         <div>
                         </div>
                    }

                    promotionRecord={
                         <div>
                         </div>
                    }

                    classConversionRecord1={
                         <div>
                              <p>Unlock Amiya (Guard)</p>
                              <br className='break-size' />
                              <p>
                                   According to the records,
                                   the saber wielded by the Sarkaz Lord Kollam was between 0.9 and 1.2 meters long,
                                   about 5 centimeters thick, made of an unknown material, black in color,
                                   and bore a traditional Sarkaz inscription, which read 'here the fighting stops.'
                              </p>
                              <p>
                                   After succeeding to the throne,
                                   Kollam reorganized Kazdel and felt that time in the west had been unkind to the people,
                                   so he led some Sarkaz tribes to the east, at which point he vanished from history.
                              </p>
                              <p>
                                   According to legend, Kollam had the power to rout his enemies without fighting.
                                   Some accounts say that Kollam's enemies suffered a weight several times that of their normal weapons when facing him in battle,
                                   finding themselves physically and mentally defeated.
                                   If they were lucky enough to survive,
                                   they were often maimed.
                                   But some referred to Kollam as an enlightened despot,
                                   saying that cuts from his blade drew no blood,
                                   and anyone wise enough to retreat would survive.
                              </p>
                              <p>
                                   However, some ancient texts claim that Kollam's saber was destroyed in battle before he even succeeded to the throne,
                                   and that the weapon he later wielded was a fragile illusion born of his Arts.
                              </p>
                              <p>
                                   Such claims are inconsistent with Kollam's subsequent performance in Sarkaz conflicts,
                                   and few can explain why Kollam would not recast his favorite sword under those circumstances.
                                   I speculate that Kollam did have the power to shape weapons with Arts,
                                   and this theory is centered on the throne.
                                   But that Kollam rarely used his Arts in that way,
                                   having once been an adventurer.
                              </p>
                              <p>
                                   Of course, it is written that after Kollam's ascension,
                                   his saber gave off a greenish light, like a breath of flame.
                                   Kollam's famous ferocity led to the blade being dubbed 'Wrathful Cerulean Flame.'
                              </p>
                              <p>
                                   Most of the Sarkaz legends have been lost in the ongoing ruination of Kazdel,
                                   which has tremendously impeded historical research.
                                   There have been recent calls from Sarkaz scholars to restore their history,
                                   but their own research has been poisoned by propagandistic efforts to paint a noble picture of the Sarkaz race.
                              </p>
                              <br className='break-size' />
                              <p>-- Logos</p>
                         </div>
                    }

                    classConversionRecord2={
                         <div>
                              <p>??????</p>
                         </div>
                    }

                    appointedAsAssistant={
                         <p>You work so hard, Doctor</p>
                    }

                    talk1={
                         <p>Dr. Kal'tsit told me you have to be 100% focused on your work to maximize efficiency. So... yes, that's what I'm gonna do!</p>
                    }

                    talk2={
                         <p>Rhodes Island has achieved cruising speed, Doctor. Would you mind sorting out the navigation log for me?</p>
                    }

                    talk3={
                         <p>I still have a lot to learn as leader of Rhodes Island. I hope you'll be there to guide me on our path to the future.</p>
                    }

                    talkAfterPromotion1={
                         <p>Maybe it's just wishful thinking, but I hope Rhodes Island can be like a second home to everyone.</p>
                    }

                    talkAfterPromotion2={
                         <p>Making it this far has cost us so much. Sometimes, I can't help but ask myself... is it really worth it?</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>
                              Sometimes I remember where I came from...
                              It was cold, and the air smelled of rusted copper.
                              Rhodes Island is a cozy place in comparison.
                              I'll do everything I can to protect our home.
                         </p>
                    }

                    talkAfterTrustIncrease2={
                         <p>Hehe... Doctor, let me tell you something: I picked up the violin again.</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>We've still got a long, long way to go, Doctor. This might be a journey without an end, but as long as you're with me, we'll be okay.</p>
                    }

                    idle={
                         <p>There's still lots of work that needs to be done, Doctor. We can't afford to have you resting.</p>
                    }

                    onboard={
                         <p>I'm so glad you're back, Doctor. Now we can walk this path together, me with you, and you with me.</p>
                    }

                    watchingBattleRecord={
                         <p>I see... thank you, Doctor! I've learned so much from you.</p>
                    }

                    promotion1={
                         <p>I'm so excited to fight by your side again, Doctor!</p>
                    }

                    promotion2={
                         <p>What I saw that day... the despair stuck in my throat, hopelessly trying to scream... I want to bury it all deep inside my mind and never let it out...</p>
                    }

                    addedToSquad={
                         <p>Got it.</p>
                    }

                    appointedAsSquadLeader={
                         <p>I won't let you down.</p>
                    }

                    depart={
                         <p>Operation commencing!</p>
                    }

                    beginOperation={
                         <p>Incoming! Get ready, everyone!</p>
                    }

                    selectingOperator1={
                         <p>Here.</p>
                    }

                    selectingOperator2={
                         <p>I'm right here, Doctor.</p>
                    }

                    deployment1={
                         <p>Got it!</p>
                    }

                    deployment2={
                         <p>Roger.</p>
                    }

                    inBattle1={
                         <p>I know what you're thinking.</p>
                    }

                    inBattle2={
                         <p>Everyone believes in me...</p>
                    }

                    inBattle3={
                         <p>Are you afraid of me?</p>
                    }

                    inBattle4={
                         <p>I hear... someone crying?</p>
                    }

                    fourStarResult={
                         <p>No matter how difficult the mission, we can handle it as long as you're here, Doctor. I've never doubted you.</p>
                    }

                    threeStarResult={
                         <p>We may have achieved a perfect victory, but we still can't let our guard down.</p>
                    }

                    subThreeStarResult={
                         <p>Well done, Doctor! You must be exhausted. Be sure to rest when you need it.</p>
                    }

                    operationFailure={
                         <p>I'm fine... Get it together, everyone!</p>
                    }

                    assignedToFacility={
                         <p>You want something to drink, Doctor?</p>
                    }

                    tap={
                         <p>Huh? Doctor?</p>
                    }

                    trustTap={
                         <p>Ehehe...</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Welcome home, Doctor!</p>
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
                         'flex',
                         'flex',
                         'none',
                         'none',
                    ]}

                    outfitNames={[
                         'Default I',
                         'Default II',
                         'Default III',
                         'Newsgirl',
                         'Fresh Fastener',
                         'Seedsower',
                         '',
                         '',
                    ]}

                    outfitDescriptions={[
                         <div className='outfits-description'>
                              <p>The outfit Amiya wears most often. The size of the coat indicates it belonged to someone else.</p>
                              <p>It has been fixed a couple of times, but it still shows signs of wear.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>The outfit Amiya wears most often. The size of the coat indicates it belonged to someone else.</p>
                              <p>Despite that, the meticulous repairs she's done on it makes it look as good as new.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>This coat needs to be mended,</p>
                              <p>and the wounds still need to heal.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>Test Collection / Newsgirl</p>
                              <p>
                                   Available only in certain regions,
                                   this remake of a classic design utilizes the best materials and contains carefully-sewn details.
                                   An extra custom-made letter opener is included.
                              </p>
                         </div>,
                         <div className='outfits-description'>
                              <p>Test Collection / Fresh Fastener</p>
                              <p>
                                   An outfit worn by Amiya while working for a Rhodes Island restaurant. 
                                   This poofy coat is cold-resistant, 
                                   and has enough room to hold something penguin-sized.
                              </p>
                         </div>,
                         <div className='outfits-description'>
                              <p>Test Collection / Seedsower</p>
                              <p>
                                   A loose yet comfortable outdoors fit.
                                   Comes with an exclusive miniature mountain-grade rucksack and an agricultural nursery kit.
                                   The designer has one small wish of her own, and hopes that we can all help to realize it.
                              </p>
                         </div>,
                         <div className='outfits-description'></div>,
                         <div className='outfits-description'></div>,
                    ]}

                    outfitAddendums={[
                         '- Base outfit',
                         '- Unlocked at Elite 1',
                         '- Unlocked at Elite 2',
                         '- Unlocked through various in-game events',
                         '- Unlocked through various in-game events',
                         '- Unlocked through redemption code from pre-ordering Arknights Official Artworks Vol.1',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_002_amiya/char_002_amiya_1.png',
                         'characters/char_002_amiya/char_002_amiya_1+.png',
                         'characters/char_002_amiya/char_002_amiya_2b.png',
                         'characters/char_002_amiya/char_002_amiya_winter_1b.png',
                         'characters/char_002_amiya/char_002_amiya_epoque_4b.png',
                         'characters/char_002_amiya/char_002_amiya_test_1b.png',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2024sale.png',
                         'brands/2024sale.png',
                         'brands/2024sale.png',
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
                                   itemAmount='x3'
                                   itemDesc='Caster Chip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS2.png')"
                                   itemAmount='x4'
                                   itemDesc='Device' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON2.png')"
                                   itemAmount='x4'
                                   itemDesc='Oriron' />
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
                                   itemUrl="url('icons/MTL_SL_G4.png')"
                                   itemAmount='x10'
                                   itemDesc='Orirock Concentration' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL1.png')"
                                   itemAmount='x10'
                                   itemDesc='Loxic Kohl' />
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    skillImages={[
                         'skills/skill_icon_skcom_magic_rage[3].png',
                         'skills/skill_icon_skchr_amiya_2.png',
                         'skills/skill_icon_skchr_amiya_3.png'
                    ]}

                    skillNames={[
                         'Tactical Chant γ',
                         'Spirit Burst',
                         'Chimera'
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
                                   itemUrl="url('icons/MTL_SL_BOSS1.png')"
                                   itemAmount='x4'
                                   itemDesc='Damaged Device' />
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
                                   itemAmount='x4'
                                   itemDesc='Orirock Cube' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG2.png')"
                                   itemAmount='x5'
                                   itemDesc='Sugar' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE3.png')"
                                   itemAmount='x4'
                                   itemDesc='Aketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x6'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS3.png')"
                                   itemAmount='x2'
                                   itemDesc='Integrated Device' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG3.png')"
                                   itemAmount='x3'
                                   itemDesc='Sugar Pack' />
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
                                   itemUrl="url('icons/MTL_SL_PG2.png')"
                                   itemAmount='x3'
                                   itemDesc='Grindstone Pentahydrate' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x6'
                                   itemDesc='White Horse Kohl' />
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
                                   itemUrl="url('icons/MTL_SL_G4.png')"
                                   itemAmount='x5'
                                   itemDesc='Orirock Concentration' />
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
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x3'
                                   itemDesc='RMA70-24' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE2.png')"
                                   itemAmount='x5'
                                   itemDesc='Manganese Trihydrate' />
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
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x5'
                                   itemDesc='White Horse Kohl' />
                         </div>
                    ]}

                    skill3SpecResources={[
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
                                   itemDesc='Grindstone Pentahydrate' />
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
                                   itemUrl="url('icons/MTL_SL_G4.png')"
                                   itemAmount='x4'
                                   itemDesc='Orirock Concentration' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG2.png')"
                                   itemAmount='x6'
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
                                   itemUrl="url('icons/MTL_SL_BN.png')"
                                   itemAmount='x4'
                                   itemDesc='Bipolar Nanoflake' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH4.png')"
                                   itemAmount='x4'
                                   itemDesc='Polyester Lump' />
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
                         'uniequipimg/uniequip_002_amiya.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    moduleNames={[
                         'DWDB-221E',
                         '',
                         '',
                         '',
                         ''
                    ]}
                    moduleCodes={[
                         'CCR-Y',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    //module 1
                    module1Missions={[
                         'Defeat 10 elite or leader enemies with Amiya (excluding support units)',
                         'Clear Main Theme 3-8 with a 3-star rating; You must deploy your own Amiya, and have Amiya defeat Skullshatterer'
                    ]}

                    module1Requirements={[
                         'Raise Amiya to Elite 2 Lv40',
                         'Raise Amiya\'s trust to 50',
                         'Raise Amiya\'s trust to 100'
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
                                   itemUrl="url('icons/MTL_SL_RUSH4.png')"
                                   itemAmount='x3'
                                   itemDesc='Polyester Lump' />
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
                                   itemUrl="url('icons/MTL_SL_KETONE4.png')"
                                   itemAmount='x3'
                                   itemDesc='Keton Colloid' />
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
                                   itemUrl="url('icons/MTL_SL_IRON4.png')"
                                   itemAmount='x5'
                                   itemDesc='Oriron Block' />
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