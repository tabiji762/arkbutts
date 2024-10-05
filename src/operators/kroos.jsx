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
               operatorName="Kroos"
               operatorClass="Sniper"
               profile="charavatars/char_124_kroos.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'none', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(133, 100, 73, 0.3)'
               accentColor='rgb(133, 100, 73)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_124_kroos.png", "Kroos", 'Marksman Sniper', 'Ranged', 'Physical', 3]}

                    // show elite1, show elite2
                    showElites={['block', 'none']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'none', 'none', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -4s', 'ATK +21', 'Improves Talent', 'DP Cost -1']}

                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'ATK +50']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 21, 0, -4, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[0, 0, 50]}

                    hpRange={[545, 826, 1060, 0]}
                    defRange={[52, 88, 126, 0]}
                    atkRange={[154, 258, 375, 0]}
                    resRange={[0, 0, 0]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[1, 1, 1]}
                    costRange={[9, 11, 11]}
                    aspdRange={[1, 1, 1]}

                    maxRangeValues={[40, 55, 0]}

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
                                   <tr></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Attacks aerial enemies first</p>}

                    talent1Title={<h2>Targetting - Primary</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'none']}
                    talent1Visibility={['none', 'flex', 'none']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>
                              When attacking, has a 10% (20% at lv55) chance to increase the current damage of that attack to 150%
                         </p>,
                         <p></p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>
                              When attacking, has a 10% (20% at lv55) chance to increase the current damage of that attack to 160% <span className='blueText'>(+10%)</span>
                         </p>,
                         <p></p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Slowcoach'}
                    bskill2Title={'Solitude'}

                    bskill1img='bskills/bskill_man_spd_add2.png'
                    bskill2img='bskills/bskill_dorm_one2.png'

                    bskillWrapperVisibility={['flex', 'flex', 'none']}
                    bskill1Visibility={['flex', 'flex', 'none']}
                    bskill2Visibility={['none', 'flex', 'none']}

                    bskill1Text={[
                         <p>When this Operator is assigned to a Factory, productivity <span className='blueText'>+15%</span> in the first hour and thereafter <span className='blueText'>+2%</span> per hour, up to <span className='blueText'>+25%</span></p>,
                         <p>When this Operator is assigned to a Factory, productivity <span className='blueText'>+15%</span> in the first hour and thereafter <span className='blueText'>+2%</span> per hour, up to <span className='blueText'>+25%</span></p>,
                         <p>When this Operator is assigned to a Factory, productivity <span className='blueText'>+15%</span> in the first hour and thereafter <span className='blueText'>+2%</span> per hour, up to <span className='blueText'>+25%</span></p>,
                    ]}
                    bskill2Text={[
                         <p>When this Operator is assigned to a Dormitory, self Morale recovered <span className='blueText'>+0.7</span> per hour </p>,
                         <p>When this Operator is assigned to a Dormitory, self Morale recovered <span className='blueText'>+0.7</span> per hour </p>,
                         <p>When this Operator is assigned to a Dormitory, self Morale recovered <span className='blueText'>+0.7</span> per hour </p>
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
                         'Double Tap - Auto',
                         '',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skchr_kroos_1.png',
                         '',
                         ''
                    ]}
                    skillRecoveryTypes={[
                         'Offensive Recovery',
                         '',
                         ''
                    ]}
                    skillTriggerTypes={[
                         'Auto Trigger',
                         '',
                         ''
                    ]}


                    // skill 1
                    skill1Content={[
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>100%</span> of ATK in physical damage with each shot </p>,
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>105%</span> of ATK in physical damage with each shot </p>,
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>110%</span> of ATK in physical damage with each shot </p>,
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>120%</span> of ATK in physical damage with each shot </p>,
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>125%</span> of ATK in physical damage with each shot </p>,
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>130%</span> of ATK in physical damage with each shot </p>,
                         <p>The next attack shoots <span className='blueText'>2</span> in a row, dealing <span className='blueText'>140%</span> of ATK in physical damage with each shot </p>,
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
                    skill1SpCost={[5, 5, 5, 4, 4, 4, 4, 0, 0, 0]}
                    skill1Duration={['- ', '- ', '- ', '- ', '- ', '- ', '- ', '- ', '- ', '- ']}

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
                         'Kroos',
                         'Female',
                         '1 Year',
                         'Rim Billiton',
                         'Nov. 22',
                         'Cautus',
                         '154cm',
                         'Infection confirmed by medical examination.'
                    ]}

                    physicalExam={[
                         'Normal',
                         'Standard',
                         'Normal',
                         'Standard',
                         'Excellent',
                         'Standard'
                    ]}

                    profile={
                         <div>
                              <p>Originally from RIM Billiton like Fang and Beagle, Kroos also received her training from the Columbia Holmegard Garrison. She is calm and constantly smiling as she maintains a gentle demeanor. However, she sometimes breaks her facade, revealing a toxic attitude.</p>
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
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.23u/L</span></p>
                              <p>Degree of infection is minor and the physical symptoms are not present.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Kroos prefers to give minimum effort in life and on the battlefield which is reflective in her weapon of choice - a modern crossbow. Despite her lazy work ethic, Kroos has become a skilled marksman and assists her fellow Operators by flanking the enemy and shooting them in the rear with deadly precision.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Ever since she was a child, Kroos lacked initiative. However during training, she showed exceptional talent for shooting. On the battlefield she easily locates the ample sniping spot and rains down a hail of precise and deadly fire while being backed by her teammates. Both Fang and Beagle trust Kroos with their lives as she is their shooter of choice.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>While a member of the garrison, Kroos faced everything with a smile. Upon being infected with Oripathy and suffering discrimination, she had a complete change in mood. After angrily cursing out the other members of the garrison, she along with Fang and Beagle left the garrison for good. In order to find a way for the three of them to survive, Kroos searched far and wide for intel, before finally discovering their new home at Rhodes Island.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>The always smiling Kroos often leaves others with an affectionate impression but does so in order to avoid trouble. She enjoys finding quiet places to slack off and take naps. Although she is typically well-mannered and aloof, when something she cares about is on the line her persona shifts into a more toxic attitude. Even when she is talking, she occasionally displays hints of toxicity. This facade works with Fen but not Beagle as Kroos cannot stand her simple gaze.</p>
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
                         <p>Doctor, it's such a nice day, so can't we take a little nap?</p>
                    }

                    talk1={
                         <p>Hmm...? We're about to leave? But, I just got up... Wait, is this the Doctor's office? How'd I get here?</p>
                    }

                    talk2={
                         <p>Why am I always squinting? Because I don't want anyone to see my eyes. Nope, nobody~</p>
                    }

                    talk3={
                         <p>I'm really careless and get hurt a lot... But Hibiscus heals me every time, so I'm not afraid of getting injured. Oh gosh, that 'Curing Cuisine' of hers though, I'm terrified of it...</p>
                    }

                    talkAfterPromotion1={
                         <p>Doctor! Someone left 10 alarm clocks by my bed! Who would do something so awful?!</p>
                    }

                    talkAfterPromotion2={
                         <p>-</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>Doctor, let's play a game~ Put an apple on your head and we'll start~</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>I'm always looking for fun things to do as a way to ease the pain of my Oripathy, I guess. Plus, I love seeing other people smile~</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>One day, our journey with Rhodes Island will come to an end, and hopefully we'll all get to have a warm, neverending dream, lying in the sunshine~ That's my number one dream~</p>
                    }

                    idle={
                         <p>Can't believe the Doctor's a heavier sleeper than me...</p>
                    }

                    onboard={
                         <p>Hi-hiii~ I'm Kroos~ I might be inexperienced, but I'll do the best I can~</p>
                    }

                    watchingBattleRecord={
                         <p>Thank you so much!</p>
                    }

                    promotion1={
                         <p>A promotion~ What a lovely dream~ Huh? I'm not dreaming?</p>
                    }

                    promotion2={
                         <p>-</p>
                    }

                    addedToSquad={
                         <p>Umm, where's the rally point?</p>
                    }

                    appointedAsSquadLeader={
                         <p>Huhhh~? Fang would make a better captain than me!</p>
                    }

                    depart={
                         <p>Listen, everyone~! Stay calm~</p>
                    }

                    beginOperation={
                         <p>Why can't everyone try to get along...?</p>
                    }

                    selectingOperator1={
                         <p>Sure!</p>
                    }

                    selectingOperator2={
                         <p>Let's take it slow~</p>
                    }

                    deployment1={
                         <p>Mmhmm, I'm listening~</p>
                    }

                    deployment2={
                         <p>I won't sleep on the job~</p>
                    }

                    inBattle1={
                         <p>There you are!</p>
                    }

                    inBattle2={
                         <p>kokodayo!!!!</p>
                    }

                    inBattle3={
                         <p>Take aim!</p>
                    }

                    inBattle4={
                         <p>-</p>
                    }

                    fourStarResult={
                         <p>Phew, that was tough...</p>
                    }

                    threeStarResult={
                         <p>I think we did alright!</p>
                    }

                    subThreeStarResult={
                         <p>Hmm, I guess this was a bit of a letdown...</p>
                    }

                    operationFailure={
                         <p>S-sorry... I'll fight harder next time...!</p>
                    }

                    assignedToFacility={
                         <p>Can I get my beauty sleep in here?</p>
                    }

                    tap={
                         <p>Ughh...</p>
                    }

                    trustTap={
                         <p>Hmm, have I matured?</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Doctor~ *Yawn*...</p>
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
                         'The Mag',
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
                              <p>Witch Feast Series / The Mag.</p>
                              <p>An outfit that Kroos designed for herself. In addition to being fashionable, it incorporates some mechanisms to assist her with her magic tricks.</p>
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
                         'characters/char_124_kroos/char_124_kroos_1.png',
                         'characters/char_124_kroos/char_124_kroos_1.png',
                         '',
                         'characters/char_124_kroos/char_124_kroos_witch_1b.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2023witch.png',
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
                                   itemUrl="url('icons/MTL_SL_BOSS1.png')"
                                   itemAmount='x1'
                                   itemDesc='Damaged Device' />
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
                                   itemAmount='x2'
                                   itemDesc='Orirock Cube' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG2.png')"
                                   itemAmount='x2'
                                   itemDesc='Sugar' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG1.png')"
                                   itemAmount='x1'
                                   itemDesc='Grindstone' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x2'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7012.png')"
                                   itemAmount='x1'
                                   itemDesc='RMA70-12' />
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