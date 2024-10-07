
import { PiWhatsappLogoLight, PiInfoLight } from 'react-icons/pi';
import TagExit from '../assets/tag-exit.svg?react'

interface DataObject {
    nameProduct: string,
    descriptionText: string,
    valueProduct?: string,
    iconProduct?: any,
}

type Props = {
    popUpValues: DataObject,
    closePopUp: () => void,
}


const DescriptionProduct = ({ popUpValues, closePopUp }: Props) => {
    return (
        <>
            <div className=' animate__animated animate__fadeIn  flex-wrap lg:flex-nowrap z-30
            fixed h-[27rem]  lg:h-[27rem] w-4/5 max-w-full lg:w-full  lg:max-w-4xl flex  top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[30px] overflow-hidden shadow-2xl '>

                <div className='container-img relative max-w-xl flex-1 basis-1/2 bg-dark-blue rounded-tl-3xl rounded-bl-2xl rounded-br-2xl rounded-tr-3xl  sm:rounded-bl-3xl sm:rounded-br-none  
after:absolute after:h-[50px] after:w-[50px] after:bg-white after:right-[-50px] after:bottom-0 after:rounded-bl-[40px]
before:absolute before:h-[50px] before:w-[50px] before:bg-dark-blue before:right-[-50px] before:bottom-0
text-white px-4 py-10'>

                    <span className="icon  sm:text-[17rem] lg:text-[20rem] absolute z-40 right-[-75px] rotate-45 sm:top-[-50px] lg:top-[-75px]">{popUpValues.iconProduct}</span>

                    <div className="container-text absolute bottom-0 text-start">

                        <h1 className='title font-extrabold text-3xl sm:text-5xl lg:text-7xl sm:mb-1'>{popUpValues.nameProduct}</h1>

                        <div className="container-subtitle  text-start mb-4  sm:ml-2">
                            <span className='font-thin text-[1rem] sm:text-[1.5rem]'>{popUpValues?.valueProduct}</span>
                        </div>
                    </div>

                </div>

                <div className='container-description flex-1 basis-1/2 flex justify-center gap-10 text-center flex-col bg-white 
                rounded-tr-3xl rounded-br-3xl px-3 sm:px-2 lg:px-7 py-4 sm:py-7'>

                    <TagExit onClick={closePopUp} className='absolute right-[1.5rem] top-[-5px] hover:cursor-pointer hover:scale-110 transition-all duration-200 ' />

                    <div className="flex-col justify-center items-center gap-[10px] sm:gap-[25px] inline-flex">
                        <h1 className="relative z-50  text-2xl sm:text-4xl">Descrição</h1>

                        <p className="relative z-50 text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem]">{popUpValues?.descriptionText} </p>
                    </div>

                    <div className="container-button relative z-30 
                    ">
                        <a href={`https://api.whatsapp.com/send?phone=5511984681559&text=Ol%C3%A1,%20Gostaria%20de%20obter%20mais%20detalhes%20sobre%20o%20${popUpValues.nameProduct}%20`}
                         target="_blank" rel="noopener noreferrer">
                            <button className='text-center text-white sm:text-xl font-light bg-dark-blue shadow-xl px-10 lg:px-16 py-2
                        rounded-lg flex items-center mx-auto mb-5 hover:scale-105 hover:bg-green-500 transition-all duration-300'>
                                consultar
                                <span> <PiWhatsappLogoLight className='ml-2 text-2xl' /> </span>
                            </button>
                        </a>

                        <span className='subtitle flex  text-[0.7rem] lg:text-[0.9rem] font-light'><PiInfoLight className='text-xl' />para mais detalhes e informações de preços entre em contato conosco.</span>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DescriptionProduct