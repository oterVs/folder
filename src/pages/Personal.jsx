import React from 'react'
import NavBar from '../components/NavBar'

import dev from '../assets/profile/dev.svg'
const Personal = () => {
  const downloadUrl = "https://drive.google.com/uc?id=1_jgy05ihZvsZWr23U1FtWdG9R7DmyMco&export=download&authuser=0";
  //https://drive.google.com/file/d/1_jgy05ihZvsZWr23U1FtWdG9R7DmyMco/view?usp=share_link

  const handleDowload = () => {

  }

  return (

    <div className='h-screen w-full flex' >
      <NavBar></NavBar>
      <div className='flex flex-col h-full w-full p-10 space-y-4'>
        <h3 className='text-5xl'>Hola,</h3>
        <h3 className='text-5xl'>Mi nombre es <span className='text-blue-800 font-semibold'>Vicente Saavedra</span></h3>
        <div className='flex p-5 justify-center items-center w-full  flex-col md:flex-row'>

          <div className='w-1/2'>
            <img className='h-40 w-40 md:h-80 md:w-80 rounded-lg m-auto' src={dev}></img>
          </div>

          <div className='flex flex-col items-center md:space-y-6 w-full md:w-1/2 h-auto p-5 '>
            <p className='text-center leading-7 mb-3'>
              Soy un programador junior que está entusiasmado por aprender y crecer en el campo de la programación.
              Me apasiona resolver problemas para crear soluciones efectivas y eficientes. Tengo conocimientos básicos en lenguajes de programación como Python, Java y JavaScript, y estoy dispuesto a aprender nuevos lenguajes y herramientas para mejorar mis habilidades. Siempre estoy buscando nuevas oportunidades para desafiarme y mejorar mis habilidades de programación.</p>
            
            <a href={downloadUrl} download>
              <button onClick={handleDowload} className='w-36 h-14 bg-blue-800 p-4 text-white font-semibold animate-bounce rounded-full shadow-lg'>Descargar CV</button>
            </a>

          </div>



        </div>
      </div>
    </div>
  )
}

export default Personal