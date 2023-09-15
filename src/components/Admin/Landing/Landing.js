

import Link from 'next/link'
import React from 'react'
import Table from '../Table/Table'

function Landing() {
   
    return (
        <>
            <div className="container-fluid px-5">
                <div className='px-5 mt-4' style={{ display: "flex", justifyContent: "end" }}>
                    <Link href='/admin/add-project' className="btn btn-success rounded-pill px-4 ">Add project</Link>
                    
                </div>
                <Table/>
            </div>

        </>
    )
}

export default Landing