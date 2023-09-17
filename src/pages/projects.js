import Projects from '@/components/Projects/Projects'
import React from 'react'

function projects({projectData}) {
  return (
    <Projects projectData={projectData}/>
  )
}

export default projects

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/projects')
    const repo = await response.json()
    //console.log(repo);
    return {
        props: {
            admin: false,
            projectData: repo.projects
        }
    }
}