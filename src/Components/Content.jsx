import React from 'react'
import './CSS/Content.css'
import Image from './Image'

const Content = () => {
  return (
    <div className='content'>
      <div className="container">
        <div className="left-content">
          <Image/>
        </div>
        <div className="right-content">
          hello
        </div>
      </div>
    </div>
  )
}

export default Content
