import { Outlet } from "react-router-dom"
import MainHeader from "../Components/MainHeader"
import MainFooter from "../Components/MainFooter"
import { ToastContainer } from "react-toastify"

export const Root = () => {


  return (
    <>
        {/* Main Header  Start*/}
        <MainHeader />
        {/* Main Header End*/}

        {/* Main Content Start*/}
        <Outlet />
        {/* Main Content End*/}
        
        {/* Main Footer Start */}
        <MainFooter />
        {/* Main Footer End */}
        <ToastContainer />
    </>
  )
}
