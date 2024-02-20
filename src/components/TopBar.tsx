import { FC } from 'react'

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

interface TopBar {
  
}

const TopBar :FC<TopBar> = () => {

    const isAuth = false;

  return (
    <section>
        <nav className='w-full bg-white sticky top-0 flex justify-between h-10 py-10 lg:hidden'>
            <div className='flex items-center  gap-x-4 w-1/2 font-bold pl-10'>
                <img src="/public/images/logo-blue.png" alt="logo-blue" className='w-14 h-14 '/>
                <h3 className='text-2xl'>JURO</h3>
            </div>
            <div className='flex justify-end items-center gap-x-4 w-1/2 text-2xl pr-10 '>
                <IoPersonOutline className='hover:text-indigo-600'/>
                <IoMdNotificationsOutline className='hover:text-indigo-600'/>
                <HiMiniBars3BottomRight className='hover:text-indigo-600'/>
            </div>
        </nav>

        <div className='h-[600px] lg:h-[900px]  w-full '>
            <div className='bg-[url("/images/bg-slider4.jpg")] w-full h-full object-cover overflow-hidden'>
                <div className='w-full relative justify-between hidden items-center lg:flex py-10'>
                    <div className='flex justify-start items-center gap-x-4 font-bold w-1/4 ml-10'>
                        <Link to='/' className='w-12 h-12'>
                            <img src="/images/logo-white.png" alt="logo-white" />
                        </Link>
                        <p className='text-3xl text-white '>JURO</p>
                    </div>
                    
                    <div className='flex items-center justify-center gap-x-7 w-1/4 text-white'>
                        <Link to='/jobs' className='text-lg leading-6 font-semibold hover:text-indigo-300 transition ease-in-out hover:translate-y-1 delay-75 '>Find Jobs</Link>
                        <Link to='/companies' className='text-lg leading-6 font-semibold hover:text-indigo-300 transition ease-in-out hover:translate-y-1 delay-75'>Companies</Link>
                    </div>

                    <div className='flex gap-x-10  mr-10 w-1/3 justify-end' >
                        {isAuth?(
                            <div className="flex bg-white w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
                                <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">
                            
                                    <a title="Go to about me page" className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ):(
                            <Link to='/login'>
                                <button className="rounded-full text-lg px-6 py-2 font-semibold text-[#302EA7] bg-white hover:shadow-lg hover:bg-transparent hover:text-white border-white border-2 hover:text-opacity-85 transition-all">Login / Register</button>
                            </Link>
                        )}
                        <Link to='/add-job'>
                            <button className="rounded-full text-lg px-6 py-2 font-semibold text-[#302EA7] hover:bg-transparent hover:text-white border-white border-2 bg-white hover:shadow-lg hover:text-opacity-85 transition-all">Add Job</button>
                        
                        </Link>
                        
                    </div>
                </div>


                <div className="flex flex-col space-y-4 lg:space-y-10 px-4 py-3 items-center justify-center lg:pt-[150px]">
                    <h1 className='text-white text-3xl lg:text-5xl font-bold p-7 '>The Easiest Way to Get Your New Job</h1>
                    <SearchForm  />
                    <p className='text-white text-lg justify-center px-8 items-center lg:text-xl font-medium leading-9'>Popular Searches : Designer Developer Web IOS PHP Senior Engineer</p>
                    
                </div>
            </div>

        </div>

    </section>
  )
}

export default TopBar
