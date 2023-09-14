import DetailsForm from '@/components/Admin/Form/DetailsForm'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function editProject() {
    const router = useRouter()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log("first"+router.query.pid);
    useEffect(() => {
        
        if(router.query.pid){
            axios.get(`/api/projects?pid=${router.query.pid}`).then((result) => {
                console.log(result.data.projects);
                setData(result.data.projects)
                setLoading(false)
            })
        }


    }, [router.query.pid])
    if (loading) return <h4>Loading...</h4>
    return (
        <DetailsForm title="Edit" action="Update" data={data} />
    )
}

export default editProject

