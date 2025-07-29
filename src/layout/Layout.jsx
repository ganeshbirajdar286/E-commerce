import React from 'react'
import Index from '../component/header/Index'
import { Outlet } from 'react-router'
import Footer from '../component/footer/footer'

function Layout() {
  return (
   <>
    <Index></Index>
    <Outlet></Outlet>
    <Footer></Footer>
   </>
  )
}

export default Layout