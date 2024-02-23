import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { CiBookmark } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";


import { Link } from 'react-router-dom';
import { useAos } from '@/hooks/useAos';


const JobCard: FC = () => {
  const [jobs, setJobs] = useState<Job[]>(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://job-search-back-end-application.onrender.com/api/v1/job');
        setJobs(response.data.result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    console.log(jobs)

    fetchData();
  }, []);
  useAos();


  return (
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-2' data-aos="zoom-in-up">
      { jobs ?(
        jobs.map((job) => (
            <div key={job._id} data-aos="zoom-in-up" className='rounded-[37px] bg-gradient-to-r from-[#f9f7f7] to-[#f7f1f1] shadow-inner sm:shadow-2xl -translate-x-4 -translate-y-4 sm:translate-x-0 sm:translate-y-0 p-10 group'>

                <div className='flex items-center justify-between  '>
                    <h2 className='font-jost font-semibold text-xl py-3 leading-10 text-[#202124] hover:text-indigo-600'>{job.jobTitle}</h2>
                    <CiBookmark className='text-2xl font-bold group-hover:text-indigo-600' />
                </div>

                <p className='text-[#696969]'>{job.jobDescription}</p>

                <div className='flex justify-between '>
                    <Link to='/jobs' className='flex w-1/3 text-[#454545] hover:text-indigo-600 font-jons transition ease-in-out hover:translate-y-1 delay-75  leading-8 font-semibold space-x-2 items-center py-2'>
                        <IoLocationOutline />
                        <p>{job.jobLocation}</p>
                    </Link>
                    <Link to='/jobs' className='flex w-1/3 transition ease-in-out hover:translate-y-1 delay-75  text-[#454545] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 items-center py-2'>
                        <CgWorkAlt />
                        <p>{job.seniorityLevel}</p>
                    </Link>

                    <Link to='/jobs' className='flex w-1/4 transition ease-in-out hover:translate-y-1 delay-75  bg-[#dde1e5] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 justify-center py-2 text-[#1967D2] rounded-full mt-3 '>
                      <p className=''>{job.workingTime}</p>
                    </Link>

                </div>
            </div>
          ))
      ):(
        <p>Loading data...</p>
      )
      }
      { jobs ?(
        jobs.map((job) => (
            <div key={job._id} data-aos="zoom-in-up" className='rounded-[37px] bg-gradient-to-r from-[#f9f7f7] to-[#f7f1f1] shadow-inner sm:shadow-2xl -translate-x-4 -translate-y-4 sm:translate-x-0 sm:translate-y-0 p-10 group'>

                <div className='flex items-center justify-between  '>
                    <h2 className='font-jost font-semibold text-xl py-3 leading-10 text-[#202124] hover:text-indigo-600'>{job.jobTitle}</h2>
                    <CiBookmark className='text-2xl font-bold group-hover:text-indigo-600' />
                </div>

                <p className='text-[#696969]'>{job.jobDescription}</p>

                <div className='flex justify-between '>
                    <Link to='/jobs' className='flex w-1/3 text-[#454545] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 items-center py-2'>
                        <IoLocationOutline />
                        <p>{job.jobLocation}</p>
                    </Link>
                    <Link to='/jobs' className='flex w-1/3 text-[#454545] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 items-center py-2'>
                        <CgWorkAlt />
                        <p>{job.seniorityLevel}</p>
                    </Link>

                    <Link to='/jobs' className='flex w-1/4  bg-[#dde1e5] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 justify-center py-2  text-[#1967D2] rounded-full mt-3 '>
                      <p className=''>{job.workingTime}</p>
                    </Link>

                </div>
            </div>
          ))
      ):(
        <p>Loading data...</p>
      )
      }
      { jobs ?(
        jobs.map((job) => (
            <div key={job._id} data-aos="zoom-in-up" className='rounded-[37px] bg-gradient-to-r from-[#f9f7f7] to-[#f7f1f1] shadow-inner sm:shadow-2xl -translate-x-4 -translate-y-4 sm:translate-x-0 sm:translate-y-0 p-10 group'>

                <div className='flex items-center justify-between  '>
                    <h2 className='font-jost font-semibold text-xl py-3 leading-10 text-[#202124] hover:text-indigo-600'>{job.jobTitle}</h2>
                    <CiBookmark className='text-2xl font-bold group-hover:text-indigo-600' />
                </div>

                <p className='text-[#696969]'>{job.jobDescription}</p>

                <div className='flex justify-between '>
                    <Link to='/jobs' className='flex w-1/3 text-[#454545] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 items-center py-2'>
                        <IoLocationOutline />
                        <p>{job.jobLocation}</p>
                    </Link>
                    <Link to='/jobs' className='flex w-1/3 text-[#454545] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 items-center py-2'>
                        <CgWorkAlt />
                        <p>{job.seniorityLevel}</p>
                    </Link>

                    <Link to='/jobs' className='flex w-1/4  bg-[#dde1e5] hover:text-indigo-600 font-jons leading-8 font-semibold space-x-2 justify-center py-2 text-[#1967D2] rounded-full mt-3 '>
                      <p className=''>{job.workingTime}</p>
                    </Link>

                </div>
            </div>
          ))
      ):(
        <p>Loading data...</p>
      )
      }
      
    </div>
  );
};

export default JobCard;
