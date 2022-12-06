import React from 'react'
import './loading.scss'
const Loading = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
    <div className="dot-flasing">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
        <div>Loading...</div>
    </div>
  )
}

export default Loading