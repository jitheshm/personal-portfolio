import DetailsForm from '@/components/Admin/Form/DetailsForm'
import axios from 'axios'
import { getServerSession } from 'next-auth'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { authOptions } from '../api/auth/[...nextauth]'

function editProject() {
    const router = useRouter()
    const [datas, setDatas] = useState(null)
    const [loading, setLoading] = useState(true)
    const { data, status } = useSession()
    console.log({ data, status });
    console.log("first" + router.query.pid);
    useEffect(() => {
        if(status==="unauthenticated"){
            signIn()
        }

        if (router.query.pid&&status!="unauthenticated") {
            axios.get(`/api/projects?pid=${router.query.pid}`).then((result) => {
                console.log(result.data.projects);
                setDatas(result.data.projects)
                setLoading(false)
            })
        }


    }, [router.query.pid])
    if (loading) return <h4>Loading...</h4>
    return (
        <DetailsForm title="Edit" action="Update" data={datas} api='update-project' />
    )
}

export default editProject
export async function getServerSideProps({ req, res }) {
    const session = await getServerSession(req, res, authOptions)
    //console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin',
            }
        }
    }
    else {
        return {
            props: {
                admin: true,

                session: session
            }
        }
    }
}

