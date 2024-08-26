import React, { useState, useEffect } from 'react';
import Elite0svg from './svg/Elite0svg.jsx';
import Elite1svg from './svg/Elite1svg.jsx';
import Elite2svg from './svg/Elite2svg.jsx';

function Outfits(props){

     useEffect(()=>{
          document.getElementById('outfitbutton1').classList.add('active-button')
     }, [])

     const [outfitName, setOutfitName] = useState(props.outfitNames[0])
     const [outfitDesc, setOutfitDesc] = useState(props.outfitDescriptions[0])
     const [outfitImgLink, setOutfitImgLink] = useState(props.outfitImgLinks[0])
     const [outfitAddendum, setOutfitAddendum] = useState(props.outfitAddendums[0])

     const handleOutfitChange = (value) =>{
          let idList = [
               'outfitbutton1',
               'outfitbutton2',
               'outfitbutton3',
               'outfitbutton4',
               'outfitbutton5',
               'outfitbutton6',
               'outfitbutton7',
               'outfitbutton8',
          ]
          idList.forEach((id)=>{
               if (id===idList[value]){
                    document.getElementById(id).classList.add('active-button')
               }
               else{
                    document.getElementById(id).classList.remove('active-button')
               }
          });

          setOutfitName(props.outfitNames[value])
          setOutfitDesc(props.outfitDescriptions[value])
          setOutfitImgLink(props.outfitImgLinks[value])
          setOutfitAddendum(props.outfitAddendums[value])
     }

     return(
          <div style={{ display: props.display }} className='outfits-wrapper'>
               <div className='outfits-buttons-wrapper'>
                    <div id="outfitbutton1" onClick={()=>handleOutfitChange(0)} style={{display: props.buttonVisibility[0]}} ><Elite0svg /></div>
                    <div id="outfitbutton2" onClick={()=>handleOutfitChange(1)} style={{display: props.buttonVisibility[1]}} ><Elite1svg /></div>
                    <div id="outfitbutton3" onClick={()=>handleOutfitChange(2)} style={{display: props.buttonVisibility[2]}} ><Elite2svg /></div>
                    <img id="outfitbutton4" onClick={()=>handleOutfitChange(3)} style={{display: props.buttonVisibility[3]}} src={props.outfitBrandLinks[0]}/>
                    <img id="outfitbutton5" onClick={()=>handleOutfitChange(4)} style={{display: props.buttonVisibility[4]}} src={props.outfitBrandLinks[1]}/>
                    <img id="outfitbutton6" onClick={()=>handleOutfitChange(5)} style={{display: props.buttonVisibility[5]}} src={props.outfitBrandLinks[2]}/>
                    <img id="outfitbutton7" onClick={()=>handleOutfitChange(6)} style={{display: props.buttonVisibility[6]}} src={props.outfitBrandLinks[3]}/>
                    <img id="outfitbutton8" onClick={()=>handleOutfitChange(7)} style={{display: props.buttonVisibility[7]}} src={props.outfitBrandLinks[4]}/>
               </div>
               <hr />
               <div className='outfits-content-wrapper'>
                    <div className='outfits-image-wrapper'>
                         <img src={outfitImgLink} />        
                    </div>
                    <div className='outfits-info-wrapper'>
                         <div>
                              <h1>{outfitName}</h1>
                              <p>{outfitAddendum}</p>
                         </div>
                         {outfitDesc}
                    </div>
               </div>
          </div>
     )
}

export default Outfits