import React, { useState, useEffect } from 'react';

function Home(props) {

     const displayer = {
          display: props.display
     }
     return (
          <div style={displayer}>
               <p>hello</p>
          </div>
     )
}

export default Home