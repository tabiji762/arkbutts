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
               operatorName="Fang"
               operatorClass="Vanguard"
               profile="charavatars/char_123_fang.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
                    // overview, skills, modules, summons, files, outfits, resources
               showTabs={['block', 'block', 'none', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(73, 88, 133, 0.3)'
               accentColor='rgb(73, 88, 133)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_123_fang.png", "Fang", 'Pioneer Vanguard', 'Melee', 'Physical', 3]}

                    // show elite1, show elite2
                    showElites={['block', 'none']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'none', 'none', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -4s', 'DEF +20', 'Redeployment Time -6s', 'DP Cost -1']}

                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'DEF +50']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 20, 0, 0, -10, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[0, 50, 0]}

                    hpRange={[742, 1060, 1325, 0]}
                    defRange={[130, 187, 260, 0]}
                    atkRange={[157, 235, 325, 0]}
                    resRange={[0, 0, 0]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[2, 2, 2]}
                    costRange={[9, 11, 11]}
                    aspdRange={[1.05, 1.05, 1.05]}

                    maxRangeValues={[40, 55, 0]}

                    opRanges={[
                         <table>
                              <tbody>
                                   <tr><td className="center-tile" /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td className="center-tile" /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Blocks 2 enemies</p>}

                    talent1Title={<h2>Lightweight</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'none']}
                    talent1Visibility={['none', 'flex', 'none']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>DP Cost -1 (not reflected above)</p>,
                         <p></p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>DP Cost -1 (not reflected above)</p>,
                         <p></p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Hothead'}
                    bskill2Title={'Order Distribution β'}

                    bskill1img='bskills/bskill_man_spd_add1.png'
                    bskill2img='bskills/bskill_tra_spd2.png'

                    bskillWrapperVisibility={['flex', 'flex', 'none']}
                    bskill1Visibility={['flex', 'flex', 'none']}
                    bskill2Visibility={['none', 'flex', 'none']}

                    bskill1Text={[
                         <p>When this Operator is assigned to a Factory, productivity <span className='blueText'>+20%</span> in the first hour and thereafter <span className='blueText'>+1%</span> per hour, up to <span className='blueText'>+25%</span></p>,
                         <p>When this Operator is assigned to a Factory, productivity <span className='blueText'>+20%</span> in the first hour and thereafter <span className='blueText'>+1%</span> per hour, up to <span className='blueText'>+25%</span></p>,
                         <p>When this Operator is assigned to a Factory, productivity <span className='blueText'>+20%</span> in the first hour and thereafter <span className='blueText'>+1%</span> per hour, up to <span className='blueText'>+25%</span></p>,
                    ]}
                    bskill2Text={[
                         <p>When this Operator is assigned to a Trading Post, order acquisition efficiency <span className='blueText'>+30%</span></p>,
                         <p>When this Operator is assigned to a Trading Post, order acquisition efficiency <span className='blueText'>+30%</span></p>,
                         <p>When this Operator is assigned to a Trading Post, order acquisition efficiency <span className='blueText'>+30%</span></p>
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
                         'Charge α',
                         '',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skcom_charge_cost[1].png',
                         '',
                         ''
                    ]}
                    skillRecoveryTypes={[
                         'Auto Recovery',
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
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
                         <p>Immediately gain <span className='blueText'>6</span> Deployment Points</p>,
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
                    skill1InitialSp={[0, 0, 0, 3, 3, 3, 6, 0, 0, 0]}
                    skill1SpCost={[30, 29, 28, 27, 26, 25, 25, 0, 0, 0]}
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
                         'Fang',
                         'Female',
                         '1 Year',
                         'Kazimierz',
                         'Dec. 2',
                         'Kuranta',
                         '158cm',
                         'Medical tests confirm she is infected.'
                    ]}

                    physicalExam={[
                         'Standard',
                         'Excellent',
                         'Standard',
                         'Standard',
                         'Standard',
                         'Standard'
                    ]}

                    profile={
                         <div>
                              <p>Captain of Reserve Op Team A1. She has prior experience working with a Columbian garrison, and has proven herself to be outstanding in combat. After joining Rhodes Island, she had no problem adjusting to her current work. She joined the Operation Planning Group with its original members, Beagle and Kroos, and has worked hard to become its leading Operator.</p>
                         </div>

                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>7.4%</span></p>
                              <p>She presents no obvious external symptoms of Oripathy.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.2u/L</span></p>
                              <p>Degree of infection is minor and physical symptoms are not yet present.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Fang shows off a Kuranta's natural dominance in battle by always holding the most advantageous position at the critical moment. To strike a balance between power and control, Fang prefers to use a spear, which she applies with versatility in any situation. Fang acts impulsively and springs into action before others even finish talking.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Immigrants from many nations came to the outskirts of Columbia. Fang, Kroos, and Beagle all met there after moving from their respective homelands. After realizing their common goals, they joined the city guard and underwent basic training together. The humorless Fang, the gentle Beagle, and the laid-back Kroos possess wildly different personalities yet rely on one another for support.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>Before an election day, a Catastrophe struck the outskirts of Columbia. In their efforts to aid others in escaping, all three Operators were infected with Oripathy. Fang suffered discrimination due to her condition and fell into deep despair. Kroos rallied the three of them and together they went to Rhodes Island.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>After arriving at Rhodes Island, Fang and her two companions as well as Hibiscus and Lava were all trained by Dobermann. The training was extraordinarily intense, and Kroos and Hibiscus seized every opportunity they could to goof off. Even Fang as their captain couldn't do anything to control them. Currently, Fang is training herself to be as intense and strict as her teacher, Dobermann. However, if the giddy expression on her face as she eats fruit is any indication, she's got a long way to go.</p>
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
                         <p>Is there anything I can help you with, Doctor?</p>
                    }

                    talk1={
                         <p>Thank you for believing in me! I'll keep up my work!</p>
                    }

                    talk2={
                         <p>Hibiscus and Lava are fighting again... What a pain. Why are they like this? They're sisters.</p>
                    }

                    talk3={
                         <p>Instructor Dobermann puts us through mock battles a lot, but I can never get a handle on her skill. Doctor, next time you and Amiya observe our training, would you please give us some notes?</p>
                    }

                    talkAfterPromotion1={
                         <p>Someone on my team is late again, huh? I'll make sure that gets fixed.</p>
                    }

                    talkAfterPromotion2={
                         <p>-</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>Lava and I are both Infected, but I didn't get a talent for Arts like she did...</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>Rhodes Island is our home and shelter, Doctor. I will protect everyone here with my life.</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>The ever-honest and reliable Beagle, the perceptive Kroos, the resourceful Lava and the energetic Hibiscus. I like everyone in this team... as long as Hibiscus doesn't force her health food innovations on me.</p>
                    }

                    idle={
                         <p>Shhh! The Doctor's resting. We can talk outside.</p>
                    }

                    onboard={
                         <p>Lancer Fang, captain of Reserve Op Team A1. My team and I will do our best to serve Rhodes Island.</p>
                    }

                    watchingBattleRecord={
                         <p>Thank you for your guidance.</p>
                    }

                    promotion1={
                         <p>Your approval means so much to me, Doctor. This promotion proves my hard work is paying off.</p>
                    }

                    promotion2={
                         <p>-</p>
                    }

                    addedToSquad={
                         <p>Leave it to me.</p>
                    }

                    appointedAsSquadLeader={
                         <p>I know the captain's duty well. Rest easy.</p>
                    }

                    depart={
                         <p>Team, check your gear before departing.</p>
                    }

                    beginOperation={
                         <p>Enemy spotted. Prepare to fight!</p>
                    }

                    selectingOperator1={
                         <p>Ready for action.</p>
                    }

                    selectingOperator2={
                         <p>On standby.</p>
                    }

                    deployment1={
                         <p>In position.</p>
                    }

                    deployment2={
                         <p>Leave it to us.</p>
                    }

                    inBattle1={
                         <p>Thrust!</p>
                    }

                    inBattle2={
                         <p>Everyone, follow me!</p>
                    }

                    inBattle3={
                         <p>-</p>
                    }

                    inBattle4={
                         <p>-</p>
                    }

                    fourStarResult={
                         <p>With the right plan, even rookies like us can win a tough fight!</p>
                    }

                    threeStarResult={
                         <p>We have accomplished our objective as planned.</p>
                    }

                    subThreeStarResult={
                         <p>We can't call a mission complete if we let even a single enemy get through. Beagle, let's do better on the next one.</p>
                    }

                    operationFailure={
                         <p>I'm sorry I failed you, Instructor Dobermann...</p>
                    }

                    assignedToFacility={
                         <p>Yes. I'm back. Is Kroos here too?</p>
                    }

                    tap={
                         <p>Ahh...!</p>
                    }

                    trustTap={
                         <p>Am I helping?</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>I'm ready whenever you need me, Doctor.</p>
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
                         'Cruciata',
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
                              <p>Cambrian 1096 Winter New Arrivals / Cruciata</p>
                              <p>Waterproof with handmade details, it includes special sleeves, detachable parts and zipper pockets.</p>
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
                         '- Store, clear 0-11',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_123_fang/char_123_fang_1.png',
                         'characters/char_123_fang/char_123_fang_1.png',
                         '',
                         'characters/char_123_fang/char_123_fang_winter_1b.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2023winter.png',
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
                                   itemUrl="url('icons/MTL_SL_G1.png')"
                                   itemAmount='x2'
                                   itemDesc='Orirock' />
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
                                   itemAmount='x1'
                                   itemDesc='Sugar' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH2.png')"
                                   itemAmount='x2'
                                   itemDesc='Polyester' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x1'
                                   itemDesc='Oriron Cluster' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x2'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE3.png')"
                                   itemAmount='x2'
                                   itemDesc='Aketon' />
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