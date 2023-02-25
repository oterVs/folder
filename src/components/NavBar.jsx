import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';
import profile from '../assets/profile.jpg'
import links from '../utils/LinksNav'

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)



  function handleShowMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <div className={` w-auto h-full flex flex-col p-5 `}>


      <AiOutlineMenu className={`w-7 h-7 cursor-pointer transition-transform duration-300 ease-in-out scale-${showMenu ? 1 : 0}`} onClick={handleShowMenu}></AiOutlineMenu>

      <AiOutlineClose className={`w-7 h-7 cursor-pointer transition-transform duration-300 ease-in-out -translate-y-7 scale-${showMenu ? 0 : 1}`} onClick={handleShowMenu}></AiOutlineClose>


      <nav className={`h-auto list-none w-48 flex flex-col justify-center items-center space-y-5 transition-width duration-700 ease-in-out w-${showMenu ? '7' : '48'}`}>

        {!showMenu ? <><li>
          <img className='h-40 w-40 rounded-full'
            src={profile}></img>
        </li>
          {links.map((el) => (
            <li>
              <Link to={el.to} className="inline-block relative underline-class ">{el.name}</Link>
            </li>
          )
          )}
        </> : null}

      </nav>

    </div>
  )
}

export default NavBar