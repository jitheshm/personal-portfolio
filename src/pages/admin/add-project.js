import DetailsForm from '@/components/Admin/Form/DetailsForm'
import React from 'react'

function addProject() {
  return (
    <DetailsForm title="Enter" action="Submit" api='add-project' />
      )
}

export default addProject