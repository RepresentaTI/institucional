

import LogoBranca from '../src/assets/logo-branca-representa.svg?react';
import BigLogoWhite from '../src/assets/logo-branca-representa2.svg?react'
import { CardStack } from './components/CardStack';
import { PiWhatsappLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight } from 'react-icons/pi';
import { PiListMagnifyingGlassLight, PiTruckLight, PiGearLight } from "react-icons/pi";
import TagContact from './components/TagContact';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/styles.css';
import CardProduct from './components/CardProduct';
import DescriptionProduct from './components/DescriptionProduct';
import CardValues from './components/CardValues';
import { useState, useEffect, useRef, useCallback } from 'react';
import ButtonScrollToTop from './components/ButtonScrollToTop';

function App() {
  const CARDS = [
    {
      id: 0,
      name: "Maria Clara",
      designation: "Dona de Supermercado",
      content: (
        <p>
          Essa empresa oferece soluções incríveis! Suas ferramentas me ajudaram a melhorar a performance dos meus projetos de forma impressionante.
        </p>
      ),
    },
    {
      id: 1,
      name: "Vanessa Marques",
      designation: "Lojista",
      content: (
        <p>
          A qualidade dessa empresa é de outro nível. Eles têm uma visão futurista e estão sempre à frente do mercado, inovando de forma extraordinária. Eles são referência em tecnologia.
        </p>
      ),
    },
    {
      id: 2,
      name: "Rodrigo Silva",
      designation: "Empresário",
      content: (
        <p>
          Se há uma regra em tecnologia, é que você definitivamente deve falar sobre essa empresa! Eles realmente mudaram o jogo com suas soluções inovadoras e práticas.
        </p>
      ),
    },
    {
      id: 3,
      name: "Bruna Oliveira",
      designation: "Empresária",
      content: (
        <p>
          Nunca vi uma empresa de tecnologia tão dedicada e inovadora! Eles realmente transformam ideias em soluções reais, com impacto positivo no dia a dia das pessoas.
        </p>
      ),
    },
    {
      id: 4,
      name: "Carlos Souza",
      designation: "Engenheiro de Software",
      content: (
        <p>
          Estou impressionado com o nível de inovação e profissionalismo desta empresa. Eles sempre entregam soluções tecnológicas que superam as expectativas.
        </p>
      ),
    },

  ];


  const countSlide = () => {
    if (window.innerWidth < 768) return 1
    else if (window.innerWidth < 1024) return 2
    else return 3

  }

  const valuesCards = [
    {
      name: 'Integridade',
      text: 'Agir com honestidade, comprometimento e transparência'
    },
    {
      name: 'Inovação',
      text: 'Trazer novas soluções acessíveis, com o uso da tecnologia, para todas as regiões'
    },
    {
      name: 'Respeito',
      text: 'Tomar decisões de forma justa e não tendenciosas.'
    }

  ]

  const [indexFocused, setIndexFocused] = useState<number>(0)

  const IntervalRef = useRef<any>()

  useEffect(() => {
    IntervalRef.current = setInterval(() => {

      setIndexFocused((prev) => (prev + 1) % valuesCards.length)

    }, 4000)

    return () => clearInterval(IntervalRef.current)

  }, [])

  interface DataObject {
    nameProduct: string,
    descriptionText: string,
    valueProduct?: string
  }

  const [popupValue, setPopupValue] = useState<DataObject | null>(null);


  const handleChildClick = useCallback((data: DataObject) => {
    setPopupValue(data);
  }, [])

  const closePopup = useCallback(() => {
    setPopupValue(null);
  }, []);

  return (

    <div className={`${popupValue && 'before:min-h-[100vh] before:min-w-[100vw] before:z-20 before:bg-dark-blue/70 before:fixed'}`} >

      <TagContact />

      <nav className=" flex justify-center  sm:block max-w-96 w-full  mt-6   sm:ml-20  absolute top-0 z-10" >

        <ul className="flex gap-6  sm:gap-0 sm:justify-between items-center text-white font-extralight">
          <a href="/">
            <li className='cursor-pointer text-[14px] sm:text-[1rem]'><LogoBranca /></li>
          </a>
          <a href="#Sobre">
            <li className='cursor-pointer text-[14px] sm:text-[1rem] hover:opacity-90'>Sobre nós</li>
          </a>
          <a href="#Produtos">
            <li className='cursor-pointer text-[14px] sm:text-[1rem] hover:opacity-90'>Produtos</li>
          </a>
          <a href="#Contato">
            <li className='cursor-pointer text-[14px] sm:text-[1rem] hover:opacity-90'>Contato</li>
          </a>
        </ul>
      </nav>

      <header className='before:absolute  before:bottom-[-5rem]  before:h-20 before:w-20 before:bg-mid-blue
      after:absolute  after:bottom-[-5rem]  after:h-20 after:w-20 after:bg-white after:rounded-tl-[50px] relative z-0
      flex items-center  bg-gradient-to-b from-dark-blue to-mid-blue  h-80 sm:h-96 lg:h-[32rem] rounded-br-[50px]'>

        <div className="flex flex-col m-auto sm:ml-20 gap-2 ">
          <h1 className='font-aileron font-black  text-6xl sm:text-6xl lg:text-8xl text-white'>
            Representa</h1>
          <p className='text-white font-light ml-2'>Seu parceiro no mundo digital</p>
        </div>
        <BigLogoWhite className='mt-52 absolute hidden sm:block  sm:w-80  lg:w-[400px] xl:w-[550px] right-0 z-10' />

      </header>

      <main className='mx-12 sm:mx-14 lg:mx-20 relative z-10'>

        <section id='Sobre' className='flex gap-9 sm:gap-0 mb-7 mt-9 sm:mt-0 flex-wrap sm:flex-nowrap items-center justify-around'>

          <img src="../src/assets/cells.png" className=' hidden sm:block sm:h-[400px] sm:w-[350px] lg:h-[600px] lg:w-[500px] xl:h-[850px] 
          xl:w-[700px] sm:mt-[-35px] lg:mt-[-100px]'
            alt="celulares com o simbolo da representa" />

          <div className='  sm:max-w-[21rem] lg:max-w-[27rem] xl:max-w-[90%] text-center  sm:text-left'>
            <h2 className='font-bold mb-3 sm:mb-5 lg:mb-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-clip-text
            text-transparent bg-gradient-to-r from-dark-blue to-mid-blue to-30%'>Sobre nós</h2>

            <p className='text-mid-blue text-[0.9rem] lg:text-[1.2rem] xl:text-[1.5rem]  font-light'>
              Nosso objetivo é transformar a identidade online de empresas e otimizar
              a comunicação entre comércios e clientes, promovendo uma verdadeira
              transformação digital através de soluções tecnológicas inovadoras
              e acessíveis que atendem às necessidades de empresas de todos os setores
              e regiões do país.
            </p>

          </div>
        </section>


        <section id='Produtos' className='text-center relative'>

          <h3 className=' text-2xl sm:text-3xl lg:text-4xl  font-semibold bg-clip-text text-transparent 
          bg-gradient-to-r from-dark-blue from-20% to-mid-blue to-70% mb-5  sm:mb-8 '>nossos produtos</h3>

          <div className="container-cards">

            <Swiper
              slidesPerView={countSlide()}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper relative z-10 cursor-grab"
            >
              <SwiperSlide>
                <CardProduct handleChildClick={handleChildClick} imgBackground='../src/assets/city.jpg'
                  name='Catálogo' text='Melhore o contato com seus clientes e faça parte do maior catálogo de empresas'
                  value='Gratuito' description='Liste seu estabelecimento em nosso catálogo online para aumentar a visibilidade e alcançar novos clientes 
Conecte-se diretamente com consumidores locais e faça parte da comunidade de comércios em destaque' icon={<PiListMagnifyingGlassLight />} />
              </SwiperSlide>

              <SwiperSlide>
                <CardProduct handleChildClick={handleChildClick} imgBackground='../src/assets/city.jpg'
                  name='Delivery' text='Melhore o contato com seus clientes e faça parte do maior catálogo de empresas'
                  value='A partir de 99,90' description='Integre nosso sistema de delivery para aumentar suas vendas, alcançar
                  novos clientes e oferecer conveniência.
Amplie sua presença online e potencialize suas vendas com nosso sistema de entrega eficiente' icon={<PiTruckLight />} />
              </SwiperSlide>

              <SwiperSlide>
                <CardProduct handleChildClick={handleChildClick} imgBackground='../src/assets/city.jpg'
                  name='Serviços Gerais' text='Melhore o contato com seus clientes e faça parte do maior catálogo de empresas'
                  value='Solicitar orçamento' description='
Nossos softwares de automação ajudam a transformar sua rotina, automatizando tarefas repetitivas, aumentando a eficiência e permitindo que você foque no que realmente
importa, com sistemas adaptados às suas necessidades.' icon={<PiGearLight />} />
              </SwiperSlide>

            </Swiper>

          </div>
        </section>

        <section className='values-Representa  sm:mt-5 min-h-48 sm:min-h-52 lg:min-h-80 flex w-full  sm:justify-between 
        text-center  sm:text-left relative items-center'>

          <div className="w-full absolute  flex-col gap-1 justify-start items-start  inline-flex">

            <div className="self-stretch text-[3rem] sm:text-[3.75rem] lg:text-[80px] xl:text-[99px] font-black font-['Aileron'] bg-clip-text
            text-transparent bg-gradient-to-r from-dark-blue to-mid-blue" >{valuesCards[indexFocused]?.name}</div>

            <div className=" w-full sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px] text-dark-blue 
              lg:text-xl xl:text-2xl font-normal font-['Inter']">
              {valuesCards[indexFocused]?.text}
            </div>

          </div>

          <div className="container-img-values w-full relative sm:right-[-400px] lg:right-[-500px] xl:right-[-800px]">

            <div className="container-cards flex  w-full flex-wrap justify-center sm:justify-normal sm:flex-col sm:flex-nowrap  min-w-[18rem]
            gap-1 sm:gap-4 lg:gap-7 absolute sm:right-[2rem] mt-[5rem] sm:mt-5 lg:mt-20 z-10  ">

              <div className='sm:ml-5 sm:w-full z-[15]'>
                <CardValues numberOrdinal={1} nameValue='Integridade' focus={indexFocused === 0} />
              </div>

              <div className='sm:ml-10 sm:w-full z-[15]'>
                <CardValues numberOrdinal={2} nameValue='Inovação' focus={indexFocused === 1} />
              </div>

              <div className='sm:ml-16 sm:w-full z-[15]'>
                <CardValues numberOrdinal={3} nameValue='Respeito' focus={indexFocused === 2} />
              </div>

            </div>

            <img src="../src/assets/img-computer.png " alt="imagem de computador exibindo a logo da representa"
              className='max-w-4xl w-4/5 lg:w-[90%] hidden sm:block   relative z-0 right-0' />

          </div>

        </section>

        <section className=" h-[30rem] sm:h-[40rem] flex items-center flex-col justify-center w-full mt-28 text-center sm:text-left sm:mt-0" >

          <h2 className='font-semibold mb-16 text-2xl sm:text-3xl lg:text-4xl bg-clip-text text-transparent
            bg-gradient-to-r from-dark-blue to-mid-blue to-30%'>Avaliações de nossos clientes</h2>

          <CardStack items={CARDS} />

        </section>

      </main>

      <footer id='Contato' className='bg-gradient-to-b w-full  from-dark-blue to-mid-blue rounded-tr-[50px]
      before:absolute  before:top-[-5rem]  before:h-20 before:w-20 before:bg-dark-blue 
      after:absolute  after:top-[-5rem]  after:h-20 after:w-20 after:bg-white after:rounded-bl-[50px] relative '>

        <div className="container-footer relative  px-12 sm:px-20 pt-9
          flex flex-wrap-reverse gap-12 sm:gap-16 lg:gap-20">


          <div className="w-full flex-[2_2_0%]  mb-40 relative items-center">

            <div className="container-text-footer">

              <div className="w-full text-white text-[3rem] lg:text-[64px] font-black font-['Aileron'] text-center mb-5">Envie um email</div>
              <div className="w-full text-white sm:text-xl font-light mb-2 text-center">
              Quer nos acompanhar de perto? Siga nossas redes sociais e fique por dentro das novidades, ofertas exclusivas e muito mais!


              </div>
            </div>


            <span className='flex my-8 justify-center text-xl text-white font-extralight 
            relative after:h-[2px] after:bg-white after:absolute after:w-[47%]
            after:mt-4 after:right-0 before:h-[2px] before:bg-white before:absolute before:w-[47%]
            before:mt-4 before:left-0'>ou</span>

            <div className="flex gap-3 w-full  justify-center mt-3">

              <a href="https://www.instagram.com/representa.online?igsh=MXd1aHg1Z3AxNW9pbA==" target="_blank" rel="noopener noreferrer">
                <div className='  cursor-pointer relative text-4xl text-white  w-14 h-14 flex rounded-full justify-center items-center border-2 border-white transition-all duration-300 hover:scale-90 
              hover:rotate-12  hover:bg-pink-500'><PiInstagramLogoLight /></div>
              </a>

              <a href="https://api.whatsapp.com/send?phone=5511984681559&text=Gostaria%20de%20conhecer%20mais%20detalhes%20sobre%20a%20Representa,%20assim%20como%20seus%20produtos%20e%20serviços"
                target="_blank" rel="noopener noreferrer">
                <div className=' cursor-pointer  relative text-4xl text-white w-14 h-14 flex rounded-full justify-center items-center border-2 border-white transition-all duration-300 hover:scale-90 
              hover:rotate-12  hover:bg-green-500'><PiWhatsappLogoLight /></div>
              </a>

              <a href="https://www.linkedin.com/in/representa-online-4729032b5" target="_blank" rel="noopener noreferrer">
                <div className='  cursor-pointer relative text-4xl text-white w-14 h-14 flex rounded-full justify-center items-center border-2 border-white transition-all duration-300 hover:scale-90 
              hover:rotate-12  hover:bg-blue-800'><PiLinkedinLogoLight /></div>
              </a>
            </div>
          </div>

        </div>

        <div className=" container-bar-footer w-full sm:h-auto  py-10 lg:py-0 lg:pb-0 lg:h-[4rem] rounded-t-2xl bg-slate-950   absolute bottom-0">
          <span className='flex  justify-center lg:justify-end items-center h-full mr-5 text-white font-thin  lg:mt-0' >Copyright © Representa Online 2024</span>
        </div>

      </footer>

      {popupValue && <DescriptionProduct popUpValues={popupValue} closePopUp={closePopup} />}
      <ButtonScrollToTop />

    </div >
  )
}

export default App
