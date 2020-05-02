import React from 'react'
import { Link } from 'react-router-dom'
import { ListApplications_applications } from 'applications/ApplicationsPage/graphql/ListApplications'

type ApplicationRowProps = {
  application: ListApplications_applications
}

function ApplicationRow({ application }: ApplicationRowProps) {
  return (
    <tr key={application.id} className="ApplicationRow" data-testid="ApplicationRow">
      <td>{application.id}</td>
      <td>{application.name}</td>
      <td>{application.email}</td>
      <td>{application.reviewed ? 'Yes' : 'No'}</td>
      <td>{application.approved ? 'Yes' : 'No'}</td>
      <td>{application.final ? 'Yes' : 'No'}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/applications/${application.id}`} className="pr-1">review</Link>
        </div>
      </td>
    </tr>
  )
}

export default ApplicationRow
