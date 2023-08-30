import React from 'react'
import Button from './Button'
import '../assets/css/App.css';
import '../assets/css/MainCover.css';

import cube from '../assets/images/cube.jpg';

function MainCover() {
  return (
    <div className='hero-container'>
      <img src={cube} alt='' />
      <h1>ADVENTURE AWAITIS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
      Services
        </Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
          Hello Wello
        </Button>
      </div>
    </div>
  )
}

export default MainCover;
