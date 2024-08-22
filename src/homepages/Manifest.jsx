import React, { useState } from "react"
import HomeNav from '../components/HomeNav.jsx'

import Home from './Homepage.jsx'
import Operators from './Operatorspage.jsx'


function MainMenu() {

     const [homeDisplay, setHomeDisplay] = useState('grid')
     const [operatorDisplay, setOperatorDisplay] = useState('none')
     const [tabTitle, setTabTitle] = useState('HOME')

     const showTab = (tab) => {
          setHomeDisplay(tab === 'home' ? 'grid' : 'none');
          setOperatorDisplay(tab === 'operators' ? 'grid' : 'none');

          setTabTitle(tab.toUpperCase())
     }

     return (
          <HomeNav
               title={tabTitle}
               children=''
               childClick={showTab}

               lightAccentBg='#fce1e9'
               lightAccentColor='#c41f51'

               darkAccentBg='#382329'
               darkAccentColor='#c41f51'
          >
               <Home display={homeDisplay} />
               <Operators display={operatorDisplay} />
          </HomeNav>
     )
}

export default MainMenu