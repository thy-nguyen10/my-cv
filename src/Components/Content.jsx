import React from 'react'
import './CSS/Content.css'
import Image from './Image'
import Info from './Info'
import Aboutme from './Aboutme'

const Content = () => {
  return (
    <div className='content'>
      <div className="container">
        <div className="left-content">
          <Image/>
          <Info/>
        </div>
        <div className="right-content">
          <Aboutme/>
        </div>
      </div>
    </div>
  )
}

export default Content
