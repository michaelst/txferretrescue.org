import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import ApplicationsPage, { LIST_APPLICATIONS } from './'
import { BrowserRouter } from 'react-router-dom'
import { ApplicationStatus } from 'globalTypes'
import userEvent from '@testing-library/user-event'

const mocks = [
  {
    request: {
      query: LIST_APPLICATIONS,
      variables: {
        page: 1,
        search: '',
        status: ApplicationStatus.NEEDS_REVIEW
      }
    },
    result: {
      data: {
        applications: [
          {
            "__typename": "Application",
            "approved": true,
            "email": "test@example.com",
            "final": false,
            "id": "1",
            "name": "Some person",
            "reviewed": true
          },
          {
            "__typename": "Application",
            "approved": false,
            "email": "test2@example.com",
            "final": false,
            "id": "2",
            "name": "Another person",
            "reviewed": false
          },
        ]
      }
    },
  },
  {
    request: {
      query: LIST_APPLICATIONS,
      variables: {
        page: 1,
        search: '',
        status: ApplicationStatus.ALL
      }
    },
    result: {
      data: {
        applications: [
          {
            "__typename": "Application",
            "approved": true,
            "email": "test@example.com",
            "final": false,
            "id": "1",
            "name": "Some person",
            "reviewed": true
          },
          {
            "__typename": "Application",
            "approved": false,
            "email": "test2@example.com",
            "final": false,
            "id": "2",
            "name": "Another person",
            "reviewed": false
          },
          {
            "__typename": "Application",
            "approved": true,
            "email": "test2@example.com",
            "final": true,
            "id": "3",
            "name": "Another person",
            "reviewed": true
          },
        ]
      }
    },
  }
]

test('render ApplicationsPage', async () => {
  const { getByTestId, getAllByTestId } = render(
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <ApplicationsPage />
      </BrowserRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const rows = getAllByTestId('ApplicationRow')
    expect(rows.length).toBe(2)
  })

  const allStatusButton = getByTestId('all-status-button')
  userEvent.click(allStatusButton)

  await waitFor(() => {
    const rows = getAllByTestId('ApplicationRow')
    expect(rows.length).toBe(3)
  })

  const needsReviewStatusButton = getByTestId('needs-review-status-button')
  userEvent.click(needsReviewStatusButton)

  await waitFor(() => {
    const rows = getAllByTestId('ApplicationRow')
    expect(rows.length).toBe(2)
  })
})
