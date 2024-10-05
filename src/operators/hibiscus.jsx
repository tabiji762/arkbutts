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
               operatorName="Hibiscus"
               operatorClass="Medic"
               profile="charavatars/char_120_hibisc.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               // overview, skills, modules, summons, files, outfits, resources
               showTabs={['block', 'block', 'none', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(127, 69, 135, 0.3)'
               accentColor='rgb(127, 69, 135)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_120_hibisc.png", "Hibiscus", 'Standard Medic', 'Healing', 'Ranged', 3]}

                    // show elite1, show elite2
                    showElites={['block', 'none']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'none', 'none', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -4s', 'ATK +18', 'Redeployment Time -6s', 'DP Cost -1']}

                    trustInfoVisibility={['none', 'block']}
                    trustInfo={['', 'ATK +45']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 18, 0, -10, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[0, 0, 45]}

                    hpRange={[682, 975, 1220, 0]}
                    defRange={[61, 82, 110, 0]}
                    atkRange={[153, 248, 345, 0]}
                    resRange={[0, 0, 0]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[1, 1, 0]}
                    costRange={[15, 17, 0]}
                    aspdRange={[2.85, 2.85, 0]}

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

                    traitText={<p>Restores the HP of allies</p>}

                    talent1Title={<h2>Healing Up</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'none']}
                    talent1Visibility={['none', 'flex', 'none']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>ATK +4% (8% at lv55) (not reflected above)</p>,
                         <p></p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>ATK +4% (8% at lv55) (not reflected above)</p>,
                         <p></p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Thoughtfulness'}
                    bskill2Title={'Nutriology'}

                    bskill1img='bskills/bskill_dorm_single1.png'
                    bskill2img='bskills/bskill_ws_evolve1.png'

                    bskillWrapperVisibility={['flex', 'flex', 'none']}
                    bskill1Visibility={['flex', 'flex', 'none']}
                    bskill2Visibility={['none', 'flex', 'none']}

                    bskill1Text={[
                         <p>When this Operator is assigned to a Dormitory, restores <span className='blueText'>+0.55</span> Morale per hour to another Operator assigned to that Dormitory whose Morale is not full (Only the strongest effect of this type takes place) </p>,
                         <p>When this Operator is assigned to a Dormitory, restores <span className='blueText'>+0.55</span> Morale per hour to another Operator assigned to that Dormitory whose Morale is not full (Only the strongest effect of this type takes place) </p>,
                         <p>When this Operator is assigned to a Dormitory, restores <span className='blueText'>+0.55</span> Morale per hour to another Operator assigned to that Dormitory whose Morale is not full (Only the strongest effect of this type takes place) </p>,
                    ]}
                    bskill2Text={[
                         <p>When this Operator is assigned to the Workshop to process <span className='blueText'>elite</span> material, the production rate of byproduct increases by <span className='blueText'>70%</span></p>,
                         <p>When this Operator is assigned to the Workshop to process <span className='blueText'>elite</span> material, the production rate of byproduct increases by <span className='blueText'>70%</span></p>,
                         <p>When this Operator is assigned to the Workshop to process <span className='blueText'>elite</span> material, the production rate of byproduct increases by <span className='blueText'>70%</span></p>,
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
                         'Healing Up α',
                         '',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skcom_heal_up[1].png',
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
                         <p>ATK <span className='blueText'>+10%</span></p>,
                         <p>ATK <span className='blueText'>+15%</span></p>,
                         <p>ATK <span className='blueText'>+20%</span></p>,
                         <p>ATK <span className='blueText'>+30%</span></p>,
                         <p>ATK <span className='blueText'>+35%</span></p>,
                         <p>ATK <span className='blueText'>+40%</span></p>,
                         <p>ATK <span className='blueText'>+50%</span></p>,
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
                    skill1SpCost={[40, 40, 40, 35, 35, 35, 30, 0, 0, 0]}
                    skill1Duration={[20, 20, 20, 20, 20, 20, 20, 0, 0, 0]}

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
                         'Hibiscus',
                         'Female',
                         '1 Year',
                         'Victoria',
                         'Jun. 21',
                         'Sarkaz',
                         '153cm',
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
                              <p>Born in Londinium in Victoria, Hibiscus is the older twin sister of her fellow Operator, Lava. After contracting Oripathy, she came to Rhodes Island for treatment. While undergoing that treatment, she began to dream of helping others. Her passion for caring for others, as well as her hard work, have led Hibiscus to become a Rhodes Island Medic.</p>
                         </div>

                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Medical tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>7.4%</span></p>
                              <p>She presents no obvious external symptoms of Oripathy.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.2u/L</span></p>
                              <p>Degree of infection is minor and the physical symptoms are not present.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Originium Arts Rating</p>
                              <p>Though she possess basic Originium Arts, Hibiscus prefers not to utilize her Originium power. Instead she prefers to use her medical skills in order to care for and treat the wounds of her allies. Given her talents in medicine, Hibiscus has become an outstanding Rhodes Island medical Operator.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Born in Londinium, Hibiscus was popular among her neighbors as a child, and for good reason - she is considerate, hardworking, courteous, modest, and is good at taking care of people. Though it appears to outsiders that Lava does not like to deal with Hibiscus and that the two sisters don't share a strong relationship, Hibiscus knows the truth - that Lava just isn't very good at expressing those kinds of feelings.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>After the two sisters were infected with Oripathy, Hibiscus took Lava and left their parents to come to Rhodes Island. The determined Hibiscus decided to work hard for Rhodes Island for her sister, herself, her parents back home, and all the other infected.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>Because of Lava's obstinance, Hibiscus has cultivated a tough attitude from the time they were little. "This food is good for you. You need to eat it every day!" "I threw all your snacks away because they're bad for you!" "It's 10:30. You need to go to bed!" From a bystanders' perspective, Lava seems to have a rough time dealing with her older sister.</p>
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
                         <p>Did you call for me, Doctor? I feel so happy to be with you!</p>
                    }

                    talk1={
                         <p>Doctor! Dr. Kal'tsit said that you need to look after your health more. In two words, E-A-T L-E-S-S! So there!</p>
                    }

                    talk2={
                         <p>You know, Doctor, if my sister starts getting all bossy with you, you have to tell me! She needs my treatment or else!</p>
                    }

                    talk3={
                         <p>Dr. Kal'tsit teaches me tons of practical stuff, although it's tough to actually learn! At least I've always had a knack for nutrition, so I think I'm doing well with that!</p>
                    }

                    talkAfterPromotion1={
                         <p>I feel better about everyone here, compared to when I just joined Rhodes Island! And they all eat my healthy food on schedule! But... why does everyone pull these weird faces when they finish?</p>
                    }

                    talkAfterPromotion2={
                         <p>-</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>Tadaaaaaah! A special healthy meal just for you, Doctor! Decaf coffee and a hamburger without meat, cheese, pickles, or lettuce! Oh, and a mixed salad made of 12 different vegetables!</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>Hey, Doctor, where does your family live? Are they doing well? I know there's things you can't tell them about because they're your family... but, still, I think you've got to reach out. You have to try, at least.</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>Isn't it lonely to cook all by yourself? Let me help you out! Oh yeah, let's get Lava in here too!</p>
                    }

                    idle={
                         <p>Doctor, did you fall asleep? Have a good rest then. You need to sleep plenty to stay healthy.</p>
                    }

                    onboard={
                         <p>This is intern Hibiscus. From now on, I'll be in charge of managing yours and every Operator's health at Rhodes Island. Thank you for your cooperation!</p>
                    }

                    watchingBattleRecord={
                         <p>Oh, I see! So that's how you do it!</p>
                    }

                    promotion1={
                         <p>It's my honor to be promoted! I'm looking forward to working under you for the health management of us all, Doctor!</p>
                    }

                    promotion2={
                         <p>-</p>
                    }

                    addedToSquad={
                         <p>I won't fail you! I'll protect everyone!</p>
                    }

                    appointedAsSquadLeader={
                         <p>Acknowledged! I'll take good care of everyone! First, I need to get my special sustained-release medicine ready...</p>
                    }

                    depart={
                         <p>Please take good care of yourself while I'm gone!</p>
                    }

                    beginOperation={
                         <p>Ready to heal!</p>
                    }

                    selectingOperator1={
                         <p>Don't be afraid!</p>
                    }

                    selectingOperator2={
                         <p>Doctor?</p>
                    }

                    deployment1={
                         <p>There we go.</p>
                    }

                    deployment2={
                         <p>It's safe here!</p>
                    }

                    inBattle1={
                         <p>Please come to your senses!</p>
                    }

                    inBattle2={
                         <p>I can heal your wound in no time!</p>
                    }

                    inBattle3={
                         <p>-</p>
                    }

                    inBattle4={
                         <p>-</p>
                    }

                    fourStarResult={
                         <p>Even if everyone gets wounded, I can heal them all with my staff!</p>
                    }

                    threeStarResult={
                         <p>Looking after everyone's health is my greatest motivation!</p>
                    }

                    subThreeStarResult={
                         <p>Doctor! Everyone! Are you alright?</p>
                    }

                    operationFailure={
                         <p>No... First aid needed!</p>
                    }

                    assignedToFacility={
                         <p>Anything I can help with?</p>
                    }

                    tap={
                         <p>Oh, my~!</p>
                    }

                    trustTap={
                         <p>Doctor, do you want to have a taste of my new vitamin drink?</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Doctor! Would you mind tasting this?</p>
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
                         'Night Watcher',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitDescriptions={[
                         <div className='outfits-description'>
                              <p>One of the uniforms of Rhodes Island. <br /> Reliable, light and iconic.</p>
                              <p>+Regular fit <br />+DeepMentality Sports learning system</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>One of the uniforms of Rhodes Island. <br /> Reliable, light and iconic.</p>
                              <p>+Regular fit <br />+DeepMentality Sports learning system</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>An outfit that has been improved after the Operator's Promotion.</p>
                              <p>Custom-made to suit each Operator's experiences and needs, these outfits are designed to provide them maximum flexibility on any battlefield. Furthermore, this is all done without compromising the comfort that they've come to expect.</p>
                         </div>,
                         <div className='outfits-description'>
                              <p>0011 New Arrivals / Night Watcher</p>
                              <p>Handmade by Lungmen craftsman, this stylish outfit combines comfortable materials with cutting-edge tech and traditional handicraft. Custom-made services are also available. Fireproof.</p>
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
                         '- Available in Here A People Sows Event Shop, Certificate Shop, and Opening Event Part 3',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_120_hibisc/char_120_hibisc_1.png',
                         'characters/char_120_hibisc/char_120_hibisc_1.png',
                         '',
                         'characters/char_120_hibisc/char_120_hibisc_nian_1b.png',
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
                                   itemUrl="url('icons/MTL_SL_RUSH1.png')"
                                   itemAmount='x1'
                                   itemDesc='Ester' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON2.png')"
                                   itemAmount='x1'
                                   itemDesc='Oriron' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE2.png')"
                                   itemAmount='x2'
                                   itemDesc='Polyketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG3.png')"
                                   itemAmount='x2'
                                   itemDesc='Sugar Pack' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x2'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH3.png')"
                                   itemAmount='x2  '
                                   itemDesc='Polyester Pack' />
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