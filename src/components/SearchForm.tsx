import { FC } from 'react'
import { CiSearch } from "react-icons/ci";


interface SearchFormProps {
  
}
function submit(){
    console.log('submit')
}

const SearchForm: FC<SearchFormProps> = () => {
  return (

        <div className="bg-white py-8 px-6 w-full lg:w-2/3 shadow rounded-2xl lg:pl-16 lg:pt-5 lg:rounded-[500px] ">
            <form className="mb-0 space-y-6 lg:space-x-5 flex-row lg:flex  max-h-full" action="#" method="POST">

                <div className='w-full lg:w-1/4 border-b border-gray-200  flex justify-start items-center gap-x-3'>
                    <CiSearch onClick={submit} className='lg:-mb-5'/>
                    <input type='text' required className="h-10 w-full focus:outline-none placeholder:text-xl placeholder:font-sm lg:-mb-5" placeholder='Job Title' />
                    
                </div>

                <div className="relative flex w-full lg:w-1/4 border-b border-gray-200">
                    <svg className="w-2 h-4 absolute top-0 right-0 m-4 pointer-events-none font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <div className='w-full items-center gap-x-3'>
                        <select className=" text-gray-400 text-xl  w-2/3 block h-10 pl-7 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option>Country</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Black</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Gray</option>
                            <option>White</option>
                        </select>
                    </div>
                </div>

                <div className="relative flex w-full lg:w-1/4 border-b border-gray-200">
                    <svg className="w-2 h-4 absolute top-0 right-0 m-4 pointer-events-none font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                    <div className='w-full  items-center gap-x-3'>
                        <select className=" text-gray-400 text-xl w-2/3 block h-10 pl-7 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option>All Categories</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Black</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Gray</option>
                            <option>White</option>
                        </select>
                    </div>
                </div>

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 lg:px-20 lg:py-3 border  rounded-3xl shadow-sm text-sm font-medium text-white bg-[#F9AB00] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-[#F9AB00] hover:text-[#F9AB00] border-[#F9AB00]">Find Jobs</button>
                </div>
            </form>
        </div>

  )
}

export default SearchForm