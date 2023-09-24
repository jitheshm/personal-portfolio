import Landing from '@/components/Admin/Landing/Landing'
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]'
import React, { createContext, useEffect, useState } from 'react'

export const projectDataContext = createContext();
function index({ projectData }) {
    //console.log("here"+projectData);
    const [loading, setLoading] = useState(true)

    const { data, status } = useSession()
    console.log({ data, status });
    useEffect(() => {
        if (status === "unauthenticated") {

            signIn()

        } else {
            setLoading(false)
        }
    }, [status])

    if (loading) return <h4>Loading...</h4>
    return (
        <projectDataContext.Provider value={{ projectData: projectData }}>
            <Landing />
        </projectDataContext.Provider>
    )
}

export default index
export async function getServerSideProps({ req, res }) {
    const response = await fetch(`${process.env.BASE_URL}/api/projects`)
    const repo = await response.json()
    //console.log(repo);
    const session = await getServerSession(req, res, authOptions)
    //console.log(session);
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin',
            }
        }
    }
    else{
    return {
        props: {
            admin: true,
            projectData: repo.projects,
            session: session
        }
    }
    }
}