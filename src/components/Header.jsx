import React from 'react'
import image from "/public/image.png"
import { HiChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';
// Akbar
function Header() {
  return (
    <>
      <div className='bg-[#DEEEFC]'>
        <div className="container flex mx-auto gap-x-[150px]">
          <Link to={"/"}>
            <img className='w-[150px]' src={image} alt="" />
          </Link>
          <div className='flex items-center gap-x-[50px]'>
            
            <div className="flex items-center">
              <h1>ПРО НАС</h1>
              <HiChevronDown />
            </div>

            <div>
              <p>ЦЕНЫ</p>
            </div>
            <div>
              <Link to={"/blog"}>Блог</Link>
            </div>
            <div>
              <Link to={"/blogpost"}>Блог пост</Link>
            </div>
            <div>
              <Link to={"/video"}>Видео инструкции</Link>
            </div>
            <div>
              <Link to={"/contact"}>КОНТАКТЫ</Link>
            </div>
            <div>
              <Link to={"/faq"}>Faq</Link>
            </div>


            <button className='rounded-4xl border-2 border-blue-600 px-[17px] py-[5px]'>Вход</button>
            <h1 className='rounded-4xl border-2 border-blue-600 px-[25px] py-[5px] hover:bg-blue-600 hover:text-white'>регистрация</h1>


            <select>
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

