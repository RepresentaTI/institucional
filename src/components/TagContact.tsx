
import Tag from '../assets/ticket.svg?react'
import { useState } from 'react';
import { PiWhatsappLogoLight, PiInstagramLogoLight,  PiLinkedinLogoLight } from 'react-icons/pi';
import '../styles/TagContact.css'

const TagContact = () => {

    const [moviment,setMoviment] = useState<string>('off')

    const animation = ()=>{
        setMoviment(moviment === 'off' ? 'on' : 'off')
    }

    return (
        <div className={`container-tag ${moviment}`}>
            
            <div className="relative">
                <Tag onClick={animation}  className='absolute top-[-15px] left-[3rem] cursor-pointer '/>
                <div className="bg-dark-blue flex flex-col p-2 gap-2 relative rounded-br-xl">

      <a href="https://api.whatsapp.com/send/?phone=5511984681559&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <PiWhatsappLogoLight className='text-white text-4xl hover:text-green-500 transition-all duration-300 cursor-pointer' />
      </a>
      <a href="https://www.instagram.com/representa.online?igsh=MXd1aHg1Z3AxNW9pbA==" target="_blank" rel="noopener noreferrer">
        <PiInstagramLogoLight className='text-white text-4xl hover:text-pink-500 transition-all duration-300 cursor-pointer' />
      </a>
      
      <a href="https://www.linkedin.com/in/representa-online-4729032b5" target="_blank" rel="noopener noreferrer">
        <PiLinkedinLogoLight className='text-white text-4xl hover:text-blue-800 transition-all duration-300 cursor-pointer' />
      </a>
    </div>
            </div>
        </div>
    )
}

export default TagContact