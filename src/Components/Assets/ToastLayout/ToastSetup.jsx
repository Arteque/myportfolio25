import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import ToastLayout from "./ToastLayout"
const ToastSetup = ({message, icon, theme, toastType}) => {


    
    const [toastSetup, setToastSetup] = useState(
        {
          icon: {icon},
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: false,
          theme: {theme},
        }
      
)

    const totastTypeHandler = () => {
        switch(toastType){
            case "success":
              return  toast.success(<ToastLayout message={message} />, toastSetup)
            break
            case "warn":
              return  toast.warn(<ToastLayout message={message} />, toastSetup)
            break

            default:
                return  toast.success(<ToastLayout message={message} />, toastSetup)
            break
        }
    }

    useEffect(() => {

    },[toastType])

  return (
    totastTypeHandler()
  )
}

export default ToastSetup
