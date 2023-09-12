import React from 'react'

function index() {
    return (
        <div>index</div>
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