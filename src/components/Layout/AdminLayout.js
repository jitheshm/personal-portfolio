import React from 'react'
import Navbar from '../Admin/Navbar/Navbar'
import { SessionProvider } from "next-auth/react"
function AdminLayout({session, children }) {
    return (
        <SessionProvider session={session}>
            <Navbar />
            <main>{children}</main>
        </SessionProvider>
    )
}

export default AdminLayout