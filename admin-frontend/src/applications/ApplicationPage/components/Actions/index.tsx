import React from 'react'
import { gql, useMutation } from '@apollo/client'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { GetApplication_application } from 'applications/ApplicationPage/graphql/GetApplication'

export const APPROVE_APPLICATION = gql`
mutation ApproveApplication($id: ID!) {
  approveApplication(id: $id) {
    id
    approved
    reviewed
    final
  }
}
`

export const DECLINE_APPLICATION = gql`
mutation DeclineApplication($id: ID!) {
  declineApplication(id: $id) {
    id
    approved
    reviewed
    final
  }
}
`

type StatusProps = {
  application: GetApplication_application
}

function Status({ application }: StatusProps) {
  const [approveApplication] = useMutation(APPROVE_APPLICATION, {
    variables: {
      id: application.id,
    }
  })

  const [declineApplication] = useMutation(DECLINE_APPLICATION, {
    variables: {
      id: application.id,
    }
  })

  return (
    <div className='Actions'>
      <Link to={'/applications'} className="btn btn-primary">Go Back</Link>
      <Button onClick={() => approveApplication()} className="btn-success ml-2">Approve</Button>
      <Button onClick={() => declineApplication()} className="btn-danger ml-2">Decline</Button>
    </div>
  )
}

export default Status
