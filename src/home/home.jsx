import React, {useEffect} from "react"
import Infosvg from '../components/svg/infosvg.jsx';
import Operators from './Operatorspage.jsx'


function MainMenu() {

     useEffect(() => {
          root.style.setProperty('--accentshadow', 'rgb(140, 30, 50, 0.3)');
          root.style.setProperty('--accentcolor', 'rgb(140, 30, 50)');
          document.body.style.overflow='visible';
     }, []);

     return (
          <>
               <div className="main-nav">
                    <h1>arkbutts</h1>
                    <a href="https://github.com/tabiji762/arkbutts"><Infosvg /></a>
               </div>
               <Operators />
          </>
     )
}

export default MainMenu