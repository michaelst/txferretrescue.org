import React from 'react'
import { gql, useMutation } from '@apollo/client'
import { GetApplication_application } from 'applications/ApplicationPage/graphql/GetApplication'
import Checkbox from 'forms/Checkbox'

export const UPDATE_APPLICATION_REVIEWED = gql`
mutation UpdateApplicationReviewed($id: ID!, $reviewed: Boolean!) {
  updateApplication(id: $id, input: { reviewed: $reviewed }) {
    id
    reviewed
  }
}
`

export const UPDATE_APPLICATION_FINAL = gql`
mutation UpdateApplicationFinal($id: ID!, $final: Boolean!) {
  updateApplication(id: $id, input: { final: $final }) {
    id
    final
  }
}
`

type StatusProps = {
  application: GetApplication_application
}

function Status({ application }: StatusProps) {
  const [setReviewed] = useMutation(UPDATE_APPLICATION_REVIEWED, {
    variables: {
      id: application.id,
      reviewed: !application.reviewed,
    }
  })

  const [setFinal] = useMutation(UPDATE_APPLICATION_FINAL, {
    variables: {
      id: application.id,
      final: !application.final,
    }
  })

  return (
    <div className='Status'>
      <h4 className="mt-4">Status</h4>
      <div>
        <div className="row mb-1">
          <div className="col-1">
            <b>Approved:</b>
          </div>
          <div className="col">
            {application.approved ? 'Yes' : 'No'}
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-1">
            <b>Reviewed:</b>
          </div>
          <div className="col">
            <Checkbox value={application.reviewed} onChange={() => setReviewed()} />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <b>Final:</b>
          </div>
          <div className="col">
            <Checkbox value={application.final} onChange={() => setFinal()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status
