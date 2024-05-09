import React from 'react';

const Hr = () => {
  return (
    <div className='hr'>
      <hr style={{
        height: "3px",
        border: "none",
        background: "linear-gradient(to right, #355C7D, #6C5B7B, #C06C84, #6C5B7B, #355C7D)",
        width: "100%"
      }} />
    </div>
  )
}

export default Hr;
