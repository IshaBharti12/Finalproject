import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import Layout from './Layout.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/profile" element={<Profile/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      <Route path ="/login" element={<Login/>}/>
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
