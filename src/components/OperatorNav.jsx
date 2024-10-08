import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Infosvg from './svg/infosvg';
import Closesvg from './svg/menuclosesvg';
import Opensvg from './svg/menuopensvg';

export default function OperatorNav(props) {

     useEffect(() => {
          root.style.setProperty('--accentshadow', props.accentShadow);
          root.style.setProperty('--accentcolor', props.accentColor);
     }, []);

     // stuff for properly toggling the menu
     const [sidebarPosition, setSidebarPosition] = useState('translateX(0)');
     const [sidebarResize, setSidebarResize] = useState('300px');
     const [sidebarShadow, setSidebarShadow] = useState('2px 0px 10px var(--shadow)')
     const [topbarPosition, setTopbarPosition] = useState('300px');
     const [bodyPadding, setBodyPadding] = useState('150px 100px 50px 400px');
     const [mobile, setMobile] = useState(false);
     const [transition, setTransition] = useState('0s ease');

     const pushBodyPadding = {
          padding: bodyPadding,
          transition: 'padding ' + transition,
          minHeight: '100svh'
     }
     const pushSidebarPos = {
          transform: sidebarPosition,
          width: sidebarResize,
          transition: 'transform ' + transition,
          boxShadow: sidebarShadow,
     }
     const pushTopbarPos = {
          marginLeft: topbarPosition,
          transition: 'margin ' + transition,
     }

     //toggle menu
     function toggleMenu() {
          if (mobile === false) {
               setTransition('0.2s ease');
               if (sidebarPosition === 'translateX(0)') {
                    setSidebarPosition('translateX(-100%)');
                    setTopbarPosition('0');
                    setBodyPadding('150px 200px 50px 200px');
                    setSidebarShadow('none')
               }
               else {
                    setSidebarPosition('translateX(0)');
                    setTopbarPosition('300px');
                    setBodyPadding('150px 100px 50px 400px');
                    setSidebarShadow('2px 0px 10px var(--shadow)')
               }
          }
          else {
               setSidebarShadow('none')
               if (sidebarPosition === 'translateX(0)') {
                    document.body.style.overflow = 'visible';
                    setSidebarPosition('translateX(-100%)');
               }
               else {
                    setSidebarPosition('translateX(0)');
                    document.body.style.overflow = 'hidden';
               }
          }
     };

     //detects if mobile or desktop layout should be displayed
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);;
     const handleResize = () => {
          setWindowWidth(window.innerWidth);
     };
     useEffect(() => {
          window.addEventListener('resize', handleResize)
          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);
     useEffect(() => {
          if (windowWidth < 1200) {
               console.log('mobile layout')
               setMobile(true);
               setSidebarResize('100svw');
               setSidebarPosition('translateX(-100%)');
               setTopbarPosition('0');
               setBodyPadding('150px 20px 50px 20px');
               setTransition('0s ease');
               setSidebarShadow('none')
          }
          else {
               console.log('desktop layout')
               document.body.style.overflow = 'visible';
               setMobile(false);
               setSidebarResize('300px');
               setSidebarPosition('translateX(0)');
               setTopbarPosition('300px');
               setBodyPadding('150px 100px 50px 400px');
               setSidebarShadow('2px 0px 10px var(--shadow)')
          }
     }, [windowWidth]);

     //sends tab info to parent, declares which tab to be shown
     function sendTab(tab) {
          { props.childClick(tab) }

          const tabs = ['overview', 'skills', 'modules', 'summon', 'files', 'outfits', 'resources'];
          tabs.forEach(t => {
               const tabElement = document.getElementById(`${t}Tab`);

               if (t === tab) {
                    tabElement.classList.add('active-button');
               } else {
                    tabElement.classList.remove('active-button');
               }
          });

          if (mobile === true) {
               toggleMenu();
          }
     };

     //gives overviewtab a style on load
     useEffect(() => {
          document.getElementById('overviewTab').classList.add('active-button');
     }, []);

     return (
          <>
               <div className="operator-nav">
                    <div className="sidebar" style={pushSidebarPos}>
                         <div className="sidebar-head">
                              <div className="operator-head">
                                   <img src={props.profile} />
                                   <div>
                                        <h2>{props.operatorName}</h2>
                                        <p>{props.operatorClass}</p>
                                   </div>
                              </div>
                              <div onClick={toggleMenu}>
                                   <Closesvg />
                              </div>
                         </div>
                         <div className="sidebar-tabs">
                              <Link to='/'><p>BACK</p></Link>
                              <p onClick={() => sendTab('overview')} id="overviewTab" style={{ display: props.showTabs[0] }}>Overview</p>
                              <p onClick={() => sendTab('skills')} id="skillsTab" style={{ display: props.showTabs[1] }}>Skills</p>
                              <p onClick={() => sendTab('modules')} id="modulesTab" style={{ display: props.showTabs[2] }}>Modules</p>
                              <p onClick={() => sendTab('summon')} id="summonTab" style={{ display: props.showTabs[3] }}>Summon</p>
                              <p onClick={() => sendTab('files')} id="filesTab" style={{ display: props.showTabs[4] }}>Files</p>
                              <p onClick={() => sendTab('outfits')} id="outfitsTab" style={{ display: props.showTabs[5] }}>Outfits</p>
                              <p onClick={() => sendTab('resources')} id="resourcesTab" style={{ display: props.showTabs[7] }}>Resources</p>
                         </div>
                         <div className='sidebar-links'>
                              <a href="https://github.com/tabiji762/arkbutts"><Infosvg /></a>
                         </div>
                    </div>
                    <div className="topbar" style={pushTopbarPos}>
                         <div onClick={toggleMenu}>
                              <Opensvg />
                         </div>
                         <h1>{props.title}</h1>
                    </div>
               </div>
               <div style={pushBodyPadding}>
                    {props.children}
               </div>
          </>
     );
};