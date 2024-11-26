import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Cities } from './Pages/Cities'
import { CityDetails } from './Pages/CityDetails'
import { NotFound } from './Pages/NotFound'
import { StandarLayout } from './Layouts/StandarLayout'
import './App.css'
import SignIn from './Pages/SingIn'



const router = createBrowserRouter([
  { element: <StandarLayout></StandarLayout> ,
    children: [
      { path: '/cities', element: <Cities></Cities> },
      { path: '/signin', element: <SignIn></SignIn> },
      { path: '/cities/:id', element: <CityDetails /> },
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
    ]
  },
  { path: '/*', element: <NotFound></NotFound> }, // Catch-all route for invalid paths
])
function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
