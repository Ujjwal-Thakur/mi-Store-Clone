import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
    <Carousel fade>
        {start.map((Item,index)=>(
            <Carousel.Item key={index}>
                <img className='d-block w-100' src={Item} alt='First Slide' />
            </Carousel.Item>
            ))
        }
    </Carousel>
  )
}

export default Slider