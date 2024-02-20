import { Outlet, Navigate } from "react-router-dom";


function AuthLayout() {

  const isAuth = false;
  return (
    <>
    {isAuth ? (
      <Navigate to='/'/>
    ):(
      <>
        <section className="">
          <Outlet />
        </section>
      </>
    )}
      
    </>
  )
}

export default AuthLayout
