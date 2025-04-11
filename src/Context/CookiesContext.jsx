import { createContext, useState, useEffect } from "react";

//Create Context
const CookieContext = createContext()

const CookiesProvider = ({children}) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(false)

    //Check if Cookies were accepted
    useEffect(()=> {
        const accepted = localStorage.getItem('cookiesAccepted')
        console.log(cookiesAccepted)
        if(accepted === 'true'){
            setCookiesAccepted('true')
        }
    },[])


    const acceptCookies = () => {
        setCookiesAccepted('true')
        localStorage.setItem('cookiesAccepted', 'true')
    }

    const rejectCookies = () => {
        setCookiesAccepted('false')
        localStorage.setItem('cookiesAccepted', 'false')
    }

    return(
        <CookieContext.Provider value={{cookiesAccepted, acceptCookies, rejectCookies}}>
            {children}
        </CookieContext.Provider>
    )

}

export {CookieContext, CookiesProvider}