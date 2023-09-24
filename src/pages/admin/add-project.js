import DetailsForm from '@/components/Admin/Form/DetailsForm'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { authOptions } from '../api/auth/[...nextauth]'

function addProject() {

  const [loading, setLoading] = useState(true)

  const { data, status } = useSession()
  console.log({ data, status });
  useEffect(() => {
      if (status === "unauthenticated") {

          signIn({
              callbackUrl: '/admin'
          })

      } else {
          setLoading(false)
      }
  }, [status])

  if (loading) return <h4>Loading...</h4>
  return (
    <DetailsForm title="Enter" action="Submit" api='add-project' />
  )
}

export default addProject

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