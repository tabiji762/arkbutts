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
               operatorName="Młynar"
               operatorClass="Guard"
               profile="charavatars/char_4064_mlynar.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'none', 'none', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(200, 140, 70, 0.3)'
               accentColor='rgb(200, 140, 70)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_4064_mlynar.png", "Młynar", 'Liberator Guard', 'Melee', 'Physical', 6]}

                    // show elite1, show elite2
                    showElites={['block', 'block']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}

                    potentialInfo={['DP Cost -1', 'Improves Talent 1', 'ATK +25', 'Improves Talent 2', 'DP Cost -1']}
                    trustInfo={['HP +360', 'ATK +30']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 25, 0, 0, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[360, 0, 30]}

                    hpRange={[1945, 2560, 3241, 3906]}
                    defRange={[239, 322, 426, 502]}
                    atkRange={[161, 231, 301, 355]}
                    resRange={[15, 15, 15]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[2, 2, 3]}
                    costRange={[10, 12, 12]}
                    aspdRange={[1.2, 1.2, 1.2]}

                    maxRangeValues={[50, 80, 90]}

                    opRanges={[
                         <table>
                              <tbody>
                                   <tr><td /></tr>
                                   <tr><td className="center-tile" /><td /></tr>
                                   <tr><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /></tr>
                                   <tr><td className="center-tile" /><td /></tr>
                                   <tr><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /></tr>
                                   <tr><td className="center-tile" /><td /></tr>
                                   <tr><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Normally does not attack and has 0 Block; When skill is inactive, ATK gradually increases up to <span className='blueText'>+200%</span> over <span className='blueText'>40</span> seconds. ATK is reset when the skill ends.</p>}

                    talent1Title={<h2>Wanderer</h2>}
                    talent2Title={<h2>Unmoved</h2>}
                    
                    talentWrapperVisibility={['none', 'flex', 'flex']}
                    talent1Visibility={['none', 'flex', 'flex']}
                    talent2Visibility={['none', 'none', 'flex']}

                    talent1Text={[
                         <p></p>,
                         <p>
                              ATK increased to 105% when attacking.
                              If there are 3 or more enemies nearby,
                              ATK increased to 110%, and take 10% less damage
                         </p>,
                         <p>
                              ATK increased to 110% when attacking.
                              If there are 3 or more enemies nearby,
                              ATK increased to 115%, and take 15% less damage
                         </p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p>
                              More likely to be attacked while deployed.
                              When any Kazimierz Operator is attacked,
                              reflect 15% of Młynar's ATK as True Damage
                         </p>
                    ]}

                    potTalent1Text={[
                         <p></p>,
                         <p>
                              ATK increased to 108% <span className='blueText'>(+3%)</span> when attacking.
                              If there are 3 or more enemies nearby,
                              ATK increased to 113% <span className='blueText'>(+3%)</span>, and take 10% less damage
                         </p>,
                         <p>
                              ATK increased to 113% <span className='blueText'>(+3%)</span> when attacking.
                              If there are 3 or more enemies nearby,
                              ATK increased to 118% <span className='blueText'>(+3%)</span>, and take 10% less damage
                         </p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p>
                              More likely to be attacked while deployed.
                              When any Kazimierz Operator is attacked,
                              reflect 18% <span className='blueText'>(+3%)</span> of Młynar's ATK as True Damage
                         </p>,
                    ]}

                    bskill1Title={'Self-Absorbed'}
                    bskill2Title={'Business is Business'}

                    bskill1img='bskills/bskill_ctrl_cost.png'
                    bskill2img='bskills/bskill_ctrl_lonely.png'

                    bskillWrapperVisibility={['flex', 'flex', 'flex']}
                    bskill1Visibility={['flex', 'flex', 'flex']}
                    bskill2Visibility={['none', 'none', 'flex']}

                    bskill1Text={[
                         <p>When this operator is assigned to the Control Center, increases morale of all operators in the Control Center by <span className='blueText'>+0.05</span> per hour</p>,
                         <p>When this operator is assigned to the Control Center, increases morale of all operators in the Control Center by <span className='blueText'>+0.05</span> per hour</p>,
                         <p>When this operator is assigned to the Control Center, increases morale of all operators in the Control Center by <span className='blueText'>+0.05</span> per hour</p>,
                    ]}
                    bskill2Text={[
                         <p></p>,
                         <p></p>,
                         <p>
                              When this operator is assigned to the Control Center,
                              working operators in <span className='blueText'>certain facilities</span> will recover <span className='blueText'>+0.1</span> per hour,
                              and some skills will provide additional morale recovery for Operators working in <span className='blueText'>other facilities.</span>
                         </p>
                    ]}
               />
               <Skills display={skillsDisplay}

                    // shows or hides skill1 button, skill2 button, skill3 button
                    skillVisibility={[true, true, true]}

                    // shows or hides the range part, use none or flex
                    rangeVisibility={['none', 'flex', 'flex']}

                    // use table tag to make range, s1, s2, s3 respectively
                    skillRanges={[
                         <table>
                              <tbody><tr></tr></tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /></tr>
                                   <tr><td className='center-tile' /><td /><td /></tr>
                                   <tr><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td className='center-tile' /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /></tr>
                                   <tr><td /><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    // shows or hides addendum, use block or none
                    addendumVisibility={['none', 'block', 'none']}

                    // enforces max value of range input, nescessary for specialization and stuff
                    maxInputRange='10'

                    skillNames={[
                         'Unvoiced Anger',
                         'Unresolved Sorrow',
                         'Unbrilliant Glory'
                    ]}
                    skillImages={[
                         'skills/skill_icon_skchr_mlynar_1.png',
                         'skills/skill_icon_skchr_mlynar_2.png',
                         'skills/skill_icon_skchr_mlynar_3.png'
                    ]}
                    skillRecoveryTypes={[
                         'Auto Recovery',
                         'Auto Recovery',
                         'Auto Recovery'
                    ]}
                    skillTriggerTypes={[
                         'Manual Trigger',
                         'Manual Trigger',
                         'Manual Trigger'
                    ]}


                    // skill 1
                    skill1Content={[
                         <p>Attacks deal <span className='blueText'>130%</span> ATK as Physical damage, DEF <span className='blueText'>+20%</span></p>,
                         <p>Attacks deal <span className='blueText'>135%</span> ATK as Physical damage, DEF <span className='blueText'>+20%</span></p>,
                         <p>Attacks deal <span className='blueText'>140%</span> ATK as Physical damage, DEF <span className='blueText'>+20%</span></p>,
                         <p>Attacks deal <span className='blueText'>145%</span> ATK as Physical damage, DEF <span className='blueText'>+30%</span></p>,
                         <p>Attacks deal <span className='blueText'>150%</span> ATK as Physical damage, DEF <span className='blueText'>+30%</span></p>,
                         <p>Attacks deal <span className='blueText'>160%</span> ATK as Physical damage, DEF <span className='blueText'>+30%</span></p>,
                         <p>Attacks deal <span className='blueText'>170%</span> ATK as Physical damage, DEF <span className='blueText'>+40%</span></p>,
                         <p>Attacks deal <span className='blueText'>180%</span> ATK as Physical damage, DEF <span className='blueText'>+45%</span></p>,
                         <p>Attacks deal <span className='blueText'>190%</span> ATK as Physical damage, DEF <span className='blueText'>+50%</span></p>,
                         <p>Attacks deal <span className='blueText'>200%</span> ATK as Physical damage, DEF <span className='blueText'>+60%</span></p>,
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
                    skill1InitialSp={[10, 10, 10, 15, 15, 15, 15, 15, 15, 15]}
                    skill1SpCost={[40, 40, 40, 35, 35, 35, 30, 30, 30, 30]}
                    skill1Duration={[20, 20, 20, 25, 25, 25, 30, 30, 30, 30]}

                    // skill 2
                    skill2Content={[
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>100%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>110%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>120%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>130%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>140%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>150%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>160%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>170%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>180%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                         <p>
                              Attack interval <span className='redText'>increases</span>,
                              attack range <span className='blueText'>increases</span>,
                              attacks deal <span className='blueText'>190%</span> ATK as Physical damage <span className='blueText'>twice</span>.
                         </p>,
                    ]}
                    skill2Addendum={[
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                         <p><span className='orangeText'>If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Skill can be manually deactivated.</span></p>,
                    ]}
                    skill2InitialSp={[10, 10, 10, 10, 10, 10, 10, 10, 10, 10]}
                    skill2SpCost={[40, 40, 40, 35, 35, 35, 30, 30, 30, 25]}
                    skill2Duration={[20, 20, 20, 20, 20, 20, 20, 20, 20, 20]}

                    // skill 3
                    skill3Content={[
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>110%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>8%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>115%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>8%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>120%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>8%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>125%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>10%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>130%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>10%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>140%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>10%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>150%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>11%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>160%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>11%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>170%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>11%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
                         <p>
                              Attack range <span className='blueText'>increased</span>,
                              Trait effect increases by <span className='blueText'>2</span>x (Trait multiplier -10% for each enemy defeated),
                              attacks hit <span className='blueText'>5</span> targets for <span className='blueText'>180%</span> ATK as Physical damage.
                              When an enemy within range is attacked by a Kazimierz Operator,
                              deal an extra <span className='blueText'>12%</span> of Młynar's ATK as <span className='blueText'>True</span> damage.
                         </p>,
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

                    skill3InitialSp={[10, 10, 10, 15, 15, 15, 20, 20, 20, 20]}
                    skill3SpCost={[55, 55, 55, 50, 50, 50, 45, 45, 45, 42]}
                    skill3Duration={[25, 25, 25, 26, 26, 26, 26, 27, 27, 28]}
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
                         'flex', // promotion record
                         'none', // class conversion record 1
                         'none', // class conversion record 2
                    ]}

                    basicInfo={[
                         'Młynar',
                         'Male',
                         '17 Years',
                         'Kazimierz',
                         'Dec. 3',
                         'Kuranta',
                         '191cm',
                         'Medical tests have confirmed that no infection is present.'
                    ]}

                    physicalExam={[
                         'Excellent',
                         'Outstanding',
                         'Excellent',
                         'Standard',
                         'Outstanding',
                         'Excellent'
                    ]}

                    profile={
                         <div>
                              <p>Młynar Nearl, the former head of the Nearl household and the uncle of Operators Nearl and Blemishine, has yet to receive a knight title of any kind.</p>
                              <p>Roughly two months after the Kazimierz Major came to a close, he accepted Rhodes Island's invitation and is now assisting us with our affairs in Kazimierz.</p>
                         </div>

                    }

                    clinicalAnalysis={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.</p>
                              <br />
                              <p>[Cell-Originium Assimilation] <span className='focusText'>0%</span></p>
                              <p>Operator Młynar shows no signs of Originium infection.</p>
                              <br />
                              <p>[Blood Originium-Crystal Density] <span className='focusText'>0.15u/L</span></p>
                              <p>At one point, Operator Młynar spent an extended period of time in the wilderness. As such, his numbers are slightly higher than average for an office worker in the Grand Knight Territory.</p>
                              <p>Although it is unlikely that he needs a reminder, the Medical Department has nonetheless provided him with recommendations on wilderness protection, per protocol.</p>
                         </div>
                    }

                    archiveFile1={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>We rarely get the opportunity to see Operator Młynar aboard the landship, but if you are lucky enough to run into him and he happens to have some free time, he might just give you a few words of advice at the training grounds.</p>
                              <p>Młynar may not have formally been a campaign knight, but his combat techniques clearly take after the traditional style employed by Kazimierz's knights. It can be inferred that the Nearl family's traditional training practices were sufficient to develop his mastery over the weapons commonly used by knights.</p>
                              <p>As a young man, Młynar frequently followed his father, Kirill Nearl, and his team of campaign knights as an apprentice, giving him the opportunity to accumulate combat experience under the wings of a great many outstanding knights.</p>
                              <p>However, whenever he puts down his training knight shield and picks up his sword, it becomes immediately clear to everyone nearby that the sword is his weapon. In most historied knight families, when a young man comes of age, he often chooses to once again leave home to improve his techniques and disposition, before joining a knight order to serve Kazimierz. However, having already mastered the sword during his time as a wanderer, Młynar set himself on a different path.</p>
                              <p>...As for his Originium Arts, from what I've heard, knights never use Arts during a duel unless their beliefs are on the line. That said, during his test, he did show us his Arts just once.</p>
                              <p>We've seen Nearl and Blemishine's Arts. They are always as radiant as can be, possibly scorching, unadulterated. To our surprise, though, Operator Młynar's Arts initially felt gentle, even loving. However, upon realizing the anger the flow of his golden light embodied, we had to immediately stop him from drawing his sword, so as to minimize the repair work needed after his test.</p>
                         </div>
                    }

                    archiveFile2={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>Unlike the Radiant Knight, Młynar primarily operates outside the Grand Knight Territory. Not long after he came aboard Rhodes Island and signed his agreement, he made his way back to Kazimierz. However, he did not immediately report to Rhodes Island's Kawalerielki office. In addition, he tendered his letter of resignation to his former employer in the Grand Knight Territory by mail.</p>
                              <p>Clearly, there are many in the city who view Młynar as a threat, and we can also surmise from his own account that a number of recent incidents he was involved in have affected the interests of certain individuals. Still, the retrial of a misjudged case, or the downfall of a few companies and nobles, are hardly significant in this city. At this point, rather than being concerned by all the attacks, open or covert, against his family, perhaps it's more fitting to say that having stayed in this city for ten years, he no longer feels that fighting these forces will accomplish anything.</p>
                              <p>'We were honored to have his help during an operation. He wasn't as difficult to work with as I expected. By which I mean I thought he'd be a bossy, arrogant noble, or maybe someone who strictly followed the traditional rules of chivalry... but he simply listened and promised to give you a hand before you screwed up too badly. The only thing we had to get used to is that he never calls anyone by their codename. I mean, we do have a good number of Kazimierzian operators who use their titles from the Major as their codenames, so maybe he's got a grudge against that, but it's not that weird if you ask me.</p>
                              <p>'...That said, it's hard not to feel bad if you make a mistake while working with him. That time, I almost screwed up the entire mission, and after that we let him make all the decisions.</p>
                              <p>'He gives smooth, efficient plans. It doesn't seem like he cares whether you can actually follow them or not, though. I remember him asking us to split up to stop a couple commercial knights from tailing us. How were we supposed to find them? How would we stop them? Can we knock them out? Is it okay if we blow the roads up? He didn't discuss any of that with us.</p>
                              <p>'I guess he's probably more used to working alone? I mean, all of us did our own thing and finished our own objectives with no communication whatsoever, and somehow it all just worked out... I'm really curious. What kind of man does it take to get used to doing things the way he does? And what got him doing things like that in the first place?'</p>
                         </div>
                    }

                    archiveFile3={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>[Classified Log]</p>
                              <p>Based on available data, the Nearl couple was active on the battlefield for an exceedingly short period of time. The two of them rose to prominence twenty-five years ago when they fought under the same knight order's banner during the campaign knights' invasion of Ursus, with Schnitz taking over command during a crucial battle when the knight captain was gravely injured, and leaving a deep impression on the soldiers from both sides. However, that was their last notable accomplishment. Their disappearance without a trace over a decade ago seems to have marked a turning point in the fate of this generation of the Nearl family. As Rhodes Island has expressed our willingness to help locate them, Młynar agreed to have a conversation with us on the matter.</p>
                              <p>During our conversation, we learned that Yolanta Nearl was also born into an established knight family and had been on good terms with the Nearls since she was young. She had originally intended to join the Silverlance Pegasus when she became a campaign knight, but Schnitz insisted that she would be more effective on the battlefield with a bow than a silverlance.</p>
                              <p>'He arrived at that conclusion the moment she released her bowstring for the first time,' said Młynar, without elaborating further. Yolanta quickly proved Schnitz correct with her performance during the campaign, and her extraordinary talent in and understanding of Originium Arts made her particularly effective when deployed in positions overlooking the entire battlefield.</p>
                              <p>As for his brother Schnitz, Młynar had only this to say: 'He is my brother.'</p>
                              <p>Perhaps it is because of how well he knew them, but despite the passage of time and the fact that everyone, including their daughters Margaret and Maria, has already accepted that they might be dead, Młynar continues to search for his brother and sister-in-law. When asked if he had any new leads, he shook his head, though it seemed his doubts on the matter were stronger than ever.</p>
                         </div>
                    }

                    archiveFile4={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>Before joining Rhodes Island, Młynar worked at a medium-sized corporation that primarily sold construction materials. Mieszko Industries is its biggest shareholder, and the company has had a stable fiscal performance. It has not faced any significant charges and has no obvious connections to the nobility. It's merely one of Kazimierz's countless unremarkable companies. While prevailing rumors at the time suggested that the Nearls' younger son would join either the Adeptus Sprawiedliwi or the Knights Association and eventually take over the family's Knight Primus title from the ailing Kirill, the decision that Młynar ultimately made was perhaps influenced by some external factor, or his disappointment with Kazimierz.</p>
                              <p>But we've met many disappointed men. The real question is what made him decide to do something now, and how much of his strength he's willing to lend to Rhodes Island.</p>
                              <p>Młynar joined Rhodes Island after the Infected disturbances across the Dzwonek region. The Adeptus Sprawiedliwi successfully kept the word of the incident from spreading, thus ensuring no other forces could take advantage of this information. Młynar himself did not provide much in the way of his personal perspective on the matter. However, when HR brought this up again while organizing files, he gave an unexpected response: 'I've just always thought I needed to prove Kazimierz still has a way out.'</p>
                              <p>Młynar has also never brought up anything to do with Operators Blemishine, Whislash, or Platinum since signing his cooperation agreement with us. Nor does he interact with Flametail and the others while in Kazimierz. There has been only one instance of Młynar, Whislash, and Blemishine having a conversation, after Whislash requested a meeting, and it lasted less than ten minutes. Although the details of that conversation are unknown, our Engineering operators told us that Blemishine suddenly seemed much more energetic, as if a weight had been lifted from her heart. Even then, Młynar didn't appear to pay much more attention to the other Kazimierzian operators than before, even though many of us are just as curious about him as we are about the Radiant Knight herself.</p>
                              <p>It is clear that Młynar is not looking for an answer from Rhodes Island, and perhaps he does not even believe that there is an answer out there. But when he assisted us with a string of Infected problems, he displayed a sense of responsibility that definitely did not seem to come from respect towards his work. Some may believe the Land of Knights has no more room for knightly fantasies, and that the endless waves will eventually consume its cities, but how can anyone know how the next story will be written, and where the next city will be built, until they are completed?</p>
                         </div>
                    }

                    promotionRecord={
                         <div>
                              <p style={{ fontStyle: 'italic' }}>Raise Młynar to Elite 2</p>
                              <br className='break-size' />
                              <p>[An old letter]</p>
                              <p>I don't care, Father. Must knights prove themselves through victory? The men in the arenas never seem more brilliant simply because they manage to maul more of their opponents.</p>
                              <p>Knights should stand with those in distress, those with nothing but the clothes on their backs. This alone I will always believe in. When you stand with the weak, failure is hardly unheard of. Rather than relishing in victory, I would rather believe that the spirit of the knighthood also encompasses the endurance of failure.</p>
                              <p>It's just as our family motto goes, 'Fear neither hardship nor darkness.'</p>
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
                         <p>If you've thought it through, I have no qualms with it. Please let me know when the documents are due.</p>
                    }

                    talk1={
                         <p>...Please, go ahead. It's okay. Reading the paper is just an unhelpful habit I picked up in the Grand Knight Territory, but one can learn much more from a day's trip outside the city than a hundred papers can teach... It's true that the Nearl name often shows up in the headlines, but there's no need to pay that any mind.</p>
                    }

                    talk2={
                         <p>I'm afraid I can't advise Rhodes Island on its affairs in Kazimierz. I may have spent a decade in that tower, but only as an unambitious nobody. I'm in no position to express my views on the General Chamber of Commerce. The sword...? Yes, I know how to use one, and I've always used the same one.</p>
                    }

                    talk3={
                         <p>No need to have Maria come see me. She's not a child anymore, and ought to make her own decisions, lest she embarrass her parents. A knight should temper themselves through travel, and no matter what she does under Rhodes Island's wing, she must always be responsible for her own actions.</p>
                    }

                    talkAfterPromotion1={
                         <p>Leithanien's conspiracies... Nothing more than trifles that happened years ago. It doesn't change the fact that I'm an ordinary citizen, nor does it change anything else. To Kazimierzians, stars and heroes come and go. The success they enjoy is only that which they are permitted.</p>
                    }

                    talkAfterPromotion2={
                         <p>Seems Margaret kept the title she earned from that charade. Hmph, so she still sees her actions as a victory, after squandering the Nearls' glory in those cheap commercial performances... My Originium Arts? Alas, I can nary illuminate a thing.</p>
                    }

                    talkAfterTrustIncrease1={
                         <p>No need to teach me how to get along with the Infected...You should be aware of my time spent living among the refugees…? The Infected, the disabled, the bankrupt, the famished and poor... they're all the same in the ways that matter. The most honorable thing they can hope to achieve is climbing out of their tent in the settlement before their final moments arrive.</p>
                    }

                    talkAfterTrustIncrease2={
                         <p>You, too, encourage the others to throw themselves at a cause that will yield no results. Those who attempt to walk through fire in the dark night will only find themselves immolated. That said, you don't need my advice, given the path you so obstinately walk alone.</p>
                    }

                    talkAfterTrustIncrease3={
                         <p>In the first two years after they left the Grand Knight Territory, the campaign knights would often bring me their letters. By the time the last one arrived, Maria was already old enough to understand its gist... Whether the letters were written beforehand makes no difference to me, but given the weight of their lives and deaths, they wouldn't have disappeared without so much as a peep.</p>
                    }

                    idle={
                         <p>A wilderness without light…</p>
                    }

                    onboard={
                         <p>Młynar Nearl. Per our contract's provisions, I shall assist Rhodes Island with its operations in Kazimierz. ...You already knew my name. I'm neither a knight, nor do I have a title.</p>
                    }

                    watchingBattleRecord={
                         <p>A Kazimierzian is smart after the damage is done…</p>
                    }

                    promotion1={
                         <p>I appreciate your appraisal, if you consider such ordinary performance worthy of promotion.</p>
                    }

                    promotion2={
                         <p>Titles and positions are both meaningless. The knights of the Nearl family do not require recognition to walk their paths. Even in modern Kazimierz, where every path leads to darkness.</p>
                    }

                    addedToSquad={
                         <p>Man has forgotten true struggle… as well as those who require it to survive.</p>
                    }

                    appointedAsSquadLeader={
                         <p>...Follow me.</p>
                    }

                    depart={
                         <p>Sand, dust, and blood. Most fail to imagine the sight of their admixture.</p>
                    }

                    beginOperation={
                         <p>To think they are unaware of their own shame...</p>
                    }

                    selectingOperator1={
                         <p>I'm fully prepared.</p>
                    }

                    selectingOperator2={
                         <p>Hm.</p>
                    }

                    deployment1={
                         <p>These so-called foes… not even worth drawing my sword.</p>
                    }

                    deployment2={
                         <p>Just like the old days?… No.</p>
                    }

                    inBattle1={
                         <p>This won't hurt your eyes.</p>
                    }

                    inBattle2={
                         <p>How very tiring.</p>
                    }

                    inBattle3={
                         <p>It rains.</p>
                    }

                    inBattle4={
                         <p>That sigh... still haunts my mind.</p>
                    }

                    fourStarResult={
                         <p>You still have full confidence in everything... With these people's fate in your hand, you still believe there will be a happy ending.</p>
                    }

                    threeStarResult={
                         <p>If you have no other work for me, I shall take my leave.</p>
                    }

                    subThreeStarResult={
                         <p>Deserters… they always have somewhere to hide, among their like-minded brethren.</p>
                    }

                    operationFailure={
                         <p>Mark my words, there will be battles you cannot win. Have you considered the consequences of those inevitable failures?</p>
                    }

                    assignedToFacility={
                         <p>You... accommodate quite a few people here.</p>
                    }

                    tap={
                         <p>...I believe I've made a suggestion regarding this matter?</p>
                    }

                    trustTap={
                         <p>Kazimierz's knight novels... Hmph... The Grand Knight Territory no longer has room for such fantasies.</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Good day... 'Doctor.'</p>
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
                         'W Dali',
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
                              <p>EPOQUE Sub-Brand [Passe] Series Selects/W Dali.</p>
                              <p>Młynar's attire as a knight-errant, wandering Kazimierz's plains and endless forests, the words engraved on the hilt of his sword not yet covered by useless trinkets.</p>
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
                         '- Store, 24op',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitImgLinks={[
                         'characters/char_4064_mlynar/char_4064_mlynar_1b.png',
                         'characters/char_4064_mlynar/char_4064_mlynar_1b.png',
                         'characters/char_4064_mlynar/char_4064_mlynar_2b.png',
                         'characters/char_4064_mlynar/char_4064_mlynar_epoque_28b.png',
                         '',
                         '',
                         '',
                         '',
                    ]}

                    outfitBrandLinks={[
                         'brands/2024epoque.png',
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
                                   itemAmount='x30,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_ASC_GRD1.png')"
                                   itemAmount='x5'
                                   itemDesc='Guard Chip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH2.png')"
                                   itemAmount='x8'
                                   itemDesc='Polyester' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON2.png')"
                                   itemAmount='x8'
                                   itemDesc='Oriron' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x180,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_ASC_GRD3.png')"
                                   itemAmount='x4'
                                   itemDesc='Guard Dualchip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_DS.png')"
                                   itemAmount='x4'
                                   itemDesc='D32 Steel' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IAM4.png')"
                                   itemAmount='x5'
                                   itemDesc='Incandescent Alloy Block' />
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    skillImages={[
                         'skills/skill_icon_skchr_mlynar_1.png',
                         'skills/skill_icon_skchr_mlynar_2.png',
                         'skills/skill_icon_skchr_mlynar_3.png'
                    ]}

                    skillNames={[
                         'Unvoiced Anger',
                         'Unresolved Sorrow',
                         'Unbrilliant Glory'
                    ]}

                    skillResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL1.png')"
                                   itemAmount='x5'
                                   itemDesc='Skill Summary 1' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL1.png')"
                                   itemAmount='x5'
                                   itemDesc='Skill Summary 1' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-1-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON1.png')"
                                   itemAmount='x5'
                                   itemDesc='Oriron Shard' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-1-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG1.png')"
                                   itemAmount='x4'
                                   itemDesc='Sugar Substitute' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE2.png')"
                                   itemAmount='x4'
                                   itemDesc='Polyketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS2.png')"
                                   itemAmount='x3'
                                   itemDesc='Device' />
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
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OC3.png')"
                                   itemAmount='x6'
                                   itemDesc='Crystalline Component' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_SS.png')"
                                   itemAmount='x3'
                                   itemDesc='Semi Synthetic Solvent' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7012.png')"
                                   itemAmount='x4'
                                   itemDesc='RMA70-12' />
                         </div>,
                    ]}


                    //skill specialization stuff
                    skillSpecVisibility={[
                         'flex',
                         'flex',
                         'flex'
                    ]}

                    skill1SpecResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x3'
                                   itemDesc='RMA70-24' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE1.png')"
                                   itemAmount='x9'
                                   itemDesc='Manganese Ore' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x12'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x3'
                                   itemDesc='Optimized Device' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON4.png')"
                                   itemAmount='x6'
                                   itemDesc='Oriron Block' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x15'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PP.png')"
                                   itemAmount='x6'
                                   itemDesc='Polymerization Preparation' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x7'
                                   itemDesc='White Horse Kohl' />
                         </div>
                    ]}

                    skill2SpecResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OC4.png')"
                                   itemAmount='x4'
                                   itemDesc='Crystalline Circuit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PGEL3.png')"
                                   itemAmount='x3'
                                   itemDesc='Coagulating Gel' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x12'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x4'
                                   itemDesc='White Horse Kohl' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE4.png')"
                                   itemAmount='x8'
                                   itemDesc='Keton Colloid' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x15'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_DS.png')"
                                   itemAmount='x6'
                                   itemDesc='D32 Steel' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x5'
                                   itemDesc='RMA70-24' />
                         </div>
                    ]}

                    skill3SpecResources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PLCF.png')"
                                   itemAmount='x4'
                                   itemDesc='Cutting Fluid Solution' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS3.png')"
                                   itemAmount='x5'
                                   itemDesc='Integrated Device' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x12'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE2.png')"
                                   itemAmount='x4'
                                   itemDesc='Manganese Trihydrate' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RS.png')"
                                   itemAmount='x8'
                                   itemDesc='Refined Solvent' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x15'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OEU.png')"
                                   itemAmount='x6'
                                   itemDesc='Crystalline Electronic Unit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OC4.png')"
                                   itemAmount='x4'
                                   itemDesc='Crystalline Circuit' />
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