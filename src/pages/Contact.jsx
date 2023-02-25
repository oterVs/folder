import React from 'react'
import NavBar from '../components/NavBar'
import { AiFillMail, AiFillLinkedin  } from 'react-icons/ai'
import { AiOutlineMobile } from 'react-icons/ai'


const Contact = () => {
  return (
    <div className='h-screen w-full flex ' >
    <NavBar></NavBar>
    <div className='flex w-full flex-col p-10 space-y-4'>
       <h3 className='text-5xl'>Contacto</h3>
       <div className='flex flex-col h-full p-5 justify-center  space-y-5'>
          <div className='flex items-center space-x-3'>
            <AiFillMail className='h-8 w-8'></AiFillMail>
            <p className='text-lg'>vicentesaavedra45@gmail.com</p>
          </div>
          <div  className='flex items-center space-x-3'>
            <AiOutlineMobile className='h-8 w-8'></AiOutlineMobile>
            <p className='text-lg'>+593 96 366 2387</p>
          </div>
          <div  className='flex items-center space-x-3'>
            <AiFillLinkedin className='h-8 w-8'></AiFillLinkedin >
            <a className='text-lg' href='https://www.linkedin.com/in/vicentesaavedrao/'>https://www.linkedin.com/in/vicentesaavedrao/</a>
          </div>
          
       </div>
    </div>
 </div>
  )
}

export default Contact