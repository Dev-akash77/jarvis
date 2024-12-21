import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StoreContextProvider from './Context/Store'
import Home from './Pages/Home'
import Jarvis from './Pages/Jarvis'

const App = () => {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error/>
  },
  {
    path:"/jarvis",
    element:<Jarvis />
  }
])
  return (
   <StoreContextProvider>
    <RouterProvider router={router}/>
   </StoreContextProvider>
  )
}

export default App