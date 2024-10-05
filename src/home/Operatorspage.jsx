import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx'
import { data } from '../components/OperatorData.jsx'
import Starsvg from '../components/svg/starsvg.jsx'
import Arrowsvg from '../components/svg/Arrowsvg.jsx'

function Operators(props) {

     const [backendFilters, setBackendFilters] = useState([])

     var orderedDataList = data.sort((a, b) => {
          if (a.mainClass < b.mainClass) return -1;
          if (a.mainClass > b.mainClass) return 1;
          if (a.stars < b.stars) return 1;
          if (a.stars > b.stars) return -1;
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
     });

     const [selectedFilters, setSelectedFilters] = useState([]);
     const [filteredItems, setFilteredItems] = useState(orderedDataList);

     // click function
     const handleFilterChange = (selectedSubclass) => {
          if (selectedFilters.includes(selectedSubclass)) {

               //removes filter if it is already in the filter list
               let excludeFilter = selectedFilters.filter(filter => filter !== selectedSubclass)
               setSelectedFilters(excludeFilter);

               excludeFilter = backendFilters.filter(filter => filter !== selectedSubclass)
               setBackendFilters(excludeFilter);
          }
          else {

               //adds filter if it isnt in the filter list
               setSelectedFilters([...selectedFilters, selectedSubclass]);
               setBackendFilters([...backendFilters, selectedSubclass])
          };
          document.getElementById(selectedSubclass).classList.toggle('active-button')
     };


     // runs once selectedFilters has been updated
     useEffect(() => {
          filterItems()
     }, [selectedFilters])

     // makes the filtered list
     const filterItems = () => {
          if (selectedFilters.length > 0) {
               // selectedFilters.map runs the filtering through each active subclass filter
               // for each filter, temp variable finds the entries with the corresponding classes
               // flat() joins the arrays together in tempData variable
               let tempData = selectedFilters.map((selectedSubclass) => {
                    let temp = data.filter((entry) => entry.subclass === selectedSubclass);
                    return temp;
               });
               tempData = tempData.flat();
               if (starFilter.length > 0) {
                    starFilter.forEach(starvalue => {
                         tempData = tempData.filter(matchStar => matchStar.stars === starvalue);
                    });
               }
               if (limitedFilter === true) {
                    tempData = tempData.filter(matchLimited => matchLimited.limited === true);
               }
               tempData = tempData.sort((a, b) => {
                    if (a.mainClass < b.mainClass) return -1;
                    if (a.mainClass > b.mainClass) return 1;
                    if (a.stars < b.stars) return 1;
                    if (a.stars > b.stars) return -1;
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
               });
               setFilteredItems(tempData);
          }
          else {
               let tempData = orderedDataList;
               if (starFilter.length > 0) {
                    tempData = starFilter.map((starvalue) => {
                         let temp = orderedDataList.filter(matchStar => matchStar.stars === starvalue);
                         return temp
                    });
               }
               tempData = tempData.flat();
               if (limitedFilter === true) {
                    tempData = tempData.filter(matchLimited => matchLimited.limited === true);
               }
               tempData = tempData.sort((a, b) => {
                    if (a.mainClass < b.mainClass) return -1;
                    if (a.mainClass > b.mainClass) return 1;
                    if (a.stars < b.stars) return 1;
                    if (a.stars > b.stars) return -1;
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
               });
               setFilteredItems(tempData);
          }
     }

     const handleBatchFilter = (subclassList) => {
          let trueCounter = 0;
          let excludeBatchFilter = selectedFilters;
          let excludeBatchFilter2 = backendFilters;

          subclassList.forEach(subclass => {
               if (backendFilters.includes(subclass)) {
                    trueCounter = trueCounter + 1;
               }
               excludeBatchFilter = excludeBatchFilter.filter(entry => entry !== subclass)
               excludeBatchFilter2 = excludeBatchFilter2.filter(entry => entry !== subclass)
               document.getElementById(subclass).classList.remove('active-button')
          });

          if (trueCounter !== subclassList.length) {
               // removes all subclasses if all subclasses are selected by user 
               subclassList.forEach(subclass => {
                    excludeBatchFilter.push(subclass);
                    excludeBatchFilter2.push(subclass);
                    document.getElementById(subclass).classList.add('active-button')
               });
          }
          setSelectedFilters(excludeBatchFilter);
          setBackendFilters(excludeBatchFilter2);
     }

     // star filter stuff
     const [starFilter, setStarFilter] = useState([])

     const filterStars = (starvalue, listid) => {
          if (starFilter.includes(starvalue)) {
               let tempList = starFilter.filter(excludestar => excludestar !== starvalue);
               setStarFilter(tempList);
               document.getElementById(listid).classList.remove('active-button')
          }
          else {
               setStarFilter([...starFilter, starvalue])
               document.getElementById(listid).classList.add('active-button')
          }
     }

     // limited filter stuff
     const [limitedFilter, setLimitedFilter] = useState(false)

     const filterLimited = (listid) => {
          setLimitedFilter(limitedFilter => !limitedFilter)
          document.getElementById(listid).classList.toggle('active-button')
     }

     useEffect(() => {
          filterItems()
          console.log(starFilter)
     }, [starFilter, limitedFilter])

     // true = open, false = closed
     const [filterVisiblility, setFilterVisibility] = useState(false);
     const [gridFr, setGridFr] = useState('0fr')
     
     const toggleFilter = () => {
          setFilterVisibility(!filterVisiblility);
     }
     useEffect(() => {
          if (filterVisiblility === true) {
               setGridFr('1fr')
               document.getElementById('filter-button').classList.add('active-button');
               document.getElementById('filter-button-arrow').classList.add('toggle-filter-button-arrow');
          }
          else {
               setGridFr('0fr')
               document.getElementById('filter-button').classList.remove('active-button')
               document.getElementById('filter-button-arrow').classList.remove('toggle-filter-button-arrow')
          }
     }, [filterVisiblility])


     return (
          <div className='operators-page-container'>
               <div id='filter-button' onClick={() => toggleFilter()}>
                    <h2>Filters</h2>
                    <div id='filter-button-arrow'>
                        <Arrowsvg /> 
                    </div>
               </div>
               <div className='filter-grid' style={{gridTemplateRows: gridFr}}>
                    <div className='filter-wrapper'>
                         <ul className='other-filter'>
                              <li id='1star-button' onClick={() => filterStars(1, '1star-button')}>
                                   <p>1</p>
                                   <Starsvg />
                              </li>
                              <li id='2star-button' onClick={() => filterStars(2, '2star-button')}>
                                   <p>2</p>
                                   <Starsvg />
                              </li>
                              <li id='3star-button' onClick={() => filterStars(3, '3star-button')}>
                                   <p>3</p>
                                   <Starsvg />
                              </li>
                              <li id='4star-button' onClick={() => filterStars(4, '4star-button')}>
                                   <p>4</p>
                                   <Starsvg />
                              </li>
                              <li id='5star-button' onClick={() => filterStars(5, '5star-button')}>
                                   <p>5</p>
                                   <Starsvg />
                              </li>
                              <li id='6star-button' onClick={() => filterStars(6, '6star-button')}>
                                   <p>6</p>
                                   <Starsvg />
                              </li>
                              <li id='limitedFilter' onClick={() => filterLimited('limitedFilter')}><p>Limited</p></li>
                         </ul>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['PioneerVanguard', 'ChargerVanguard', 'FlagbearerVanguard', 'TacticianVanguard', 'AgentVanguard'])}>VANGUARD</h2>
                              <ul className="subclass-container">
                                   <li id="PioneerVanguard" onClick={() => handleFilterChange('PioneerVanguard')}>
                                        <span style={{ backgroundImage: "url('subclasses/vanguard-pioneer.png')" }} />
                                        Pioneer
                                   </li>
                                   <li id="ChargerVanguard" onClick={() => handleFilterChange('ChargerVanguard')}>
                                        <span style={{ backgroundImage: "url('subclasses/vanguard-charger.png')" }} />
                                        Charger
                                   </li>
                                   <li id="FlagbearerVanguard" onClick={() => handleFilterChange('FlagbearerVanguard')}>
                                        <span style={{ backgroundImage: "url(subclasses/vanguard-flagbearer.png)" }} />
                                        Flagbearer
                                   </li>
                                   <li id="TacticianVanguard" onClick={() => handleFilterChange('TacticianVanguard')}>
                                        <span style={{ backgroundImage: "url('subclasses/vanguard-tactician.png')" }} />
                                        Tactician
                                   </li>
                                   <li id="AgentVanguard" onClick={() => handleFilterChange('AgentVanguard')}>
                                        <span style={{ backgroundImage: "url('subclasses/vanguard-agent.png')" }} />
                                        Agent
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['DreadnoughtGuard', 'CenturionGuard', 'LordGuard', 'ArtsFighterGuard', 'InstructorGuard', 'FighterGuard', 'SwordmasterGuard', 'SolobladeGuard', 'LiberatorGuard', 'ReaperGuard', 'CrusherGuard', 'EarthshakerGuard'])}>GUARD</h2>
                              <ul className="subclass-container">
                                   <li id="DreadnoughtGuard" onClick={() => handleFilterChange('DreadnoughtGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-dreadnought.png')" }} />
                                        Dreadnought
                                   </li>
                                   <li id="CenturionGuard" onClick={() => handleFilterChange('CenturionGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-centurion.png')" }} />
                                        Centurion
                                   </li>
                                   <li id="LordGuard" onClick={() => handleFilterChange('LordGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-lord.png')" }} />
                                        Lord
                                   </li>
                                   <li id="ArtsFighterGuard" onClick={() => handleFilterChange('ArtsFighterGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-arts-fighter.png')" }} />
                                        Arts Fighter
                                   </li>
                                   <li id="InstructorGuard" onClick={() => handleFilterChange('InstructorGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-instructor.png')" }} />
                                        Instructor
                                   </li>
                                   <li id="FighterGuard" onClick={() => handleFilterChange('FighterGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-fighter.png')" }} />
                                        Fighter
                                   </li>
                                   <li id="SwordmasterGuard" onClick={() => handleFilterChange('SwordmasterGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-swordmaster.png')" }} />
                                        Swordmaster
                                   </li>
                                   <li id="SolobladeGuard" onClick={() => handleFilterChange('SolobladeGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-soloblade.png')" }} />
                                        Soloblade
                                   </li>
                                   <li id="LiberatorGuard" onClick={() => handleFilterChange('LiberatorGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-liberator.png')" }} />
                                        Liberator
                                   </li>
                                   <li id="ReaperGuard" onClick={() => handleFilterChange('ReaperGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-reaper.png')" }} />
                                        Reaper
                                   </li>
                                   <li id="CrusherGuard" onClick={() => handleFilterChange('CrusherGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-crusher.png')" }} />
                                        Crusher
                                   </li>
                                   <li id="EarthshakerGuard" onClick={() => handleFilterChange('EarthshakerGuard')}>
                                        <span style={{ backgroundImage: "url('subclasses/guard-earthshaker.png')" }} />
                                        Earthshaker
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['ProtectorDefender', 'GuardianDefender', 'JuggernautDefender', 'ArtsProtectorDefender', 'DuelistDefender', 'FortressDefender', 'SentinelProtectorDefender'])}>DEFENDER</h2>
                              <ul className="subclass-container">
                                   <li id="ProtectorDefender" onClick={() => handleFilterChange('ProtectorDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-protector.png')" }} />
                                        Protector
                                   </li>
                                   <li id="GuardianDefender" onClick={() => handleFilterChange('GuardianDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-guardian.png')" }} />
                                        Guardian
                                   </li>
                                   <li id="JuggernautDefender" onClick={() => handleFilterChange('JuggernautDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-juggernaut.png')" }} />
                                        Juggernaut
                                   </li>
                                   <li id="ArtsProtectorDefender" onClick={() => handleFilterChange('ArtsProtectorDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-arts-protector.png')" }} />
                                        Arts Protector
                                   </li>
                                   <li id="DuelistDefender" onClick={() => handleFilterChange('DuelistDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-duelist.png')" }} />
                                        Duelist
                                   </li>
                                   <li id="FortressDefender" onClick={() => handleFilterChange('FortressDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-fortress.png')" }} />
                                        Fortress
                                   </li>
                                   <li id="SentinelProtectorDefender" onClick={() => handleFilterChange('SentinelProtectorDefender')}>
                                        <span style={{ backgroundImage: "url('subclasses/defender-sentinel-protector.png')" }} />
                                        Sentinel Protector
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['MarksmanSniper', 'ArtillerymanSniper', 'DeadeyeSniper', 'HeavyshooterSniper', 'SpreadshooterSniper', 'BesiegerSniper', 'FlingerSniper', 'HunterSniper', 'LoopshooterSniper'])}>SNIPER</h2>
                              <ul className="subclass-container">
                                   <li id="MarksmanSniper" onClick={() => handleFilterChange('MarksmanSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-marksman.png')" }} />
                                        Marksman
                                   </li>
                                   <li id="ArtillerymanSniper" onClick={() => handleFilterChange('ArtillerymanSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-artilleryman.png')" }} />
                                        Artilleryman
                                   </li>
                                   <li id="DeadeyeSniper" onClick={() => handleFilterChange('DeadeyeSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-deadeye.png')" }} />
                                        Deadeye
                                   </li>
                                   <li id="HeavyshooterSniper" onClick={() => handleFilterChange('HeavyshooterSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-heavyshooter.png')" }} />
                                        Heavyshooter
                                   </li>
                                   <li id="SpreadshooterSniper" onClick={() => handleFilterChange('SpreadshooterSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-spreadshooter.png')" }} />
                                        Spreadshooter
                                   </li>
                                   <li id="BesiegerSniper" onClick={() => handleFilterChange('BesiegerSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-besieger.png')" }} />
                                        Besieger
                                   </li>
                                   <li id="FlingerSniper" onClick={() => handleFilterChange('FlingerSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-flinger.png')" }} />
                                        Flinger
                                   </li>
                                   <li id="HunterSniper" onClick={() => handleFilterChange('HunterSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-hunter.png')" }} />
                                        Hunter
                                   </li>
                                   <li id="LoopshooterSniper" onClick={() => handleFilterChange('LoopshooterSniper')}>
                                        <span style={{ backgroundImage: "url('subclasses/sniper-loopshooter.png')" }} />
                                        Loopshooter
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['CoreCaster', 'SplashCaster', 'BlastCaster', 'ChainCaster', 'MechAccordCaster', 'PhalanxCaster', 'MysticCaster', 'PrimalCaster'])}>CASTER</h2>
                              <ul className="subclass-container">
                                   <li id="CoreCaster" onClick={() => handleFilterChange('CoreCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-core.png')" }} />
                                        Core
                                   </li>
                                   <li id="SplashCaster" onClick={() => handleFilterChange('SplashCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-splash.png')" }} />
                                        Splash
                                   </li>
                                   <li id="BlastCaster" onClick={() => handleFilterChange('BlastCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-blast.png')" }} />
                                        Blast
                                   </li>
                                   <li id="ChainCaster" onClick={() => handleFilterChange('ChainCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-chain.png')" }} />
                                        Chain
                                   </li>
                                   <li id="MechAccordCaster" onClick={() => handleFilterChange('MechAccordCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-mech.png')" }} />
                                        Mech-Accord
                                   </li>
                                   <li id="PhalanxCaster" onClick={() => handleFilterChange('PhalanxCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-phalanx.png')" }} />
                                        Phalanx
                                   </li>
                                   <li id="MysticCaster" onClick={() => handleFilterChange('MysticCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-mystic.png')" }} />
                                        Mystic
                                   </li>
                                   <li id="PrimalCaster" onClick={() => handleFilterChange('PrimalCaster')}>
                                        <span style={{ backgroundImage: "url('subclasses/caster-primal.png')" }} />
                                        Primal
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['StandardMedic', 'MultiTargetMedic', 'TherapistMedic', 'WanderingMedic', 'IncantationMedic', 'ChainMedic'])}>MEDIC</h2>
                              <ul className="subclass-container">
                                   <li id="StandardMedic" onClick={() => handleFilterChange('StandardMedic')}>
                                        <span style={{ backgroundImage: "url('subclasses/medic-standard.png')" }} />
                                        Standard
                                   </li>
                                   <li id="MultiTargetMedic" onClick={() => handleFilterChange('MultiTargetMedic')}>
                                        <span style={{ backgroundImage: "url('subclasses/medic-multi-target.png')" }} />
                                        Multi-Target
                                   </li>
                                   <li id="TherapistMedic" onClick={() => handleFilterChange('TherapistMedic')}>
                                        <span style={{ backgroundImage: "url('subclasses/medic-therapist.png')" }} />
                                        Therapist
                                   </li>
                                   <li id="WanderingMedic" onClick={() => handleFilterChange('WanderingMedic')}>
                                        <span style={{ backgroundImage: "url('subclasses/medic-wandering.png')" }} />
                                        Wandering
                                   </li>
                                   <li id="IncantationMedic" onClick={() => handleFilterChange('IncantationMedic')}>
                                        <span style={{ backgroundImage: "url('subclasses/medic-incantation.png')" }} />
                                        Incantation
                                   </li>
                                   <li id="ChainMedic" onClick={() => handleFilterChange('ChainMedic')}>
                                        <span style={{ backgroundImage: "url('subclasses/medic-chain.png')" }} />
                                        Chain
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['DecelBinderSupporter', 'SummonerSupporter', 'HexerSupporter', 'BardSupporter', 'AbjurerSupporter', 'ArtificerSupporter', 'RitualistSupporter'])}>SUPPORTER</h2>
                              <ul className="subclass-container">
                                   <li id="DecelBinderSupporter" onClick={() => handleFilterChange('DecelBinderSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-decel-binder.png')" }} />
                                        Decel Binder
                                   </li>
                                   <li id="SummonerSupporter" onClick={() => handleFilterChange('SummonerSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-summoner.png')" }} />
                                        Summoner
                                   </li>
                                   <li id="HexerSupporter" onClick={() => handleFilterChange('HexerSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-hexer.png')" }} />
                                        Hexer
                                   </li>
                                   <li id="BardSupporter" onClick={() => handleFilterChange('BardSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-bard.png')" }} />
                                        Bard
                                   </li>
                                   <li id="AbjurerSupporter" onClick={() => handleFilterChange('AbjurerSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-abjurer.png')" }} />
                                        Abjurer
                                   </li>
                                   <li id="ArtificerSupporter" onClick={() => handleFilterChange('ArtificerSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-artificer.png')" }} />
                                        Artificer
                                   </li>
                                   <li id="RitualistSupporter" onClick={() => handleFilterChange('RitualistSupporter')}>
                                        <span style={{ backgroundImage: "url('subclasses/supporter-ritualist.png')" }} />
                                        Ritualist
                                   </li>
                              </ul>
                         </div>
                         <div className='subclass-wrapper'>
                              <h2 className="class-name" onClick={() => handleBatchFilter(['PusherSpecialist', 'HookmasterSpecialist', 'ExecutorSpecialist', 'AmbusherSpecialist', 'GeekSpecialist', 'MerchantSpecialist', 'TrapmasterSpecialist', 'DollkeeperSpecialist'])}>SPECIALIST</h2>
                              <ul className="subclass-container">
                                   <li id="PusherSpecialist" onClick={() => handleFilterChange('PusherSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-pusher.png')" }} />
                                        Pusher
                                   </li>
                                   <li id="HookmasterSpecialist" onClick={() => handleFilterChange('HookmasterSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-hookmaster.png')" }} />
                                        Hookmaster
                                   </li>
                                   <li id="ExecutorSpecialist" onClick={() => handleFilterChange('ExecutorSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-executor.png')" }} />
                                        Executor
                                   </li>
                                   <li id="AmbusherSpecialist" onClick={() => handleFilterChange('AmbusherSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-ambusher.png')" }} />
                                        Ambusher
                                   </li>
                                   <li id="GeekSpecialist" onClick={() => handleFilterChange('GeekSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-geek.png')" }} />
                                        Geek
                                   </li>
                                   <li id="MerchantSpecialist" onClick={() => handleFilterChange('MerchantSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-merchant.png')" }} />
                                        Merchant
                                   </li>
                                   <li id="TrapmasterSpecialist" onClick={() => handleFilterChange('TrapmasterSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-trapmaster.png')" }} />
                                        Trapmaster
                                   </li>
                                   <li id="DollkeeperSpecialist" onClick={() => handleFilterChange('DollkeeperSpecialist')}>
                                        <span style={{ backgroundImage: "url('subclasses/specialist-dollkeeper.png')" }} />
                                        Dollkeeper
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>

               <hr />

               <div className='operator-cards-wrapper'>
                    {filteredItems.map((entry) => (
                         <Cards
                              key={entry.id}
                              name={entry.name}
                              mainClass={entry.mainClass}
                              subclass={entry.subclass}
                              stars={entry.stars}
                              portrait={entry.portrait}
                              subclassImage={entry.subclassImage}
                              link={entry.link}
                         />
                    ))}
               </div>
          </div>
     );
}

export default Operators