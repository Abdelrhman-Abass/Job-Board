import { TopBar ,Footer} from '@/components'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='w-full'>
      <TopBar />
      
      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  )
}

export default RootLayout
