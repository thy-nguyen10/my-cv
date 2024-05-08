import React from 'react'
import './CSS/Image.css'
import img from '../Assets/anh1.jpg'

const Image = () => {
  return (
    <div className="image-container">
        <div className='image'>
            <img src={img} alt="Ảnh đại diện" />
        </div>
    </div>
    
  )
}

export default Image
