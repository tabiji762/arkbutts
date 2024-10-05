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
               operatorName="Lava"
               operatorClass="Caster"
               profile="charavatars/char_121_lava.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               // overview, skills, modules, summons, files, outfits, resources
               showTabs={['block', 'block', 'none', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(127, 69, 135, 0.3)'
               accentColor='rgb(127, 69, 135)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_121_lava.png", "Lava", 'Splash Caster', 'Arts', 'Ranged', 3]}

                    // show elite1, show elite2
                    showElites={['block', 'none']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'none', 'none', 'none']}

                    potentialInfo={['DP Cost -1', 'Redeployment Time -4s', 'ASPD +8', 'Improves Talent', 'DP Cost -1']}

                    trustInfoVisibility={['block', 'none']}
                    trustInfo={['ATK +60', '']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 0, 0, -4, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[0, 0, 60]}

                    hpRange={[614, 878, 1141, 0]}
                    defRange={[41, 69, 95, 0]}
                    atkRange={[321, 453, 582, 0]}
                    resRange={[10, 15, 0]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[1, 1, 0]}
                    costRange={[27, 30, 0]}
                    aspdRange={[2.9, 2.9, 2.9]}

                    maxRangeValues={[40, 55, 0]}

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
                                   <tr></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Deals AOE Arts damage</p>}

                    talent1Title={<h2>Quick Skill Usage</h2>}
                    talent2Title={<h2></h2>}

                    talentWrapperVisibility={['none', 'flex', 'none']}
                    talent1Visibility={['none', 'flex', 'none']}
                    talent2Visibility={['none', 'none', 'none']}

                    talent1Text={[
                         <p></p>,
                         <p>Immediately obtains 15 (30 at lv55) Skill Points after deployment</p>,
                         <p></p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>Immediately obtains 20 <span className='blueText'>(+5)</span> (35 <span className='blueText'>(+5)</span> at lv55) Skill Points after deployment</p>,
                         <p></p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p></p>,
                    ]}

                    bskill1Title={'Heat Charge α'}
                    bskill2Title={'Originium Work β'}

                    bskill1img='bskills/bskill_pow_spd1.png'
                    bskill2img='bskills/bskill_man_originium2.png'

                    bskillWrapperVisibility={['flex', 'flex', 'none']}
                    bskill1Visibility={['flex', 'flex', 'none']}
                    bskill2Visibility={['none', 'flex', 'none']}

                    bskill1Text={[
                         <p>When this Operator is assigned to a Power Plant, increases the drone recovery rate by <span className='blueText'>+10%</span></p>,
                         <p>When this Operator is assigned to a Power Plant, increases the drone recovery rate by <span className='blueText'>+10%</span></p>,
                         <p>When this Operator is assigned to a Power Plant, increases the drone recovery rate by <span className='blueText'>+10%</span></p>,
                    ]}
                    bskill2Text={[
                         <p>When this Operator is assigned to a Factory, Originium formula related productivity <span className='blueText'>+35%</span></p>,
                         <p>When this Operator is assigned to a Factory, Originium formula related productivity <span className='blueText'>+35%</span></p>,
                         <p>When this Operator is assigned to a Factory, Originium formula related productivity <span className='blueText'>+35%</span></p>,
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
                         'Tactical Chant α',
                         '',
                         ''
                    ]}
                    skillImages={[
                         'skills/skill_icon_skcom_magic_rage[1].png',
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
                         <p>ASPD <span className='blueText'>+10</span></p>,
                         <p>ASPD <span className='blueText'>+15</span></p>,
                         <p>ASPD <span className='blueText'>+20</span></p>,
                         <p>ASPD <span className='blueText'>+30</span></p>,
                         <p>ASPD <span className='blueText'>+35</span></p>,
                         <p>ASPD <span className='blueText'>+40</span></p>,
                         <p>ASPD <span className='blueText'>+50</span></p>,
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
                         'none', // archive 4
                         'none', // promotion record
                         'none', // class conversion record 1
                         'none', // class conversion record 2
                    ]}

                    basicInfo={[
                         'Lava',
                         'Female',
                         'Half a year',
                         'Victoria',
                         'Jun. 22',
                         'Sarkaz',
                         '154cm',
                         'Infection confirmed by medical examination.'
                    ]}

                    physicalExam={[
                         'Normal',
                         'Normal',
                         'Normal',
                         'Normal',
                         'Standard',
                         'Standard'
                    ]}

                    profile={
                         <div>
                              <p>Born in Londinium in Victoria, Lava is the younger twin sister of her fellow Operator, Hibiscus. After contracting Oripathy, she came to Rhodes Island for treatment. She found the idea of saving lives appealing, and so volunteered for training.</p>
                         </div>

                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>9.4%</span></p>
                              <p>She presents no obvious external symptoms of Oripathy.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.25u/L</span></p>
                              <p>Degree of infection is minor and has not had any physical impact.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Originium Arts Rating</p>
                              <p>Under the guidance of her Originium Arts instructor, Lava learned how to control basic Arts in less than a month despite never touching Originium before. Her methods are still rudimentary, and at present she can still only use simple flame conversions, but her stability and learning speed are astounding. If she trains for a long period of time, she may be able to reach a very high level.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Unlike other stray children hiding in dark alleys, Lava was born into a relatively normal middle-class Victorian family. Lava believes that one must personally put in effort to help others, rather than stand at a distance. When she was young, she enjoyed working with the poor and the orphaned. She was very aware how much pain they suffered, which planted in her heart the seeds of compassion and justice.</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>Lava is tough and ignores the advice of others when she moves into action. In fact, she is gentle and childlike at heart but prefers not to admit it to herself. Whenever anyone brings this up, she immediately changes the subject and tries to play it cool.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
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
                         <p>Need something? If you don't... Oh, I know... I can tell you your fortune.</p>
                    }

                    talk1={
                         <p>Just tell me when there's work to do. But don't ever put her and me on the same team. I hate her guts. And don't get me started on the weird food she makes me eat... Just thinking about it makes me... Euurghh...</p>
                    }

                    talk2={
                         <p>No one told me Hibiscus was here too before I came to Rhodes Island... It's too late for me to quit now...</p>
                    }

                    talk3={
                         <p>When on the battlefield, you've gotta act like it. I bet those people brought up in greenhouses have never thought about how you're supposed to aggravated or defeat the enemy. Ain't that right, Doctor?</p>
                    }

                    talkAfterPromotion1={
                         <p>Have you heard that saying "little sisters are righteous"? If it's true, then my sister is evil by default... at least she is as far as I'm concerned.</p>
                    }

                    talkAfterPromotion2={
                         <p>-</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>Any instruments? I can sort of play the piano. My teacher in Leithanien said learning an instrument can improve your Arts affinity. It apparently also eases the impact that Oripathy has on your mind...</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>I'm starving... Huh, what's this? You keep candy in here? Nom... I'm in the middle of my training, so should I really be eating this...</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>Like, I don't have a big beef with Hibiscus... It's all water under the bridge. I'm fine with her as long as she doesn't force me to eat her medicine and food. After all, she was the one... who saved my life...</p>
                    }

                    idle={
                         <p>I almost envy your ability to sleep like a log...</p>
                    }

                    onboard={
                         <p>I'm Lava. I'm a caster. I'm just here cause I'm bored and want something to do... I've heard my sworn nemesis is here too, though... Can I just quit now?</p>
                    }

                    watchingBattleRecord={
                         <p>Thanks.</p>
                    }

                    promotion1={
                         <p>Did you forget? I don't need a cause to work for, and I don't need a team... but... thanks, I guess...</p>
                    }

                    promotion2={
                         <p>-</p>
                    }

                    addedToSquad={
                         <p>As far as teamwork's concerned... I don't mind, as long as nobody messes up.</p>
                    }

                    appointedAsSquadLeader={
                         <p>I'm not good at this sort of stuff, but if you insist...</p>
                    }

                    depart={
                         <p>Let's go. Keep an eye on my back.</p>
                    }

                    beginOperation={
                         <p>I can see their souls. They're mine to reap.</p>
                    }

                    selectingOperator1={
                         <p>What are you fighting for?</p>
                    }

                    selectingOperator2={
                         <p>Hurry up.</p>
                    }

                    deployment1={
                         <p>Come on.</p>
                    }

                    deployment2={
                         <p>That's it.</p>
                    }

                    inBattle1={
                         <p>It's game over for you.</p>
                    }

                    inBattle2={
                         <p>Even the dead can't save you.</p>
                    }

                    inBattle3={
                         <p>-</p>
                    }

                    inBattle4={
                         <p>-</p>
                    }

                    fourStarResult={
                         <p>The supreme from of arts? Huh, sounds interesting.</p>
                    }

                    threeStarResult={
                         <p>I foresaw this result earlier. A perfect victory.</p>
                    }

                    subThreeStarResult={
                         <p>My fortune telling isn't always right. Sometimes there's a lot of external noise and the outcome ends up different.</p>
                    }

                    operationFailure={
                         <p>Dammit... These evil spirits are too strong...</p>
                    }

                    assignedToFacility={
                         <p>Well, all right. I like working alone anyhow.</p>
                    }

                    tap={
                         <p>Stop touching me! Uaghh!</p>
                    }

                    trustTap={
                         <p>Y-you're not gonna score points with me by doing that!</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Oh, It's you, Doctor. Morning.</p>
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
                         'A Ray of Sunshine',
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
                              <p>Test Collection Series / A Ray of Sunshine</p>
                              <p>Designed outfits for travel, with each operator's primary color as the base tone, complemented by contrasting outerwear as accents.</p>
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
                         '- Redemption reward for pre-ordering Arknights Official Artworks Volume 2',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_121_lava/char_121_lava_1.png',
                         'characters/char_121_lava/char_121_lava_1.png',
                         '',
                         'characters/char_121_lava/char_121_lava_sale_9b.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2024sale.png',
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
                                   itemUrl="url('icons/MTL_SL_STRG1.png')"
                                   itemAmount='x1'
                                   itemDesc='Sugar Substitute' />
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
                                   itemAmount='x1'
                                   itemDesc='Polyester' />
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
                                   itemAmount='x2'
                                   itemDesc='Oriron' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x1'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G3.png')"
                                   itemAmount='x2'
                                   itemDesc='Orirock Cluster' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x2'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG3.png')"
                                   itemAmount='x2'
                                   itemDesc='Sugar Pack' />
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