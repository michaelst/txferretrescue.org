import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { gql, useQuery } from '@apollo/client'
import { ListApplications } from './graphql/ListApplications'
import ApplicationRow from 'applications/ApplicationRow'
import TextInput from 'forms/TextInput'
import { ApplicationStatus } from 'globalTypes'

export const LIST_APPLICATIONS = gql`
query ListApplications($page: Int!, $status: ApplicationStatus!, $search: String) {
  applications(page: $page, filter: {status: $status, search: $search}) {
    id
    name
    email
    reviewed
    approved
    final
  }
}
`

function ApplicationsPage() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState(ApplicationStatus.NEEDS_REVIEW)

  const { data } = useQuery<ListApplications>(LIST_APPLICATIONS, {
    variables: {
      page: page,
      search: search,
      status: status,
    }
  })

  return (
    <div className="ApplicationsPage">
      <div className="row mb-2">
        <div className="col pr-2">
          <TextInput value={search} setValue={setSearch} required={false} placeholder="Search by name or email" />
        </div>

        <div className="col p-0">
          <ButtonGroup>
            <Button 
              variant="outline-success" 
              onClick={() => setStatus(ApplicationStatus.NEEDS_REVIEW)} 
              active={status === ApplicationStatus.NEEDS_REVIEW}
              className="white-bg"
              data-testid="needs-review-status-button"
            >
              Needs Review
            </Button>
            <Button 
              variant="outline-success" 
              onClick={() => setStatus(ApplicationStatus.ALL)} 
              active={status === ApplicationStatus.ALL}
              className="white-bg"
              data-testid="all-status-button"
            >
              All Apps
            </Button>
          </ButtonGroup>
        </div>

        <div className="col-3 ml-auto text-right">
          <Button
            className="btn-success mr-2"
            onClick={() => setPage(page - 1)}
            disabled={page < 2}
          >
            Prev Page
        </Button>
          <Button
            className="btn-success"
            onClick={() => setPage(page + 1)}
            disabled={(data?.applications.length || 0) < 50}
          >
            Next Page
        </Button>
        </div>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Reviewed</th>
            <th>Approved</th>
            <th>Final</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.applications.map(application => <ApplicationRow application={application} key={application.id} />)}
        </tbody>
      </Table>
    </div>
  )
}

export default ApplicationsPage
