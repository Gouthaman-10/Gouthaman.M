import React from 'react'
import Themes from './Themes/Themes'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Themes />
    </>
  )
}

export default AppLayout
