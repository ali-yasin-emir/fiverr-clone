import React from 'react';
import './Slide.scss';

import Slider from 'infinite-react-carousel';
const Slide = ({ children, slidesToShow, arrowsScrol }) => {
  return (
    <div className='slide'>
      <div className='container'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScrol}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
