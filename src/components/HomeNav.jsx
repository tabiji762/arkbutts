import React, { useEffect } from 'react';
import Infosvg from './svg/infosvg';

function MainNav(props) {

     useEffect(() => {
          root.style.setProperty('--accentbg', props.darkAccentBg);
          root.style.setProperty('--accentcolor', props.darkAccentColor);
          document.body.style.overflow='visible';
     }, []);

     // return
     return (
          <>
               <div className="main-nav">
                    <h1>arkbutts</h1>
                    <a href="https://github.com/tabiji762/arkbutts"><Infosvg/></a>
               </div>
          </>
     );
};

export default MainNav