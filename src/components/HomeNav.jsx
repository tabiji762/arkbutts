import React, { useState, useEffect } from 'react';
import Infosvg from './svg/infosvg';
import Closesvg from './svg/menuclosesvg';
import Opensvg from './svg/menuopensvg';

function MainNav(props) {

     // stuff for properly toggling the menu
     const [sidebarPosition, setSidebarPosition] = useState('translateX(0)');
     const [sidebarResize, setSidebarResize] = useState('300px');
     const [topbarPosition, setTopbarPosition] = useState('300px');
     const [bodyPadding, setBodyPadding] = useState('150px 100px 50px 400px');
     const [mobile, setMobile] = useState(false);
     const [transition, setTransition] = useState('0s ease');

     const pushSidebarPos = {
          transform: sidebarPosition,
          width: sidebarResize,
          transition: 'transform ' + transition,
     }
     const pushTopbarPos = {
          marginLeft: topbarPosition,
          transition: 'margin ' + transition,
     }
     const pushBodyPadding = {
          padding: bodyPadding,
          transition: 'padding ' + transition,
     }

     //toggle menu
     function toggleMenu() {
          if (mobile === false) {
               setTransition('0.2s ease');
               if (sidebarPosition === 'translateX(0)') {
                    setSidebarPosition('translateX(-100%)');
                    setTopbarPosition('0');
                    setBodyPadding('150px 200px 50px 200px');
               }
               else {
                    setSidebarPosition('translateX(0)');
                    setTopbarPosition('300px');
                    setBodyPadding('150px 100px 50px 400px');
               }
          }
          else {
               if (sidebarPosition === 'translateX(0)') {
                    setSidebarPosition('translateX(-100%)');
                    document.body.style.overflow = 'visible';
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
          }
          else {
               console.log('desktop layout')
               setMobile(false);
               setSidebarResize('300px');
               setSidebarPosition('translateX(0)');
               setTopbarPosition('300px');
               setBodyPadding('150px 100px 50px 400px');
          }
     }, [windowWidth]);

     //sends current tab back to parent (home page manifest.jsx)
     function activeTab(tab) {
          { props.childClick(tab) }
          if (tab === 'home') {
               document.getElementById('homeTab').classList.add('activeTab')
               document.getElementById('operatorTab').classList.remove('activeTab')
          }
          else {
               document.getElementById('homeTab').classList.remove('activeTab')
               document.getElementById('operatorTab').classList.add('activeTab')
          }
          if (mobile === true) {
               toggleMenu()
          }
     }

     //gives active tab a style
     useEffect(() => {
          document.getElementById('homeTab').classList.add('activeTab')
     }, []);

     useEffect(() => {
          root.style.setProperty('--accentbg', props.darkAccentBg);
          root.style.setProperty('--accentcolor', props.darkAccentColor);
     }, []);

     // return
     return (
          <>
               <div className="mainNav">
                    <div className="sidebar" style={pushSidebarPos}>
                         <div className="titleBox">
                              <h1>arkbutts</h1>
                              <div onClick={toggleMenu}>
                                   <Closesvg/>
                              </div>
                         </div>
                         <div className="tabsContainer">
                              <p onClick={() => activeTab('home')} id="homeTab">Home</p>
                              <p onClick={() => activeTab('operators')} id="operatorTab">Operators</p>
                         </div>
                         <div className="extraLinks">
                              <a href="https://github.com/tabiji762/arkbutts"><Infosvg/></a>
                         </div>
                    </div>
                    <div className="topbar">
                         <div className="topbarContent" style={pushTopbarPos}>
                              <div onClick={toggleMenu}>
                                   <Opensvg/>
                              </div>
                              <h1>{props.title}</h1>
                         </div>
                    </div>
               </div>
               <div style={pushBodyPadding}>
                    {props.children}
               </div>
          </>
     );
};

export default MainNav