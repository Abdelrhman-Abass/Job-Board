import { JobCard , HomeHeader} from '@/components'
import { useAos } from '@/hooks/useAos';
import { FC } from 'react'


interface HomeProps {
  
}
// https://job-search-back-end-application.onrender.com
const Home: FC<HomeProps>  = () => {
  useAos();
  return (
    <section className='w-full'>
      <HomeHeader />

      <div className='p-4 flex flex-col justify-center items-center mt-10'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-[35px] text-[#202124] font-jost p-5'>Most Popular Jobs</h1>
          <p className='text-xl font-jost font-medium pb-9 text-[#77838F]'>Know your worth and find the job that qualify your life </p>
        </div>

        <div className='p-3'>
          <JobCard />
        </div>
        
      </div>

      <div className=' flex flex-col justify-center items-center mt-[100px]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-[35px] text-[#202124] font-jost p-5'>How It Works?</h1>
          <p className='text-xl font-jost font-medium pb-9 text-[#77838F]'>Job for anyone, anywhere</p>
        </div>

        <div className='flex flex-col gap-y-10 lg:flex-row w-full items-center justify-around px-40 py-12' data-aos="zoom-in-up">
          <div className='flex flex-col items-center '>
            <img src="/images/f4.jpg" alt="f4" className='size-40 mb-9 transition ease-in-out hover:-translate-y-4 delay-50' />
            <p className='text-xl font-semibold leading-8  w-3/4  text-[#202124] font-jost'>Register  an account to start</p>

          </div>
          <div className='flex flex-col  items-center '>
              <img src="/images/f5.jpg" alt="f5" className='size-40 mb-9 transition ease-in-out hover:-translate-y-4 delay-50'/>
              <p className='text-xl font-semibold leading-8  w-3/4  text-[#202124] font-jost'>Explore over thousands of resumes</p>
          </div>
          <div className='flex flex-col items-center '>
            <img src="/images/f5.jpg" alt="f6" className='size-40 mb-9  transition ease-in-out hover:-translate-y-4 delay-50' />
            <p className='text-xl font-semibold leading-8 w- w-3/4  text-[#202124] font-jost'>Find the most suitable candidate</p>
          </div>
        </div>
        
      </div>

      
    </section>
  )
}

export default Home





