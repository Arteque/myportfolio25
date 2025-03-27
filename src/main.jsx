import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './Template/Root'
import Start from './Pages/Start'
import "./_mixin.scss"
import "./Style.scss"

const router = createBrowserRouter([{
  path:"/",
  element:<Root />,
  errorElement:<Error />,
  children:[
    {
      path:"/",
      element:<Start />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
