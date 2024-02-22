import TopBar from '@/components/TopBar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='w-full'>
      <TopBar />
      
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout
