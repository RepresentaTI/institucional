import React, { useState } from 'react'
import { PiEnvelopeSimpleLight, PiUser, PiChatCenteredTextLight } from "react-icons/pi";

type ObjMessage = {
    name: string;
    userEmail: string;
    message: string;
}

const FormEmail = () => {
    
    const [message, setMessage] = useState<ObjMessage>({
        name: '' ,
        userEmail: '',
        message : '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('send email')
        console.log(message)
    }
    
    return (
        <form onSubmit={(e)=> handleSubmit(e)} className='flex flex-col  flex-[1_1_200px] w-full py-5 px-6 z-10 h-full mb-20 
        sm:mb-20 lg:mb-0 gap-5 justify-center bg-gray-50 rounded-xl relative bottom-0'>
            <label className='flex flex-col gap-3 '>
                <p className='text-black font-normal inline-flex gap-3 items-center'>Nome <span className='text-xl'><PiUser /></span></p>

                <input onChange={(e)=>setMessage((prev)=>({...prev, name:e.target.value }))}   
                type="text" placeholder='digite seu nome ' className=' 
                border rounded-md px-[6px] text-black font-light placeholder:font-extralight py-2 outline-none 
            border-gray-500 bg-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:outline-2 focus:border-blue-600
            focus:outline-blue-600 focus:text-blue-600  focus:outline-offset-4 transition-all duration-500  focus:bg-white  ' />
            </label>

            <label className='flex flex-col gap-3'>
                <p className='text-black font-normal inline-flex gap-3 items-center '>Email <span className='text-xl'><PiEnvelopeSimpleLight /></span> </p>
                
                <input onChange={(e)=>setMessage((prev)=>({...prev, userEmail:e.target.value }))} 
                type="email" placeholder='digite seu endereço de e-mail' className=' 
                border rounded-md px-[6px] text-black font-light placeholder:font-extralight py-2 w-full outline-none
            border-gray-500 bg-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:outline-2 focus:border-blue-600
            focus:outline-blue-600 focus:text-blue-600  focus:outline-offset-4 transition-all duration-500  focus:bg-white ' />
            
            </label>

            <label className='flex flex-col gap-3'>
                <p className='text-black font-normal inline-flex gap-3 items-center '>Mensagem <span className='text-xl'><PiChatCenteredTextLight /></span></p>
                
                <textarea onChange={(e)=>setMessage((prev)=>({...prev, message:e.target.value }))} 
                placeholder='digite sua mensagem' className=' resize-none 
                border rounded-md px-[6px] text-black font-light placeholder:font-extralight py-2 w-full h-48 sm:h-64 outline-none
            border-gray-500 bg-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:outline-2 focus:border-blue-600
            focus:outline-blue-600 focus:text-blue-600  focus:outline-offset-4 transition-all duration-500   focus:bg-white '></textarea>
            
            </label>

            <div className="container-buttons w-full flex flex-wrap sm:flex-nowrap gap-3">
                <input type="submit" value='Enviar Email' className='w-full bg-blue-600 text-white font-normal py-3 rounded-lg cursor-pointer
                ' />
                <input type="reset" value="Limpar Formulário" className='w-full bg-red-600 text-white font-normal py-3 rounded-lg cursor-pointer
                ' />

            </div>


        </form>

    )
}

export default FormEmail