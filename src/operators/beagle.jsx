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

     const [overviewDisplay, setOverviewDisplay] = useState('flex');
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
               operatorName="Beagle"
               operatorClass="Defender"
               profile="charavatars/char_122_beagle.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
                    // overview, skills, modules, summons, files, outfits, resources
               showTabs={['block', 'block', 'none', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(158, 73, 54, 0.3)'
               accentColor='rgb(158, 73, 54)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_122_beagle.png", "Beagle", 'Protector Defender', 'Melee', 'Physical', 3]}

                    // show elite1, show elite2
                    showElites={['block', 'none']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'none', 'none', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -4s', 'DEF +28', 'Redeployment Time -6s', 'DP Cost -1']}

                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'DEF +60']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 28, 0, 0, -10, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[0, 60, 0]}

                    hpRange={[1144, 1526, 2035, 0]}
                    defRange={[242, 362, 490, 0]}
                    atkRange={[184, 236, 295, 0]}
                    resRange={[0, 0, 0]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[3, 3, 0]}
                    costRange={[16, 18, 0]}
                    aspdRange={[1.2, 1.2, 1.2]}

                    maxRangeValues={[40, 55, 0]}

                    opRanges={[
                         <table>
                              <tbody>
                                   <tr><td className="center-tile" /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td className="center-tile" /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Blocks 3 enemies</p>}

                    talent1Title={<h2>DEF Up</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'none']}
                    talent1Visibility={['none', 'flex', 'none']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>DEF +5% (10% at lv55) (not reflected above)</p>,
                         <p></p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>DEF +5% (10% at lv55) (not reflected above)</p>,
                         <p></p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Warehouse Organization α'}
                    bskill2Title={'Liveliness'}

                    bskill1img='bskills/bskill_man_spd&limit1.png'
                    bskill2img='bskills/bskill_dorm_single&one01.png'

                    bskillWrapperVisibility={['flex', 'flex', 'none']}
                    bskill1Visibility={['flex', 'flex', 'none']}
                    bskill2Visibility={['none', 'flex', 'none']}

                    bskill1Text={[
                         <p>When this Operator is assigned to a Factory, capacity limit <span className='blueText'>+6</span> and productivity <span className='blueText'>+10%</span></p>,
                         <p>When this Operator is assigned to a Factory, capacity limit <span className='blueText'>+6</span> and productivity <span className='blueText'>+10%</span></p>,
                         <p>When this Operator is assigned to a Factory, capacity limit <span className='blueText'>+6</span> and productivity <span className='blueText'>+10%</span></p>,
                    ]}
                    bskill2Text={[
                         <p>When this Operator is assigned to a Dormitory, restores <span className='blueText'>+0.2</span> Morale per hour to another Operator assigned to that Dormitory whose Morale is not full (Only the strongest effect of this type takes place); furthermore, self Morale recovered per hour <span className='blueText'>+0.4</span></p>,
                         <p>When this Operator is assigned to a Dormitory, restores <span className='blueText'>+0.2</span> Morale per hour to another Operator assigned to that Dormitory whose Morale is not full (Only the strongest effect of this type takes place); furthermore, self Morale recovered per hour <span className='blueText'>+0.4</span></p>,
                         <p>When this Operator is assigned to a Dormitory, restores <span className='blueText'>+0.2</span> Morale per hour to another Operator assigned to that Dormitory whose Morale is not full (Only the strongest effect of this type takes place); furthermore, self Morale recovered per hour <span className='blueText'>+0.4</span></p>,
                    ]}
               />
               <Skills display={skillsDisplay}

                    // shows or hides skill1 button, skill2 button, skill3 button
                    skillVisibility={[true, false, false]}

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
                    maxInputRange='7'

                    skillNames={[
                         'DEF Up α',
                         '',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skcom_def_up[1].png',
                         '',
                         ''
                    ]}
                    skillRecoveryTypes={[
                         'Auto Recovery',
                         '',
                         ''
                    ]}
                    skillTriggerTypes={[
                         'Manual Trigger',
                         '',
                         ''
                    ]}


                    // skill 1
                    skill1Content={[
                         <p>DEF <span className='blueText'>+10%</span></p>,
                         <p>DEF <span className='blueText'>+15%</span></p>,
                         <p>DEF <span className='blueText'>+20%</span></p>,
                         <p>DEF <span className='blueText'>+30%</span></p>,
                         <p>DEF <span className='blueText'>+35%</span></p>,
                         <p>DEF <span className='blueText'>+40%</span></p>,
                         <p>DEF <span className='blueText'>+50%</span></p>,
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
                    skill1InitialSp={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill1SpCost={[50, 50, 50, 45, 45, 45, 40, 0, 0, 0]}
                    skill1Duration={[30, 30, 30, 30, 30, 30, 30, 0, 0, 0]}

                    // skill 2
                    skill2Content={[
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
                    skill2Addendum={[
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
                    skill2InitialSp={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill2SpCost={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill2Duration={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}

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
                    showModuleButtons={['none', 'none', 'none', 'none', 'none']}
                    moduleNames={['', '', '', '', '']}
                    moduleCodes={['', '', '', '', '']}
                    moduleTypes={[
                         'url()',
                         'url()',
                         'url()',
                         'url()',
                         'url()',
                    ]}
                    moduleImages={[
                         'uniequipimg/',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    // trait and talent stuff
                    ogTrait=''

                    // in order of the talent that is modified by the module 
                    // im banking on the hope that modules only change 1 talent and the trait stays constant through the 3 stages
                    // 1 talent for each module
                    talentNames={[
                         '',
                         '',
                         '',
                         '',
                         ''
                    ]}

                    // 1 trait for each module
                    traitContent={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>,
                         <p></p>
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
                    module1StatVisibility={['none', 'none', 'none']}

                    module1StatLabels={[
                         '', '', ''
                    ]}
                    module1Stat1Values={[
                         '', '', ''
                    ]}
                    module1Stat2Values={[
                         '', '', ''
                    ]}
                    module1Stat3Values={[
                         '', '', ''
                    ]}

                    module1TalentContent={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
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
                         'none', // promotion record
                         'none', // class conversion record 1
                         'none', // class conversion record 2
                    ]}

                    basicInfo={[
                         'Beagle',
                         'Female',
                         '1 Year',
                         'Bolivar',
                         'Mar. 2',
                         'Perro',
                         '154cm',
                         'Infection confirmed by medical examination.'
                    ]}

                    physicalExam={[
                         'Excellent',
                         'Normal',
                         'Excellent',
                         'Normal',
                         'Standard',
                         'Standard'
                    ]}

                    profile={
                         <div>
                              <p>A frontline Operator on Op Reserve Team A1. Beagle originally came to Rhodes Island with Fang and Kroos. Though immature in some respects, she has gradually displayed professionalism, resilience, and extreme talent. As a result, she has earned the recognition of others as a reliable Operator.</p>
                         </div>

                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Medical tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>8%</span></p>
                              <p>She presents no obvious external symptoms of Oripathy.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.21u/L</span></p>
                              <p>Degree of infection is not yet severe and has not yet brought about a significant physical impact. </p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Though she lacks flashy skills or the capacity for Arts, Beagle uses her endurance to establish a strong forward defense for her teammates. Though a bit clumsy, she believes that everything will work out as long as she continues to press forward tenaciously. So far, she has only been proven right in this regard.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Her time in the Columbia outskirts garrison are some her hardest, but also most precious, memories. Beagle, along with her close companions Fang and Kroos, worked tireless to close the gap between them and the official team members. However, Beagle fell into a deep bout of self-loathing after being infected with Oripathy. She felt that she had become a burden on Fang and Kroos, and that it was her fault they lost everything.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>At their lowest point, Fang, Kroos, and Beagle faced expulsion and banishment from the garrison. On Kroos's recommendation, the three of them came to Rhodes Island together. On that day, Beagle resolved to repay the kindness of Fang, Kroos, and everyone who stood beside her.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>After witnessing everyone bicker, play, and express joy day after day, Beagle began to feel grateful and happy. Everyday, Beagle works hard to solve the disputes that arise between Hibiscus and Lava. She helps Fang find Kroos whenever she is slacking on her duties. She even helps the senior members of Rhodes Islands by doing chores in her free time. Time and time through and through, she continues to enjoy every moment of it all.</p>
                         </div>
                    }

                    promotionRecord={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise to Elite 2</p>
                              <br className='break-size' />
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
                         <p>Doctor, I'm your guard for the day! Don't worry, I won't let any sketchy people near you! Just relax!</p>
                    }

                    talk1={
                         <p>My training score for today...? Um, I mean, we could talk about something else...</p>
                    }

                    talk2={
                         <p>I can't shake the pre-battle jitters, and that makes Captain Fang really nervous too... What should I do? Doctor!</p>
                    }

                    talk3={
                         <p>Hibiscus and Lava always complain to me about each other, but both of them are my good friends, and neither of them are wrong... Doctor, what should I do?</p>
                    }

                    talkAfterPromotion1={
                         <p>Instructor Dobermann always told us, 'Even when after you finish your training, your number one goal on the battlefield is to stay alive.' Urgh... How can I become as strong and awesome as she is?</p>
                    }

                    talkAfterPromotion2={
                         <p>-</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>I'm still a rookie Operator, but I'm working hard! Hehehe, I'd really love a compliment or two, if you agree.</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>My Oripathy? It doesn't bother me all that much, I'm used to it. I just want to be with the people I care about until my disease gets cured... Ughh...</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>I didn't have much confidence before I came here, but I'm so glad that I can protect you and everyone on Rhodes Island! It's my dream to protect everyone! I really wish days like these could last forever.</p>
                    }

                    idle={
                         <p>Aww... seeing the Doctor sleeping all vulnerable like that makes me want to doodle something on a certain someone's face...</p>
                    }

                    onboard={
                         <p>My codename is Beagle! I know I didn't do very well on my assessment, but I'll still do my best at my internship!</p>
                    }

                    watchingBattleRecord={
                         <p>I did it! I've become stronger!</p>
                    }

                    promotion1={
                         <p>Finally, FINALLY! Now nobody's going to call me 'the Rookiest Rookie in the Rookieverse' anymore!</p>
                    }

                    promotion2={
                         <p>-</p>
                    }

                    addedToSquad={
                         <p>I'll do all I can!</p>
                    }

                    appointedAsSquadLeader={
                         <p>Huh? I am the leader? I don't feel right about Fang not being the leader...</p>
                    }

                    depart={
                         <p>Everyone, let's roll out!</p>
                    }

                    beginOperation={
                         <p>Everyone, enemies incoming!</p>
                    }

                    selectingOperator1={
                         <p>Grant me strength!</p>
                    }

                    selectingOperator2={
                         <p>Is it my turn?</p>
                    }

                    deployment1={
                         <p>Target location reached!</p>
                    }

                    deployment2={
                         <p>This is the place!</p>
                    }

                    inBattle1={
                         <p>Haah!</p>
                    }

                    inBattle2={
                         <p>Watch this!</p>
                    }

                    inBattle3={
                         <p>-</p>
                    }

                    inBattle4={
                         <p>-</p>
                    }

                    fourStarResult={
                         <p>It's my duty to protect everyone! My resolve will never falter, no matter the odds!</p>
                    }

                    threeStarResult={
                         <p>All enemies have been defeated! We Rhodes Island Operators are the finest!</p>
                    }

                    subThreeStarResult={
                         <p>Hooray, we won! Although a few enemies managed to get away... *sigh*...</p>
                    }

                    operationFailure={
                         <p>I'm sorry... so sorry...</p>
                    }

                    assignedToFacility={
                         <p>What can I do for you?</p>
                    }

                    tap={
                         <p>Doctor! Th-that tickles!</p>
                    }

                    trustTap={
                         <p>Doctor, can I come to your place to study every day?</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Hi, Doctor!</p>
                    }

               />
               <Outfits display={outfitsDisplay}

                    // 8 entries for the 3 elites and 5 outfits limit
                    // i hope they dont add more than 5 limit to one op

                    //use flex or none
                    buttonVisibility={[
                         'flex',
                         'flex',
                         'none',
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
                         'Dreadnaught',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitDescriptions={[
                         <div className='outfits-description'>
                              <p>One of the uniforms of Rhodes Island. <br/> Reliable, light and iconic.</p>
                              <p>+Regular fit <br/>+DeepMentality Sports learning system</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>One of the uniforms of Rhodes Island. <br/> Reliable, light and iconic.</p>
                              <p>+Regular fit <br/>+DeepMentality Sports learning system</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>An outfit that has been improved after the Operator's Promotion.</p>
                              <p>Custom-made to suit each Operator's experiences and needs, these outfits are designed to provide them maximum flexibility on any battlefield. Furthermore, this is all done without compromising the comfort that they've come to expect.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>Bloodline of Combat Collection / Dreadnaught</p>
                              <p>The attire worn by the elite operator, Beagle, when serving as rearguard during the Great March of Bolívar. This is her final test.</p>
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
                         '- 1st Anniversary Celebration',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_122_beagle/char_122_beagle_1.png',
                         'characters/char_122_beagle/char_122_beagle_1.png',
                         '',
                         'characters/char_122_beagle/char_122_beagle_boc_1b.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2024boc_deco.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

               />
               <Resources display={resourcesDisplay}

                    // use flex or none
                    // 1st for E1, entire container, and the hr below, 2nd for E2

                    eliteVisibility={['flex', 'none']}
                    eliteResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x10,000'
                                   itemDesc='LMD' />
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    // link to png file
                    skillImages={[
                         '',
                         '',
                         ''
                    ]}

                    skillNames={[
                         '',
                         '',
                         ''
                    ]}

                    skillResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL1.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 1' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL1.png')"
                                   itemAmount='x2'
                                   itemDesc='Skill Summary 1' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-1-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE1.png')"
                                   itemAmount='x1'
                                   itemDesc='Diketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS2.png')"
                                   itemAmount='x1'
                                   itemDesc='Device' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G2.png')"
                                   itemAmount='x3'
                                   itemDesc='Orirock' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE1.png')"
                                   itemAmount='x1'
                                   itemDesc='Manganese Ore' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x2'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG1.png')"
                                   itemAmount='x1'
                                   itemDesc='Grindstone' />
                         </div>,
                    ]}


                    //skill specialization stuff
                    skillSpecVisibility={[
                         'none',
                         'none',
                         'none'
                    ]}

                    skill1SpecResources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>
                    ]}

                    skill2SpecResources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
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
                         'none',
                         'none',
                         'none',
                         'none',
                         'none'
                    ]}
                    moduleImages={[
                         '',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    moduleNames={[
                         '',
                         '',
                         '',
                         '',
                         ''
                    ]}
                    moduleCodes={[
                         '',
                         '',
                         '',
                         '',
                         ''
                    ]}


                    //module 1
                    module1Missions={[
                         '',
                         ''
                    ]}

                    module1Requirements={[
                         '',
                         '',
                         ''
                    ]}
                    module1Resources={[
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
                         </div>,
                         <div className="item-display-wrapper">
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