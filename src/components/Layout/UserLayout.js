import React from 'react'
import Navbar from '../Navbar/Navbar'

function UserLayout({children}) {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    </>
  )
}

export default UserLayout