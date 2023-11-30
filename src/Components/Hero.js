import React from 'react'

function Hero(props) {
  return (
    <div>
      <div className='hero-img'>
      <img src={props.img}/>
      </div>
      <div className='Journey-container'>
        <div className="journey-head">
        <h1>{props.head}</h1>
        </div>
        <div className='journey-content'>
        <h4>{props.content}</h4>
        </div>
        <div className='journey-button'>
          <a link='/'>{props.btn}</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
