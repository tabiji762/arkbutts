import React, { useState, useEffect } from 'react';
import Elite0svg from './svg/Elite0svg.jsx';
import Elite1svg from './svg/Elite1svg.jsx';
import Elite2svg from './svg/Elite2svg.jsx';

import Clocksvg from './svg/Clock.jsx';

function resources(props) {
     
     return (
          <div style={{ display: props.display }} className='resources-container'>

               <p className='sections-navigator' style={{ display: props.eliteVisibility[0] }}>Elite Rank | Resources</p>
               <ul className='overview-resources' style={{ display: props.eliteVisibility[0] }}>
                    <li style={{ display: props.eliteVisibility[0] }}>
                         <Elite1svg />
                         {props.eliteResources[0]}
                    </li>
                    <li style={{ display: props.eliteVisibility[1] }}>
                         <Elite2svg />
                         {props.eliteResources[1]}
                    </li>
               </ul>
               <hr style={{ display: props.eliteVisibility[0] }} />

               <p className='sections-navigator' style={{ display: props.skillVisibility }}>Skill Level | Requirements | Resources</p>
               <ul className='skills-resources' style={{ display: props.skillVisibility }}>
                    <li>
                         <h1>2</h1>
                         <Elite0svg />
                         {props.skillResources[0]}
                    </li>
                    <li>
                         <h1>3</h1>
                         <Elite0svg />
                         {props.skillResources[1]}
                    </li>
                    <li>
                         <h1>4</h1>
                         <Elite0svg />
                         {props.skillResources[2]}
                    </li>
                    <li>
                         <h1>5</h1>
                         <Elite1svg />
                         {props.skillResources[3]}
                    </li>
                    <li>
                         <h1>6</h1>
                         <Elite1svg />
                         {props.skillResources[4]}
                    </li>
                    <li>
                         <h1>7</h1>
                         <Elite1svg />
                         {props.skillResources[5]}
                    </li>
               </ul>
               <hr style={{ display: props.skillSpecVisibility[0] }} />

               <p className='sections-navigator' style={{ display: props.skillSpecVisibility[0] }}>Skill | Specialization Level | Requirements | Resources</p>
               <ul className='skill-spec-resource-container' >
                    <li style={{ display: props.skillSpecVisibility[0] }}>
                         <div className='skill-spec-resource-head'>
                              <img src={props.skillImages[0]} />
                              <div>
                                   <p className='focusText'>{props.skillNames[0]}</p>
                                   <p>Skill 1</p>
                              </div>

                         </div>
                         <ul className='skill-spec-resource-body'>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_1.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>8hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill1SpecResources[0]}
                              </li>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_2.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>16hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill1SpecResources[1]}
                              </li>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_3.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>24hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill1SpecResources[2]}
                              </li>
                         </ul>
                    </li>
                    <li style={{ display: props.skillSpecVisibility[1] }}>
                         <div className='skill-spec-resource-head'>
                              <img src={props.skillImages[1]} />
                              <div>
                                   <p className='focusText'>{props.skillNames[1]}</p>
                                   <p>Skill 2</p>
                              </div>

                         </div>
                         <ul className='skill-spec-resource-body'>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_1.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>8hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill2SpecResources[0]}
                              </li>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_2.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>16hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill2SpecResources[1]}
                              </li>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_3.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>24hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill2SpecResources[2]}
                              </li>
                         </ul>
                    </li>
                    <li style={{ display: props.skillSpecVisibility[2] }}>
                         <div className='skill-spec-resource-head'>
                              <img src={props.skillImages[2]} />
                              <div>
                                   <p className='focusText'>{props.skillNames[2]}</p>
                                   <p>Skill 3</p>
                              </div>

                         </div>
                         <ul className='skill-spec-resource-body'>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_1.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>8hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill3SpecResources[0]}
                              </li>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_2.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>16hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill3SpecResources[1]}
                              </li>
                              <li>
                                   <span className='skill-spec-icon' style={{ backgroundImage: "url('specialization/specialized_3.png')" }} />
                                   <div className='skill-spec-time-container'>
                                        <Clocksvg />
                                        <p>24hr</p>
                                   </div>
                                   <Elite2svg />
                                   {props.skill3SpecResources[2]}
                              </li>
                         </ul>
                    </li>
               </ul>
               <hr style={{display: props.moduleVisibility[0]}}/>

               <p className='sections-navigator' style={{display: props.moduleVisibility[0]}}>Module | Requirements | Resources</p>
               <ul className='modules-resources-container' style={{display: props.moduleVisibility[0]}}>
                    <li style={{display: props.moduleVisibility[0]}}>
                         <div className='modules-resources-head'>
                              <img src={props.moduleImages[0]} />
                              <div>
                                   <p className='focusText'>{props.moduleNames[0]}</p>
                                   <p>{props.moduleCodes[0]}</p>
                              </div>
                         </div>
                         <div className='modules-resources-missions'>
                              <p><span style={{ color: 'white' }}>mission 1:</span> {props.module1Missions[0]}</p>
                              <p><span style={{ color: 'white' }}>mission 2:</span> {props.module1Missions[1]}</p>
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg1.png')" }}></span>
                                   <p>{props.module1Requirements[0]}</p>
                              </div>
                              {props.module1Resources[0]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg2.png')" }}></span>
                                   <p>{props.module1Requirements[1]}</p>
                              </div>
                              {props.module1Resources[1]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg3.png')" }}></span>
                                   <p>{props.module1Requirements[2]}</p>
                              </div>
                              {props.module1Resources[2]}
                         </div>
                    </li>
                    <li style={{display: props.moduleVisibility[1]}}>
                         <div className='modules-resources-head'>
                              <img src={props.moduleImages[1]} />
                              <div>
                                   <p className='focusText'>{props.moduleNames[1]}</p>
                                   <p>{props.moduleCodes[1]}</p>
                              </div>
                         </div>
                         <div className='modules-resources-missions'>
                              <p><span style={{ color: 'white' }}>mission 1:</span> {props.module2Missions[0]}</p>
                              <p><span style={{ color: 'white' }}>mission 2:</span> {props.module2Missions[1]}</p>
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg1.png')" }}></span>
                                   <p>{props.module1Requirements[0]}</p>
                              </div>
                              {props.module2Resources[0]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg2.png')" }}></span>
                                   <p>{props.module1Requirements[1]}</p>
                              </div>
                              {props.module2Resources[1]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg3.png')" }}></span>
                                   <p>{props.module1Requirements[2]}</p>
                              </div>
                              {props.module2Resources[2]}
                         </div>
                    </li>
                    <li style={{display: props.moduleVisibility[2]}}>
                         <div className='modules-resources-head'>
                              <img src={props.moduleImages[2]} />
                              <div>
                                   <p className='focusText'>{props.moduleNames[2]}</p>
                                   <p>{props.moduleCodes[2]}</p>
                              </div>
                         </div>
                         <div className='modules-resources-missions'>
                              <p><span style={{ color: 'white' }}>mission 1:</span> {props.module3Missions[0]}</p>
                              <p><span style={{ color: 'white' }}>mission 2:</span> {props.module3Missions[1]}</p>
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg1.png')" }}></span>
                                   <p>{props.module3Requirements[0]}</p>
                              </div>
                              {props.module3Resources[0]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg2.png')" }}></span>
                                   <p>{props.module3Requirements[1]}</p>
                              </div>
                              {props.module3Resources[1]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg3.png')" }}></span>
                                   <p>{props.module3Requirements[2]}</p>
                              </div>
                              {props.module3Resources[2]}
                         </div>
                    </li>
                    <li style={{display: props.moduleVisibility[3]}}>
                         <div className='modules-resources-head'>
                              <img src={props.moduleImages[3]} />
                              <div>
                                   <p className='focusText'>{props.moduleNames[3]}</p>
                                   <p>{props.moduleCodes[3]}</p>
                              </div>
                         </div>
                         <div className='modules-resources-missions'>
                              <p><span style={{ color: 'white' }}>mission 1:</span> {props.module4Missions[0]}</p>
                              <p><span style={{ color: 'white' }}>mission 2:</span> {props.module4Missions[1]}</p>
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg1.png')" }}></span>
                                   <p>{props.module4Requirements[0]}</p>
                              </div>
                              {props.module4Resources[0]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg2.png')" }}></span>
                                   <p>{props.module4Requirements[1]}</p>
                              </div>
                              {props.module4Resources[1]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg3.png')" }}></span>
                                   <p>{props.module4Requirements[2]}</p>
                              </div>
                              {props.module4Resources[2]}
                         </div>
                    </li>
                    <li style={{display: props.moduleVisibility[4]}}>
                         <div className='modules-resources-head'>
                              <img src={props.moduleImages[4]} />
                              <div>
                                   <p className='focusText'>{props.moduleNames[4]}</p>
                                   <p>{props.moduleCodes[4]}</p>
                              </div>
                         </div>
                         <div className='modules-resources-missions'>
                              <p><span style={{ color: 'white' }}>mission 1:</span> {props.module5Missions[0]}</p>
                              <p><span style={{ color: 'white' }}>mission 2:</span> {props.module5Missions[1]}</p>
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg1.png')" }}></span>
                                   <p>{props.module5Requirements[0]}</p>
                              </div>
                              {props.module5Resources[0]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg2.png')" }}></span>
                                   <p>{props.module5Requirements[1]}</p>
                              </div>
                              {props.module5Resources[1]}
                         </div>
                         <div className='modules-resources-content'>
                              <div className='wrapper'>
                                   <span style={{ backgroundImage: "url('uniequipstage/stg3.png')" }}></span>
                                   <p>{props.module5Requirements[2]}</p>
                              </div>
                              {props.module5Resources[2]}
                         </div>
                    </li>
               </ul>
          </div>
     )
}

export default resources