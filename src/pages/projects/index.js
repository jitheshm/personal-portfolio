import Projects from '@/components/Projects/Projects'
import React from 'react'

function index({projectData}) {
  return (
    <Projects projectData={projectData}/>
  )
}

export default index

export async function getServerSideProps() {
    const response = await fetch(`${process.env.BASE_URL}/api/projects`)
    const repo = await response.json()
    //console.log(repo);
    return {
        props: {
            admin: false,
            projectData: repo.projects
        }
    }
}