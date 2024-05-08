import React from 'react'
import './CSS/Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faMapMarker, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Hr from './Hr';


const Info = () => {
  return (
    <div className="infomation">
        <div className='info'>
        <div className="text">
            <h1>NGUYEN THI THO THY</h1>
            <h2>10/01/2003</h2>
            <h2>0329 670 242</h2>
            <h2 style={{textTransform:"none"}}>thyntt2003@gmail.com</h2>
            <h2>Quận Tân Bình, Thành phố Hồ Chí Minh</h2>
        </div>
        <div className="icons">
            <FontAwesomeIcon style={{fontSize:'32px'}} icon={faUser}/>
            <FontAwesomeIcon icon={faCalendar}/>
            <FontAwesomeIcon icon={faPhone}/>
            <FontAwesomeIcon icon={faEnvelope}/>
            <FontAwesomeIcon icon={faMapMarker}/>
        </div>
    </div>
    <Hr/>
    </div>
  )
}

export default Info
