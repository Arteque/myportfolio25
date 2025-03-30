
import { toast } from "react-toastify"
export const ToastSetup = (toastType, icon, toastAutoClose, toastHideProgressBar, toastCloseOnClick, toastPauseOnHover, toastProgress, toastTheme, message) => {
    const setup =  {
        icon: icon,
        position: "bottom-right",
        autoClose: toastAutoClose,
        hideProgressBar: toastHideProgressBar,
        closeOnClick: toastCloseOnClick,
        pauseOnHover: toastPauseOnHover,
        draggable: false,
        progress: toastProgress,
        theme: toastTheme,
      }


      const totastTypeHandler = () => {
        switch(toastType){
            case "success":
              return  toast.success(message, setup)
            break
            case "warn":
              return  toast.warn(message, setup)
            break
            case "error":
              return  toast.error(message, setup)
            break

            default:
                return  toast.success(message, setup)
            break
        }
    }

    totastTypeHandler()
}