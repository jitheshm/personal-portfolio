import React from 'react'
import Navbar from '../Admin/Navbar/Navbar'

function AdminLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default AdminLayout