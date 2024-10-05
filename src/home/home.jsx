import React, { useState, useEffect } from "react"
import Articlesvg from '../components/svg/Articlesvg.jsx'
import Personsvg from "../components/svg/Personsvg.jsx";
import Infosvg from '../components/svg/infosvg.jsx';
import Operators from './Operatorspage.jsx'
import Changelog from "./Changelog.jsx";


function MainMenu() {

     const [operatorPage, setOperatorPage] = useState('flex')
     const [changelogPage, setChangelogPage] = useState('none')

     const switchPage = (id) =>{
          if (id === 0){
               setOperatorPage('flex');
               setChangelogPage('none');
          }
          else{
               setOperatorPage('none');
               setChangelogPage('flex');
          }
     }

     useEffect(() => {
          root.style.setProperty('--accentshadow', 'rgb(140, 30, 50, 0.3)');
          root.style.setProperty('--accentcolor', 'rgb(140, 30, 50)');
          document.body.style.overflow = 'visible';
     }, []);

     return (
          <>
               <div className="main-nav">
                    <h1>arkbutts</h1>
                    <div>
                         <div onClick={() => switchPage(0)}>
                              <Personsvg />
                         </div>
                         <div onClick={() => switchPage(1)}>
                              <Articlesvg />
                         </div>
                         <a href="https://github.com/tabiji762/arkbutts"><Infosvg /></a>
                    </div>

               </div>
               <div style={{display: operatorPage}}>
                    <Operators />
               </div>
               <div style={{display: changelogPage}}>
                    <Changelog />
               </div>
          </>
     )
}

export default MainMenu