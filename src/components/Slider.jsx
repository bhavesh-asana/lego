import React from 'react'
import befo1 from '../imaga/1befo.webp'
import aft1 from '../imaga/1aft.webp'
import { useState } from 'react'

const Slider = (props) => {
  const [sliderPosition,setSliderPosition] = useState(50)
  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };
  
  return (
    <div className='w-[100%] relative'>
        <div className='relative w-full max-w-[800px] aspect-[70/45] m-auto overflow-hidden select-none'onMouseMove={handleMove}>
            <img  src={props.aft1}></img>
            <div className='absolute top-0 left-0 right-0 w-full max-w-[700px] aspect-[70/45] m-auto overflow-hidden select-none' style={{clipPath:`inset(0 ${100-sliderPosition}% 0 0)`}}>
                <img src={props.befo1}></img>
            </div>
            <div className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize' style={{left:`calc(${sliderPosition}% - 1px)`}}> 
              <div className='bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]'></div>
            </div>
        </div>
    </div>
  );
};
export default Slider