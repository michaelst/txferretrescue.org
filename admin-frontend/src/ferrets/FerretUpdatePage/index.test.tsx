import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import FerretUpdatePage, { GET_FERRET, UPDATE_FERRET } from './'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: GET_FERRET,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        ferret: {
          '__typename': 'Ferret',
          'id': '1',
          'ageMonths': 1,
          'ageYears': 1,
          'available': true,
          'bio': null,
          'fee': '125.00',
          'foster': false,
          'gender': 'FEMALE',
          'name': 'Some name',
          'image': null,
        }
      }
    },
  },
  {
    request: {
      query: UPDATE_FERRET,
      variables: {
        id: '1',
        ageMonths: 1,
        ageYears: 1,
        available: true,
        bio: '',
        fee: '125.00',
        foster: false,
        gender: 'FEMALE',
        name: 'Lois',
      }
    },
    result: {
      data: {
        updateFerret: {
          '__typename': 'Ferret',
          'id': '1',
          'ageMonths': 1,
          'ageYears': 1,
          'available': true,
          'bio': null,
          'fee': '125.00',
          'foster': false,
          'gender': 'FEMALE',
          'image': null,
          'name': 'Lois',
        }
      }
    },
  }
]

test('render FerretUpdatePage', async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <MemoryRouter initialEntries={['/ferrets/1']}>
        <Route path="/ferrets/:ferretId">
          <FerretUpdatePage />
        </Route>
      </MemoryRouter>
    </MockedProvider>
  )


  const nameField = getByTestId('ferret-form-name-field')
  await waitFor(() => expect(nameField.value).toBe('Some name'))
  userEvent.type(nameField, 'Lois')

  const updateButton = getByTestId('update-ferret-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['Ferret:1'].name).toBe('Lois')
  })
})
