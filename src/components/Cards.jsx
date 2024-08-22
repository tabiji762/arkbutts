import {Link} from 'react-router-dom';
import Starsvg from './svg/starsvg.jsx'

function Cards(props){

     const characterPortrait = {
          backgroundImage: 'url('+props.portrait+')',
     }
     const subclassImage = {
          backgroundImage: 'url('+props.subclassImage+')',
     }
     return(
          <a href={props.link} className='cardsContainer' style={characterPortrait}>
               <span className="subclass-image-container" style={subclassImage}></span>
               <div className='cardsContent'>
                    <h2>{props.name}</h2>
                    <div className='cardsClassAndStars'>
                         <p>{props.mainClass}</p>
                         <div className='cardsStars'>
                              <p>{props.stars}</p>
                              <Starsvg/>
                         </div>
                    </div>
               </div>
          </a>
     )
}

export default Cards