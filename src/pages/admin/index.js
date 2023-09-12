import Landing from '@/components/Admin/Landing/Landing'
import React from 'react'

function index({datas}) {
    
    return (
        
        <Landing datas={datas}/>
    )
}

export default index
export async function getServerSideProps() {
    return {
        props: {
            admin: true
        }
    }
}