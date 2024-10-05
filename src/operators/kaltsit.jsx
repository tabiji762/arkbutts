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
               operatorName="Kal'tsit"
               operatorClass="Medic"
               profile="charavatars/char_003_kalts.png"
               // show each of the links in order, do 'none' if the operator doesnt have a summon, modules, etc
               showTabs={['block', 'block', 'block', 'block', 'block', 'block', 'block']}
               childClick={showTab}

               accentShadow='rgba(140, 160, 70, 0.3)'
               accentColor='rgb(140, 160, 70)'
          >

               <Overview display={overviewDisplay}
                    // profile img link, name, class subclass, position, attack type, stars
                    overviewInfo={["charavatars/char_003_kalts.png", "Kal'tsit", 'Standard Medic', 'Ranged', 'Healing', 6]}

                    // show elite1, show elite2
                    showElites={['block', 'block']}


                    //use flex or none
                    showStars={['flex', 'flex', 'flex', 'flex', 'flex', 'flex']}

                    potentialInfo={['DP Cost -1', 'Redeploy Time -4s', 'ATK +25', 'Improves Talent 2', 'DP Cost -1']}
                    trustInfoVisibility={['block', 'block']}
                    trustInfo={['HP +400', 'DEF +40']}

                    // hp, def, atk, res, redeploy, block, cost, aspd
                    potStats={[0, 0, 25, 0, -4, 0, -2, 0]}

                    // hp, def, atk
                    trustStats={[400, 40, 0]}

                    hpRange={[865, 1219, 1469, 1633]}
                    defRange={[94, 137, 172, 215]}
                    atkRange={[167, 274, 392, 490]}
                    resRange={[0, 0, 0]}
                    redeployRange={[70, 70, 70]}
                    blockRange={[1, 1, 1]}
                    costRange={[18, 20, 20]}
                    aspdRange={[2.85, 2.85, 2.85]}

                    maxRangeValues={[50, 80, 90]}

                    opRanges={[
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
                                   <tr><td className="center-tile" /><td /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td /><td /><td /><td /><td /></tr>
                                   <tr><td className="center-tile" /><td /><td /><td /><td /></tr>
                                   <tr><td /><td /><td /><td /><td /></tr>
                              </tbody>
                         </table>,
                    ]}

                    traitText={<p>Restores the HP of allies</p>}

                    talent1Title={<h2>Mon3tr</h2>}
                    talent2Title={<h2>Non-Damaging Restructuring</h2>}

                    talentWrapperVisibility={['flex', 'flex', 'flex']}
                    talent1Visibility={['flex', 'flex', 'flex']}
                    talent2Visibility={['none', 'none', 'flex']}

                    talent1Text={[
                         <p>Can use and heal Mon3tr, and Mon3tr has a 35 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>,
                         <p>Can use and heal Mon3tr, and Mon3tr has a 30 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>,
                         <p>Can use and heal Mon3tr, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>
                    ]}
                    talent2Text={[
                         <p></p>,
                         <p></p>,
                         <p>When Mon3tr is defeated (excluding retreat), all enemies in the surrounding 8 tiles are Stunned for 3 seconds and receive 1200 True damage</p>
                    ]}

                    potTalent1Text={[
                         <p>Can use and heal Mon3tr, and Mon3tr has a 35 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>,
                         <p>Can use and heal Mon3tr, and Mon3tr has a 30 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>,
                         <p>Can use and heal Mon3tr, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0</p>
                    ]}
                    potTalent2Text={[
                         <p></p>,
                         <p></p>,
                         <p>When Mon3tr is defeated (excluding retreat), all enemies in the surrounding 8 tiles are Stunned for 3.5 <span className="blueText">(+0.5)</span> seconds and receive 1400 <span className="blueText">(+200)</span> True damage</p>,
                    ]}

                    bskill1Title={'Unknown Technology'}
                    bskill2Title={'Highest Authority'}

                    bskill1img='bskills/bskill_ws_p5.png'
                    bskill2img='bskills/bskill_ctrl_p_spd.png'

                    bskillWrapperVisibility={['flex', 'flex', 'flex']}
                    bskill1Visibility={['flex', 'flex', 'flex']}
                    bskill2Visibility={['none', 'none', 'flex']}

                    bskill1Text={[
                         <p>When this Operator is assigned to a <span className="blueText">Workshop</span> to process <span className="blueText">any material</span>, the production rate of byproduct increases by <span className="blueText">70%</span></p>,
                         <p>When this Operator is assigned to a <span className="blueText">Workshop</span> to process <span className="blueText">any material</span>, the production rate of byproduct increases by <span className="blueText">70%</span></p>,
                         <p>When this Operator is assigned to a <span className="blueText">Workshop</span> to process <span className="blueText">any material</span>, the production rate of byproduct increases by <span className="blueText">70%</span></p>
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
                    rangeVisibility={['none', 'none', 'none']}

                    // use table tag to make range, s1, s2, s3 respectively
                    skillRanges={[
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                    ]}

                    // shows or hides addendum
                    addendumVisibility={['none', 'block', 'block']}

                    // enforces max value of range input, nescessary for specialization and stuff
                    maxInputRange='10'

                    skillNames={[
                         'Command: Structural Fortification',
                         'Command: Tactical Coordination',
                         'Command: Meltdown'
                    ]}
                    skillImages={[
                         'skills/skill_icon_skchr_kalts_1.png',
                         'skills/skill_icon_skchr_kalts_2.png',
                         'skills/skill_icon_skchr_kalts_3.png'
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
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+60%</span> DEF. Kal'tsit also gains <span className='blueText'>+20%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+70%</span> DEF. Kal'tsit also gains <span className='blueText'>+20%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+80%</span> DEF. Kal'tsit also gains <span className='blueText'>+20%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+90%</span> DEF. Kal'tsit also gains <span className='blueText'>+30%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+100%</span> DEF. Kal'tsit also gains <span className='blueText'>+30%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+110%</span> DEF. Kal'tsit also gains <span className='blueText'>+30%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+120%</span> DEF. Kal'tsit also gains <span className='blueText'>+40%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+130%</span> DEF. Kal'tsit also gains <span className='blueText'>+40%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+140%</span> DEF. Kal'tsit also gains <span className='blueText'>+40%</span> Physical resist</p>,
                         <p>Kal'tsit and Mon3tr gains <span className='blueText'>+150%</span> DEF. Kal'tsit also gains <span className='blueText'>+50%</span> Physical resist</p>,
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
                    skill1InitialSp={[0, 1, 2, 3, 4, 5, 6, 7, 8, 10]}
                    skill1SpCost={[30, 29, 28, 27, 26, 25, 24, 23, 22, 20]}
                    skill1Duration={[30, 31, 32, 33, 34, 35, 36, 37, 38, 40]}

                    // skill 2
                    skill2Content={[
                         <p>Kal'tsit gains <span className='blueText'>+30</span> ASPD; Mon3tr gains ATK <span className='blueText'>+20%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+35</span> ASPD; Mon3tr gains ATK <span className='blueText'>+25%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+40</span> ASPD; Mon3tr gains ATK <span className='blueText'>+30%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+45</span> ASPD; Mon3tr gains ATK <span className='blueText'>+35%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+50</span> ASPD; Mon3tr gains ATK <span className='blueText'>+40%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+55</span> ASPD; Mon3tr gains ATK <span className='blueText'>+45%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+60</span> ASPD; Mon3tr gains ATK <span className='blueText'>+50%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+70</span> ASPD; Mon3tr gains ATK <span className='blueText'>+60%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+80</span> ASPD; Mon3tr gains ATK <span className='blueText'>+75%</span> and attacks all blocked enemies</p>,
                         <p>Kal'tsit gains <span className='blueText'>+100</span> ASPD; Mon3tr gains ATK <span className='blueText'>+90%</span> and attacks all blocked enemies</p>
                    ]}
                    skill2Addendum={[
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>
                    ]}
                    skill2InitialSp={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill2SpCost={[14, 14, 14, 13, 13, 13, 12, 11, 10, 8]}
                    skill2Duration={[15, 15, 15, 16, 16, 16, 17, 18, 19, 20]}

                    // skill 3
                    skill3Content={[
                         <p>Mon3tr gains DEF <span className='blueText'>+100%</span>, ATK <span className='blueText'>+130%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+100%</span>, ATK <span className='blueText'>+140%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+100%</span>, ATK <span className='blueText'>+150%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+120%</span>, ATK <span className='blueText'>+160%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+120%</span>, ATK <span className='blueText'>+170%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+120%</span>, ATK <span className='blueText'>+180%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+140%</span>, ATK <span className='blueText'>+190%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+160%</span>, ATK <span className='blueText'>+210%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+180%</span>, ATK <span className='blueText'>+230%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                         <p>Mon3tr gains DEF <span className='blueText'>+200%</span>, ATK <span className='blueText'>+260%</span> that gradually decays to <span className='blueText'>+0%</span> over the skill duration and deals <span className='blueText'>True</span> damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses <span className='blueText'>50%</span> of Max HP</p>,
                    ]}
                    skill3Addendum={[
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>,
                         <p><span className='orangeText'>This skill is tied to Mon3tr</span></p>
                    ]}

                    skill3InitialSp={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
                    skill3SpCost={[25, 24, 23, 22, 21, 20, 19, 18, 17, 15]}
                    skill3Duration={[18, 18, 18, 18, 18, 18, 18, 18, 19, 20]}
               />
               <Modules display={modulesDisplay}

                    // hard code 5 max module, hopefully hg doesnt add more than that to a op
                    showModuleButtons={['flex', 'flex', 'none', 'none', 'none']}
                    moduleNames={['Mon2tr', 'Panacea', '', '', '']}
                    moduleCodes={['PHY-X', 'PHY-Y', '', '', '']}
                    moduleTypes={[
                         'url(uniequiptype/phy-x.png)',
                         'url(uniequiptype/phy-y.png)',
                         '',
                         '',
                         '',
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_kalts.png',
                         'uniequipimg/uniequip_003_kalts.png',
                         '',
                         '',
                         '',
                    ]}

                    traitContent={[
                         <p>Restores the HP of Allies <br/> When healing allied units with less than 50% HP, increases heal amount by <span className='blueText'>15%</span></p>,
                         <p>Restores the HP of Allies <br/> Healing increased by <span className='blueText'>15%</span> when healing a ground unit </p>,
                         '',
                         '',
                         ''
                    ]}
                    
                    // in order of the talent that is modified by the module 
                    // im banking on the hope that modules only change 1 talent and the trait stays constant through the 3 stages
                    talentNames={[
                         'Non-Damaging Structure',
                         'Mon3tr',
                         '',
                         '',
                         ''
                    ]}


                    // use none or block
                    moduleRangeVisibility={['none', 'none', 'none', 'none', 'none']}

                    moduleRange={[
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr></tr>
                              </tbody>
                         </table>
                    ]}

                    // module 1 stuff
                    module1StatVisibility={['flex', 'flex', 'none']}

                    module1StatLabels={[
                         'ATK', 'DEF', ''
                    ]}
                    module1Stat1Values={[
                         '+35', '+50', '+60'
                    ]}
                    module1Stat2Values={[
                         '+15', '+20', '+25'
                    ]}
                    module1Stat3Values={[
                         '', '', ''
                    ]}

                    module1TalentContent={[
                         <p>When Mon3tr is defeated (excluding retreat), all enemies in the surrounding 8 tiles are Stunned for 3 seconds and receive 1200 True damage <span className='orangeText'>(original)</span></p>,
                         <p>When Mon3tr is defeated (excluding retreat) or if its HP drops below 50% for the first time, all enemies in the surrounding 8 tiles are Stunned for 3 seconds and receive 1200 True damage </p>,
                         <p>When Mon3tr is defeated (excluding retreat) or if its HP drops below 50% for the first time, all enemies in the surrounding 8 tiles are Stunned for 3.5 seconds and receive 1500 True damage </p>
                    ]}

                    // module 2 stuff
                    module2StatVisibility={['flex', 'flex', 'none']}

                    module2StatLabels={[
                         'HP', 'ASPD', ''
                    ]}
                    module2Stat1Values={[
                         '+115', '+155', '+195'
                    ]}
                    module2Stat2Values={[
                         '+5', '+6', '+7'
                    ]}
                    module2Stat3Values={[
                         '', '', ''
                    ]}

                    module2TalentContent={[
                         <p>Can use and heal Mon3tr, and Mon3tr has a 35 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0 <span className='orangeText'>(original)</span></p>,
                         <p>Can use and heal Mon3tr, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; Mon3tr gains +12 ASPD and +15% DEF when in Kal'tsit's Attack Range; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0 </p>,
                         <p>Can use and heal Mon3tr, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; Mon3tr gains +20 ASPD and +20% DEF when in Kal'tsit's Attack Range; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0 </p>
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
                    buttonVisibility={['flex', 'flex']}

                    maxInputRanges={[50, 80, 90]}

                    summonName='Mon3tr'
                    positionType='Melee'
                    damageType='Physical'
                    summonImg='charavatars/token_10002_kalts_mon3tr.png'

                    summonRangeStat={[
                         <table>
                              <tbody>
                                   <tr><td className='center-tile' /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td className='center-tile' /><td /></tr>
                              </tbody>
                         </table>,
                         <table>
                              <tbody>
                                   <tr><td className='center-tile' /><td /></tr>
                              </tbody>
                         </table>
                    ]}

                    hpRange={[2510, 3347, 4292, 5433]}
                    defRange={[201, 272, 336, 405]}
                    atkRange={[545, 827, 1149, 1402]}
                    resRange={[0, 0, 0]}
                    redeployRange={[35, 30, 25]}
                    blockRange={[3, 3, 3]}
                    costRange={[10, 10, 10]}
                    aspdRange={[2, 2, 2]}

               />
               <Files display={filesDisplay}

                    filesDisplay ={[
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
                         "Kal'tsit",
                         'Female',
                         '3 Years',
                         'Rhodes Island',
                         'Undisclosed',
                         'Feline',
                         '169cm',
                         'Confirmed Infected by medical examination'
                    ]}

                    physicalExam={[
                         'Normal',
                         'Normal',
                         'Normal',
                         '■ ■',
                         'Normal',
                         'Standard'
                    ]}

                    profile={
                         <div className='files-wrapper'>
                              <p>
                                   Kal'tsit, one of Rhodes Island's high-level administrative crew, and leader to Rhodes Island's medical projects.
                                   Profoundly learned in metallurgy, sociology, Originium Arts, archaeology, history and genealogy, economics, botany, geology, and other fields.
                                   In a portion of Rhodes Island operations, provides medical theory assistance and emergency aid apparatus as medical personnel.
                                   Simultaneously, active in many projects as a major constituent of Rhodes Island's command system.
                              </p>
                         </div>
                    }

                    clinicalAnalysis={
                         <div className='files-wrapper'>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 25</p>
                              <br className='break-size' />
                              <p>'My diagnostic conclusions are left to my own judgment. Your attention should all be placed on other Infected in need of assistance.'</p>
                              <p>Kal'tsit told me this, but from the very first word, I was sure it was a throwaway line meant to throw me off.</p>
                              <p>
                                   Remember, there are some who require others to go and help them.
                                   Kal'tsit is the sort of person who doesn't care about herself;
                                   the reason she's still alive is because she's determined there are some things she has to accomplish before she dies.
                                   She's set her own baseline too low.
                              </p>
                              <p>
                                   Yes, yes, she's very strong.
                                   Everyone believes Kal'tsit deserves to speak for herself in their own specialties— those of us with years of work experience get that, we do.
                                   It's just that it's not specialist proposals some need... it's to relax a little.
                              </p>
                              <p>
                                   And some don't need others to extend a helping hand, but that's not to say they should be all alone instead.
                                   By help, I mean to tell them— there are others by their side.
                              </p>
                              <p>If you can see this message, that should mean you care about her very much.</p>
                              <p>So, keep it up. Fight on. Don't leave it all up to Closure to make a show.</p>
                              <p>Also, yeah, Kal'tsit really doesn't let people give her physical exams.</p>
                              <p>— Mysterious message that appeared at the analysis report's original address, signed by ■ ■ ■ of the HR Department.</p>
                         </div>
                    }

                    archiveFile1={
                         <div className='files-wrapper'>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 50</p>
                              <br className='break-size' />
                              <p>Columbia, a fresh name.</p>
                              <p>Victoria has already decided on retreating; you don't need to pay too close attention to this. The die is cast.</p>
                              <p>
                                   The duke of this frontier surely overestimated the accumulated worth of his fervent venture.
                                   When has Victoria ever concerned itself with the great nobles' personal interests?
                                   This is his stupidity; the other dukes would never run this sort of business in plain sight.
                              </p>
                              <p>He's been embroiled in disputes, assailed back and front. He hasn't even a chance.</p>
                              <p>
                                   In time, yes. Gaul has put considerable pressure on Victoria in this;
                                   the frontier duke's defeat in this conflict is precisely the machinations of Victoria's strange decision-making.
                                   Victoria has sent no assistance to him. Not even a single ship.
                              </p>
                              <p>Presumably, they're watching with folding arms, deliberately seeing him to his death. Victoria does not have just one mind.</p>
                              <p>
                                   But no matter what, Victoria will be too busy to concern itself with those cities stopped over in its northwest wastes;
                                   this conflict has facilitated the birth of this Columbia.
                              </p>
                              <p>An opportunity? Theresa... hm. Perhaps it is. The founding of a brand new country is always an opportunity.</p>
                              <p>But opportunity often signifies a source of ruin. The next calamity Kazdel faces may very well be brought about by it.</p>
                              <p>
                                   Don't joke with me. I wouldn't do such things now, I can promise you... wait, you're making fun out of me, aren't you?
                                   You know I'm no longer that sort of person.
                                   Besides, unlike in the past, annihilating a country now seems hardly a possible thing.
                              </p>
                              <p>
                                   Things change, and grasping a country is no longer simple— every person has, from the warmth of Originium engines, drawn their own notions.
                                   They have found their own persons, and no longer keep to their laissez-faire ways.
                              </p>
                              <p>Perhaps it's a good thing? Yes. If they can persevere.</p>
                              <p>Hardly anyone left could prevent Gaul's realization of hegemony, and Victoria has already lost several cities on end.</p>
                              <p>
                                   Unless those few empires could, in this interstice, relinquish their past hatred. Impossible. Madmen, lunatics, speculators and slaveowners?
                                   Hah. If they truly had such affinity...
                              </p>
                              <p>
                                   ...You have a point too. Whether they truly could find this chance, we can't say.
                                   After all, when have we ever dared to assert that we could see the future?
                              </p>
                         </div>
                    }

                    archiveFile2={
                         <div className='files-wrapper'>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 100</p>
                              <br className='break-size' />
                              <p>How could this happen—</p>
                              <p>How could this be?</p>
                              <p>
                                   Because of this defection, it's likely I'll be expelled from the university.
                                   But I already lack the time to attend to such things now.
                              </p>
                              <p>
                                   [ This is Kal'tsit, a Leithanian scholar sending out an emergency bulletin.
                                   If you receive this message, please pass this news on through the following channels to a Messenger.
                              </p>
                              <p>I won't hinder you from learning about this message's contents.</p>
                              <p>A major disaster has just occurred.</p>
                              <p>
                                   Presently, judging from bearing, the epicenter could only be in Iberia.
                                   All signals have been cut off, and even the electricity has vanished from my personal channel.
                              </p>
                              <p>
                                   There's been a great change in the clouds.
                                   The ocean's current?
                                   This couldn't have solely been the result of a current and storm.
                              </p>
                              <p>Not even for Iberia.</p>
                              <p>
                                   The Iberians don't have the capability to cause a disaster like this, and Ægir... Ægir's silence is a form of arrogance.
                                   This couldn't be the Ægir's doing either.
                              </p>
                              <p>
                                   My conjecture: The creatures we previously witnessed are not Ægir's experimental products.
                                   It's likely they signify the ocean's true present state.
                              </p>
                              <p>The data left behind by the islanders is a complete match to them; our sorrowing inferences have come true.</p>
                              <p>Iberia has sunk into quiet, as if the whole of the south has thus faded away.</p>
                              <p>
                                   If we wish to learn the concrete state of things, we can only wait for later signal from the Messengers.
                                   Presently, I can only prioritize informing you all of this conclusion.
                              </p>
                              <p>A coastal country has suffered the unexpected.</p>
                              <br className='break-size' />
                              <p>If Iberia has become the first sacrifice on the coast, then I fear the present state of Ægir itself... will only amplify in cruelty.</p>
                              <p>May you all be safe. ]</p>
                         </div>
                    }

                    archiveFile3={
                         <div className='files-wrapper'>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 150</p>
                              <br className='break-size' />
                              <p>The Lord of Fiends has died.</p>
                              <p>Babel has collapsed.</p>
                              <p>Do we, on all these ruins, intend to build a new Babel?</p>
                              <p>No... she wouldn't wish for that.</p>
                              <p>Am I able to decide... what we should do?</p>
                              <p>No, Ascalon, I have no right to decide.</p>
                              <p>I'm not your leader. I don't have the qualification.</p>
                              <p>
                                   Let alone that Babel's cause is rendered unable to continue.
                                   If even Theresa would fail, then who could succeed?
                              </p>
                              <p>
                                   Kazdel wouldn't be destroyed by this, and yet our mission perished too as Babel collapsed.
                                   We've lost the strength to unite Sarkaz.
                              </p>
                              <p>So, we... could not simply serve the Sarkaz again.</p>
                              <p>No. Theresa knows. Theresa always knew. It was Theresa who gave me such instruction.</p>
                              <p>
                                   Moreover, she believes this hasn't meant our failure.
                                   She believes Babel's mission has already come to a close.
                              </p>
                              <p>......</p>
                              <p>I understand.</p>
                              <p>Soon, we'll leave Kazdel. Some people won't accept this decision; let them go.</p>
                              <p>
                                   Hardly everyone is like Theresa, able to genuinely leave Kazdel.
                                   'An ideology needs soil,' and a seed does not necessarily need to sprout in its homeland.
                              </p>
                              <p>Yes... Oripathy... the problem of treating and managing Oripathy.</p>
                              <p>
                                   Sarkaz suffer it in great measure.
                                   Oripathy is one of the major factors Sarkaz are currently met with.
                              </p>
                              <p>Correct.</p>
                              <p>It's not Sarkaz alone.</p>
                              <p>Just as Theresa said at the very beginning, the problems of the Sarkaz have never been the Sarkaz's alone.</p>
                              <p>
                                   This concern was one of the many means we labeled 'unrealistic' at the time.
                                   Nowadays, a means can become a goal too.
                              </p>
                              <p>Oripathy, as well as the terrifying prejudice it brings about, require treatment.</p>
                              <p>
                                   This will be our new concern.
                                   Not only because all present suffer Oripathy's torment, but also because an ideology,
                                   one that drives away prejudice... is a thing that needs soil.
                              </p>
                              <p>Terminal?</p>
                              <p>
                                   ...No, I don't believe so. Terminal... it can definitely be cured.
                                   Terminal illnesses are simply waiting for the day they can be cured to come.
                                   I will prove... that on this lone point, she is wrong.
                              </p>
                              <p>We will soon conduct a first round of voting on this concern.</p>
                              <p>— Amiya?</p>
                              <p>I will raise her.</p>
                         </div>
                    }

                    archiveFile4={
                         <div className='files-wrapper'>
                              <p style={{ fontStyle: 'italic' }}>Raise Trust to 200</p>
                              <br className='break-size' />
                              <p>
                                   C'mon, how have things gone critical again?
                                   Here I thought that engineering thing came back for another bite...
                                   didn't I tweak the new facial recognition warning system to treat Castle-3's new paint job as an intruder?
                              </p>
                              <p>
                                   ...Oh, don't tell me it was the thing where the ground level boiler had its output reworked too high and made all the pipes flow backwards?
                                   Nah, couldn't be... is she gonna catch me for this again?
                              </p>
                              <p>Heck no, if things are serious this time, my funds are as good as dead.</p>
                              <p>Wait, no way... no... am I even still useful to Rhodes Island?</p>
                              <p>K— Kal'tsit? Don't spook me like this, Kal'tsit, I... I don't have that much meat on me, y'know— Kal'tsit?</p>
                              <p>How come she's not in... this monitor's way too old, jeez. I gotta get her a new one.</p>
                              <p>No, wait, what is th—863-879? 622-690? What?</p>
                              <p>Hold on... Personal records?</p>
                              <p>Kal'tsit?! Kal'tsit!</p>
                              <p>
                                   Ugh, what does 'You already have full privileges' mean?
                                   I haven't even hacked in yet, y'know?
                              </p>
                              <p>PRTS? You there? Can you answer me something?</p>
                              <p>Hold up, this database system is isolated... there are systems disconnected from PRTS on this ship?</p>
                              <p>Waitwaitwait.</p>
                              <p>This Rhodes Island structural diagram isn't right, is it? Where'd this vacant bit up here come from?</p>
                              <p>'Theoretical design of third-generation prophylaxis'... huh? Do we have a centrifuge of this grade anywhere?</p>
                              <p>— 'Overall impact of Originium on species and forms of life'?</p>
                              <p>Kal'tsit??</p>
                         </div>
                    }

                    promotionRecord={
                         <div className='files-wrapper'>
                              <p style={{ fontStyle: 'italic' }}>Promote Kal'tsit to Elite 2</p>
                              <br className='break-size' />
                              <p>Kal'tsit:</p>
                              <p>The moment you read this, the ending act must already be played.</p>
                              <p>
                                   It only took a moment before I thought to hide this letter in your office desk.
                                   If you were not sitting down to reminisce in peace, I'm sure you wouldn't find this letter.
                              </p>
                              <p>These words are written for the you in times like this.</p>
                              <p>...Do you still remember all those theories you taught me? I always remembered.</p>
                              <p>You said the earth we knew was but a layer of mud, littering upon a celestial orb.</p>
                              <p>You said our different forms were not created so, we crawled, long before we learned to walk.</p>
                              <p>You said the stars beyond skyveil are arks sailing through the stellar lane...</p>
                              <p>The wonderous things you said... Kal'tsit, I remembered. I remembered them all.</p>
                              <br className='break-size' />
                              <p>
                                   You once said, more than seeking sense in our action, you wanted to learn of the answer to yourself;
                                   and for so many times you asked, of those I have committed to this landship,
                                   of the reason I commit this very much into it.
                              </p>
                              <p>I feel the answer is very childlike, so I never directly responded to your question.</p>
                              <p>...Kal'tsit, I sense your loneliness. Because you feel you have none of the same kind.</p>
                              <p>
                                   Kal'tsit, you shall have my answer at very last:
                                   I hope the Rhodes can be a place you name home: an Island you may always return to.
                              </p>
                              <p>Once I thought too, to witness such future with my own eyes alongside you.</p>
                              <p>
                                   But yet, there is no antidote to loneliness, there is no end to nomadic wandering,
                                   there is no cure to a terminal illness...
                              </p>
                              <p>I already did everything I could do. I won't harbor complaint for my own end.</p>
                              <p>Babel's mission is concluded, and you and this landship have only just set sail.</p>
                              <p>
                                   Now go, unto your initial grand quest.
                                   Through the grim perils of the longest night, Rhodes Island shall breach into the promised dawn.
                              </p>
                              <p>That future which sails on the tender earth, it belongs to you all.</p>
                              <br className='break-size' />
                              <p>I am not a same kind as you, Kal'tsit. I cannot explain away your puzzlement.</p>
                              <p>— But I have always been your companion. And still I will be.</p>
                              <br className='break-size' />
                              <p>[Unsigned.]</p>
                              <br className='break-size' />
                              <p>Her Majesty once said it was Dr. Kal'tsit who directed the main cabin's follow-up excavation.</p>
                              <p>
                                   Nowadays, occasionally you'll see Kal'tsit hurrying past along the aisle, then stop out of nowhere,
                                   and trace her hand across the surface of the wall.
                              </p>
                              <p>I wonder just what this landship means to Kal'tsit?</p>
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
                         <p>
                              Doctor, please sit. I'm just here to give you a physical examination, so relax.
                              If there are any irregularities, please tell me in full.
                              Meaning? We'll set aside what it means to Rhodes Island for now.
                              To me, the meaning it holds is quite significant.
                         </p>
                    }

                    talk1={
                         <p>
                              I will conduct scientific examinations on you at regular intervals,
                              recording your vital signs and state of consciousness.
                              No other personnel have this authority.
                              If anyone wishes to conduct an examination on you, you have the right to refuse.
                              Do you understand?
                         </p>
                    }

                    talk2={
                         <p>
                              Medical is the core Department of Rhodes Island.
                              Theoretical research and practical treatment both require medical talent,
                              and the need for medical staff on field missions is always growing.
                              Please remember that in the time to come, you will need to recruit
                              ever more Medic Operators.
                         </p>
                    }

                    talk3={
                         <p>
                              I'm sure, on a daily basis, you interact with many Operators.
                              When you converse with them, you must be alert for any speech that attempts to influence your will.
                              Remember to preserve your ego; at necessary times, I suggest you seek my help.
                              Of course, for you... I should be unnecessary, shouldn't I?
                         </p>
                    }

                    talkAfterPromotion1={
                         <p>
                              Amiya has left to eat with the young Operators.
                              She is a child too, and you should accompany her well.
                              These lands has no mercy on the basis of age, but children will always be our unvarying hope.
                              I very much admire this notion of... a certain someone's.
                         </p>
                    }

                    talkAfterPromotion2={
                         <p>
                              Doctor, do you ever doubt the meaning in your own existence? I do.
                              Life upon these lands is tremendously tenacious.
                              It evolves to suit a unique niche, often finding nurtured tameness and confrontation futile.
                              What is our destination, Doctor? I believe you will find an answer.
                              I can only persevere in that belief.
                         </p>
                    }

                    talkAfterTrustIncrease1={
                         <p>
                              Don't spare too much worry for me.
                              Rhodes Island shouldn't be so fragile that one person's departure would leave it unable to proceed on.
                              What is it? No, it's only a slightly hyperbolic supposition.
                              No matter what, I thank you for your concern, Doctor. But more than myself, I am concerned for you.
                         </p>
                    }

                    talkAfterTrustIncrease2={
                         <p>
                              The path along which Amiya grew into Rhodes Island's leader was considerably troubled, and the sacrifices we've made bear testimony to that.
                              From the faintest glimpse you caught in that stretch of the past, you may gradually come to understand the meaning of it all.
                              You can make your own choices, Doctor... someone once told me that.
                         </p>
                    }

                    talkAfterTrustIncrease3={
                         <p>
                              My hope? It is to protect yours and Amiya's hopes, Doctor.
                              Though our definitions of 'protect' have nothing in common, it's an oath I will never abandon.
                              I will be standing here with you, until the very end.
                              We are unable to forget the past, but a different future may await you.
                         </p>
                    }

                    idle={
                         <p>Are you awake, or still in a dream?</p>
                    }

                    onboard={
                         <p>
                              Doctor, my appearance here indicates that the situation has turned for the worse.
                              You must concentrate on continuing to accomplish your mission.
                         </p>
                    }

                    watchingBattleRecord={
                         <p>Not bad.</p>
                    }

                    promotion1={
                         <p>With strength comes fragility. Such is the principle of all living things.</p>
                    }

                    promotion2={
                         <p>Mon3tr and I will protect everyone. Especially you, Doctor.</p>
                    }

                    addedToSquad={
                         <p>I will see to them.</p>
                    }

                    appointedAsSquadLeader={
                         <p>Now you need only devote yourself to operation planning.</p>
                    }

                    depart={
                         <p>Let's go.</p>
                    }

                    beginOperation={
                         <p>You know the plan. Move to intercept.</p>
                    }

                    selectingOperator1={
                         <p>What's the situation?</p>
                    }

                    selectingOperator2={
                         <p>Optimize your deployment.</p>
                    }

                    deployment1={
                         <p>Arrived at designated position.</p>
                    }

                    deployment2={
                         <p>Mon3tr, with me.</p>
                    }

                    inBattle1={
                         <p>Mon3tr.</p>
                    }

                    inBattle2={
                         <p>Perform your task.</p>
                    }

                    inBattle3={
                         <p>Awake.</p>
                    }

                    inBattle4={
                         <p>Go ahead.</p>
                    }

                    fourStarResult={
                         <p>Make sure a video record of this battle is properly cataloged.</p>
                    }

                    threeStarResult={
                         <p>Mon3tr, collect tissue samples.</p>
                    }

                    subThreeStarResult={
                         <p>Assess the risk coefficient of those fleeing, as well as the possibility of a reprisal attack by enemy forces.</p>
                    }

                    operationFailure={
                         <p>Secure evac route. Prepare to operate!</p>
                    }

                    assignedToFacility={
                         <p>How is the infrastructure project here developing?</p>
                    }

                    tap={
                         <p>What are you doing?</p>
                    }

                    trustTap={
                         <p>You seem to have grown used to your own work and responsibility. You've become much like a leader.</p>
                    }

                    title={
                         <p>Arknights.</p>
                    }

                    greeting={
                         <p>Doctor.</p>
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
                         'Remnant',
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
                              <p>
                                   Custom-made to suit each Operator's experiences and needs,
                                   these outfits are designed to provide them maximum flexibility on any battlefield.
                                   Furthermore, this is all done without compromising the comfort that they've come to expect.
                              </p>
                         </div>,
                         <div className='outfits-description'>
                              <p>Bloodline of Combat Collection / Remnant.</p>
                              <p>
                                   Originium has taken over the land, and what she envisioned has become a reality.
                                   She has enumerated and entrusted everything else to the others,
                                   leaving only her name as she hones her mission into a sharp blade.
                              </p>
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
                         'characters/char_003_kalts/char_003_kalts_1b.png',
                         'characters/char_003_kalts/char_003_kalts_1b.png',
                         'characters/char_003_kalts/char_003_kalts_2b.png',
                         'characters/char_003_kalts/char_003_kalts_boc_6b.png',
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
                                   itemUrl="url('icons/MTL_ASC_MED1.png')"
                                   itemAmount='x5'
                                   itemDesc='Medic Chip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG2.png')"
                                   itemAmount='x8'
                                   itemDesc='Sugar' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE2.png')"
                                   itemAmount='x5'
                                   itemDesc='Polyketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x180,000'
                                   itemDesc='LMD' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_ASC_MED3.png')"
                                   itemAmount='x4'
                                   itemDesc='Medic Dualchip' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OEU.png')"
                                   itemAmount='x4'
                                   itemDesc='Crystalline Electronic Unit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x4'
                                   itemDesc='Optimized Device' />
                         </div>
                    ]}

                    // skill stuff
                    skillVisibility='flex'

                    skillImages={[
                         'skills/skill_icon_skchr_kalts_1.png',
                         'skills/skill_icon_skchr_kalts_2.png',
                         'skills/skill_icon_skchr_kalts_3.png'
                    ]}

                    skillNames={[
                         'Command: Structural Fortification',
                         'Command: Tactical Coordination',
                         'Command: Meltdown'
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
                                   itemUrl="url('icons/MTL_SL_BOSS1.png')"
                                   itemAmount='x4'
                                   itemDesc='Damaged Device' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-1-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RUSH1.png')"
                                   itemAmount='x4'
                                   itemDesc='Ester' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_G2.png')"
                                   itemAmount='x7'
                                   itemDesc='Orirock Cube' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL2.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 2' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-2-bg.png')"
                                   itemUrl="url('icons/MTL_SL_STRG2.png')"
                                   itemAmount='x4'
                                   itemDesc='Sugar' />
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
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x6'
                                   itemDesc='Oriron Cluster' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x8'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE3.png')"
                                   itemAmount='x3'
                                   itemDesc='Aketon' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL1.png')"
                                   itemAmount='x6'
                                   itemDesc='Loxic Kohl' />
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
                                   itemUrl="url('icons/MTL_SL_KETONE4.png')"
                                   itemAmount='x4'
                                   itemDesc='Keton Colloid' />
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
                                   itemAmount='x12'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PG2.png')"
                                   itemAmount='x4'
                                   itemDesc='Grindstone Pentahydrate' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x9'
                                   itemDesc='White Horse Kohl' />
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
                                   itemUrl="url('icons/MTL_SL_IRON4.png')"
                                   itemAmount='x5'
                                   itemDesc='Oriron Block' />
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
                                   itemUrl="url('icons/MTL_SL_BOSS4.png')"
                                   itemAmount='x3'
                                   itemDesc='Optimized Device' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_IRON3.png')"
                                   itemAmount='x4'
                                   itemDesc='Orirock Cluster' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x12'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_RMA7024.png')"
                                   itemAmount='x4'
                                   itemDesc='RMA70-24' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_MANGANESE2.png')"
                                   itemAmount='x9'
                                   itemDesc='Manganese Trihydrate' />
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
                                   itemUrl="url('icons/MTL_SL_KETONE4.png')"
                                   itemAmount='x5'
                                   itemDesc='Keton Colloid' />
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
                                   itemUrl="url('icons/MTL_SL_ALCOHOL2.png')"
                                   itemAmount='x4'
                                   itemDesc='White Horse Kohl' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-3-bg.png')"
                                   itemUrl="url('icons/MTL_SL_KETONE3.png')"
                                   itemAmount='x8'
                                   itemDesc='Aketon' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SKILL3.png')"
                                   itemAmount='x12'
                                   itemDesc='Skill Summary 3' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OC4.png')"
                                   itemAmount='x4'
                                   itemDesc='Crystalline Circuit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PGEL4.png')"
                                   itemAmount='x8'
                                   itemDesc='Polymerized Gel' />
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
                                   itemUrl="url('icons/MTL_SL_PG2.png')"
                                   itemAmount='x4'
                                   itemDesc='Grindstone Pentahydrate' />
                         </div>
                    ]}

                    //module stuff

                    moduleVisibility={[
                         'flex',
                         'flex',
                         'none',
                         'none',
                         'none'
                    ]}
                    moduleImages={[
                         'uniequipimg/uniequip_002_kalts.png',
                         'uniequipimg/uniequip_003_kalts.png',
                         '',
                         '',
                         '',
                    ]}

                    moduleNames={[
                         'Mon2tr',
                         'Panacea',
                         '',
                         '',
                         ''
                    ]}
                    moduleCodes={[
                         'PHY-X',
                         'PHY-Y',
                         '',
                         '',
                         ''
                    ]}


                    //module 1
                    module1Missions={[
                         'Deal a total of 150,000 damage with Kal\'tsit (excluding support units)',
                         'Clear Main Theme 5-10 with a 3-star rating; You must deploy your own Kal\'tsit, and use Command: Meltdown 4 times'
                    ]}

                    module1Requirements={[
                         'Raise Kal\'tsit to Elite 2 Lv60',
                         'Raise Kal\'tsit\'s trust to 50',
                         'Raise Kal\'tsit\'s trust to 100'
                    ]}
                    module1Resources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x4'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_DS.png')"
                                   itemAmount='x2'
                                   itemDesc='D32 Steel' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x80,000'
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
                                   itemAmount='x4'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/mod_update_token_1.png')"
                                   itemAmount='x60'
                                   itemDesc='Data Supplement Stick' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OEU.png')"
                                   itemAmount='x3'
                                   itemDesc='Crystalline Electronic Unit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x100,000'
                                   itemDesc='LMD' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x4'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_2.png')"
                                   itemAmount='x20'
                                   itemDesc='Data Supplement Instrument' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PP.png')"
                                   itemAmount='x4'
                                   itemDesc='Polymerization Preparation' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x120,000'
                                   itemDesc='LMD' />
                         </div>
                    ]}

                    // module 2
                    module2Missions={[
                         'During battles, have Kal\'tsit use Command: Meltdown a total of 10 times (excluding support units)',
                         'Clear Main Theme 5-10 with a 3-star rating; You must deploy your own Kal\'tsit, and have Kal\'tsit defeat Mephisto'
                    ]}

                    module2Requirements={[
                         'Raise Kal\'tsit to Elite 2 Lv60',
                         'Raise Kal\'tsit\'s trust to 50',
                         'Raise Kal\'tsit\'s trust to 100'
                    ]}

                    module2Resources={[
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x4'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_OEU.png')"
                                   itemAmount='x2'
                                   itemDesc='Crystalline Electronic Unit' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x80,000'
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
                                   itemAmount='x4'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/mod_update_token_1.png')"
                                   itemAmount='x60'
                                   itemDesc='Data Supplement Stick' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_PP.png')"
                                   itemAmount='x3'
                                   itemDesc='Polymerization Preparation' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x100,000'
                                   itemDesc='LMD' />
                         </div>,
                         <div className="item-display-wrapper">
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_3.png')"
                                   itemAmount='x4'
                                   itemDesc='Module Data Block' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/mod_update_token_2.png')"
                                   itemAmount='x20'
                                   itemDesc='Data Supplement Instrument' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-5-bg.png')"
                                   itemUrl="url('icons/MTL_SL_BN.png')"
                                   itemAmount='x4'
                                   itemDesc='Bipolar Nanoflake' />
                              <ItemContainer
                                   itemBgUrl="url('icons/item-4-bg.png')"
                                   itemUrl="url('icons/GOLD.png')"
                                   itemAmount='x120,000'
                                   itemDesc='LMD' />
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