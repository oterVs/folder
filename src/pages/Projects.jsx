import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import projects from '../utils/Projects'
import ProjectComponecnt from '../components/ProjectComponecnt'
const Projects = () => {

  const [showModal, setShowModal] = useState(false)



  return (
    <div className='h-screen w-full flex ' >
      <NavBar></NavBar>
      <div className='flex flex-col  w-full p-10 space-y-4'>
        <h3 className='text-5xl'>Proyectos</h3>
        <div className='flex  p-5 justify-around'>
          {projects.map(el => (
            <ProjectComponecnt images={el.images}
                               title={el.title}
                               description={el.description}
                               github={el.github}
                               languajes={el.languajes}></ProjectComponecnt>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Projects