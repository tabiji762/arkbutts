import {Link} from 'react-router-dom';
import Starsvg from './svg/starsvg.jsx'

export default function Cards(props){
     return(
          <Link to={props.link} className='operator-card-container' style={{backgroundImage: 'linear-gradient(to top, rgb(20, 20, 20) 10%, rgba(0, 0, 0, 0) 70%), url('+props.portrait+')'}}>
               <span className="subclass-image-container" style={{backgroundImage: 'url('+props.subclassImage+')'}}></span>
               <div className='operator-card-content'>
                    <h3>{props.name}</h3>
                    <div className='class-star-wrapper'>
                         <p>{props.mainClass}</p>
                         <div className='card-stars'>
                              <p>{props.stars}</p>
                              <Starsvg/>
                         </div>
                    </div>
               </div>
          </Link>
     )
}