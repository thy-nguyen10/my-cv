import React from 'react'
import './CSS/Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Info = () => {
  return (
    <div className='info-container'>
      <div className="item">
        <div className="info-item">
          <FontAwesomeIcon icon={faCalendar} className="custom-icon"/>
          <h4 className="info-text">10/01/2003</h4>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="custom-icon"/>
          <h4 className="info-text">0329 670 242</h4>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="custom-icon"/>
          <h4 className="info-text">thyntt2003@gmail.com</h4>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarker} className="custom-icon"/>
          <h4 className="info-text">Tan Binh, Ho Chi Minh</h4>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faLinkedin} className="custom-icon" />
          <h4 className="info-text">linkedin.com/in/jonathan.smith</h4>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faGithub} className="custom-icon" />
          <h4 className="info-text">github.com/thy-nguyen10</h4>
        </div>
      </div>
    </div>
  )
}

export default Info
