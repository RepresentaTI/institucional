

import { useState } from 'react';
import 'animate.css';
import { PiArrowUpBold } from 'react-icons/pi';

const ButtonScrollToTop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClick, setIsClick] = useState(false)

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => {
    setIsClick(true)

    setTimeout(() => {
      setIsClick(false)
    }, 1200);

  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  

  return (
    <div
    onClick={() => {
      handleClick();
      handleScrollToTop();
    }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed animate__animated overflow-hidden right-9 bottom-9 text-3xl z-50 flex justify-center items-center 
        drop-shadow-lg shadow-inner cursor-pointer  h-14 w-14 rounded-full bg-dark-blue
      text-white hover:text-dark-blue hover:bg-white transition-all duration-500  ${isHovered ? 'animate__shakeY ' : ''}`}
    >
      <PiArrowUpBold className={` animate__animated ${isClick ? 'animate__bounceOutUp animate-slower ' : 'animate__bounceInUp'}`} />
    </div>
  );
};

export default ButtonScrollToTop