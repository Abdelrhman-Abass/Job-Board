import { FC } from 'react'

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";


interface TopBar {
  
}

const TopBar :FC<TopBar> = () => {

    // const isAuth = false;

  return (
    <section>
        <nav className='w-full bg-white sticky top-0 flex justify-between h-10 py-10 lg:hidden'>
            <div className='flex items-center  gap-x-4 w-1/2 font-bold pl-10'>
                <img src="/images/logo-blue.png" alt="logo-blue" className='w-14 h-14 '/>
                <h3 className='text-2xl'>JURO</h3>
            </div>
            <div className='flex justify-end items-center gap-x-4 w-1/2 text-2xl pr-10 '>
                <IoPersonOutline className='hover:text-indigo-600'/>
                <IoMdNotificationsOutline className='hover:text-indigo-600'/>
                <HiMiniBars3BottomRight className='hover:text-indigo-600'/>
            </div>
        </nav>
    </section>
  )
}

export default TopBar
