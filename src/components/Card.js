import React from 'react';
import CardItem from './CardItem';
import '../assets/css/Cards.css';
import Cll from '../assets/images/pc.jpg';

import Cube from '../assets/images/cube.jpg';

function Card() {
  return (
    <div className='cards'>
      <h1> Interesting Content</h1>

      <div className='cards--container'> 
        <ul className='cards--items'>
          <CardItem
          src={Cll}
          text='Eplore the Hidden waterfall deep inside the 
          Amazon Jungles'
          label='Adventure'
          path='/services'
          > 

          </CardItem>
      <br/>
          <CardItem
          src={Cube}
          text='Another 1'
          label='Adventure'
          path='/services'
          > 

          </CardItem>
        </ul> 
      </div>

    </div>
  )
}

export default Card
