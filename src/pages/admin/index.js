import Landing from '@/components/Admin/Landing/Landing'
import axios from 'axios';
import React, { createContext } from 'react'
export const projectDataContext = createContext();
function index({ projectData }) {
//console.log("here"+projectData);
    return (
        <projectDataContext.Provider value={{projectData:projectData}}>
            <Landing />
        </projectDataContext.Provider>
    )
}

export default index
export async function getServerSideProps() {
   const response=await fetch(`${process.env.BASE_URL}/api/projects`)
   const repo = await response.json()
   //console.log(repo);
    return {
        props: {
            admin: true,
            projectData: repo.projects
        }
    }
}