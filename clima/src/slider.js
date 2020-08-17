import React from 'react';

const Slider = (props) => {
  return(
    <div>
      <input type="range" min="0" max="24" value={props.hourDisplayed} step="1" className="slider" onChange={props.handleHour()}/>
    </div>
  )
}

export default Slider;