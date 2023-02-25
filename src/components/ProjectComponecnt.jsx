import React, { useEffect, useState } from 'react'
import Carrusel from './Carrusel'
import recipe4 from '../assets/recipemaker/recipe4.jpeg'
import Modal from './Modal'
const ProjectComponecnt = ({ languajes, title, description, images, github }) => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        console.log(languajes)
    })
    return (
        <>
            <div className='flex flex-col pt-5 w-80 h-80 space-y-3 items-center cursor-pointer shadow-xl transition-transform duration-300 ease-out hover:scale-110'
                onClick={() => setShowModal(!showModal)}>

                <h2 className='text-2xl  font-medium'>{title}</h2>
           
                    <img
                        className='w-auto h-4/5 rounded-lg'
                        src={images[0]}></img>
              
            </div>
            <Modal  showModal={showModal} setShowModal={setShowModal} title={title}>
                <img className='w-1/2 mx-auto' src={recipe4}></img>
                <p className='mt-5 text-center'>
                    {description}
                </p>
                <div className='flex mt-5'>
                    <div>
                        <h2 className='font-semibold mb-4'>Lenguajes de Programación:</h2>
                        <div className='flex mb-2 space-x-3'>
                  
                               
                            {languajes.map(el => 
                                (
                                    <>
                                   
                                     <img
                                        className='w-4 h-4'
                                        src={el}></img>
                                    </>
                                )
                            )}
                        </div>

                    </div>

                </div>
                <div className='flex  items-center mt-4 space-x-3'>
                    <img className='w-4 h-4'
                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img>
                    <a href={github}>{github}</a>
                </div>

            </Modal>
        </>
    )
}

export default ProjectComponecnt