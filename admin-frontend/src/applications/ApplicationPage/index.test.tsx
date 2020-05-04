import React from 'react'
import { render, act, waitFor, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import ApplicationPage, { GET_APPLICATION } from './'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'
import { Gender } from 'globalTypes'
// import { fireEvent } from '@testing-library/react'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: GET_APPLICATION,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        application: {
          '__typename': 'Application',
          'id': '1',
          'age': 21,
          'approved': false,
          'cageInfo': "some info",
          'city': "City",
          'diseasesInfo': "some info",
          'eatInfo': "some info",
          'email': "test@example.com",
          'final': false,
          'foreverHome': "some info",
          'fostering': true,
          'heartwormPrevent': "some info",
          'heartworms': true,
          'heartwormTreat': false,
          'homeType': "some info",
          'keptInfo': "some info",
          'landlordInfo': "some info",
          'legalToOwn': true,
          'moveInfo': "some info",
          'name': "Some name",
          'notes': "some info",
          'numFerretsInfo': "some info",
          'otherAnimals': "some info",
          'ownedBefore': true,
          'ownedDetails': "some info",
          'ownHome': true,
          'peopleAtAddress': "some info",
          'phonePrimary': "111 111 1111",
          'phoneSecondary': null,
          'playInfo': "some info",
          'proofingInfo': "some info",
          'reviewed': false,
          'smoker': false,
          'state': "TX",
          'street': "123 Street St",
          'surrendered': false,
          'surrenderedDetails': "some info",
          'timeAtAddress': "some info",
          'toyInfo': "some info",
          'vaccinesCurrent': true,
          'vetInfo': "some info",
          'zipCode': "75024",
          'messages': [
            {
              '__typename': 'Message',
              'id': '1',
              "message": "test message",
              "sentAt": "2020-05-03 16:45:48"
            }
          ]
        }
      }
    },
  }
]

test('render ApplicationPage', async () => {
  const { queryByText, getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/applications/1']}>
        <Route path="/applications/:applicationId">
          <ApplicationPage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )

  await waitFor(() => expect(queryByText('test@example.com')).toBeInTheDocument())
  await waitFor(() => expect(queryByText('test message')).toBeInTheDocument())
})
