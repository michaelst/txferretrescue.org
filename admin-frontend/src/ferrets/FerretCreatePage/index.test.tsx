import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import FerretCreatePage, { CREATE_FERRET } from './'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const mocks = [
  {
    request: {
      query: CREATE_FERRET,
      variables: {
        ageMonths: 1,
        ageYears: 1,
        available: true,
        bio: '',
        fee: '125',
        foster: false,
        gender: 'FEMALE',
        name: 'Lois',
        imageUpload: null
      }
    },
    result: {
      data: {
        createFerret: {
          '__typename': 'Ferret',
          'id': '1',
          'ageMonths': 1,
          'ageYears': 1,
          'available': true,
          'bio': null,
          'fee': '125.00',
          'foster': false,
          'gender': 'FEMALE',
          'name': 'Lois',
        }
      }
    },
  }
]

test('render FerretCreatePage', async () => {
  const { getByTestId } = render(
    <MockedProvider cache={cache} mocks={mocks}>
      <BrowserRouter>
        <FerretCreatePage />
      </BrowserRouter>
    </MockedProvider>
  )

  const nameField = getByTestId('ferret-form-name-field')
  userEvent.type(nameField, 'Lois')

  const ageYearsField = getByTestId('ferret-form-ageYears-field')
  userEvent.type(ageYearsField, '1')

  const ageMonthsField = getByTestId('ferret-form-ageMonths-field')
  userEvent.type(ageMonthsField, '1')

  const feeField = getByTestId('ferret-form-fee-field')
  userEvent.type(feeField, '125')

  const genderRadio = getByTestId('ferret-form-gender-field-female')
  await userEvent.click(genderRadio)

  const availableRadio = getByTestId('ferret-form-available-field-yes')
  await userEvent.click(availableRadio)

  const fosterRadio = getByTestId('ferret-form-foster-field-no')
  await userEvent.click(fosterRadio)

  const createButton = getByTestId('create-ferret-button')

  await act(async () => {
    await userEvent.click(createButton)

    await waitFor(() => {
      const updatedCache = cache.extract()
      expect(updatedCache['Ferret:1']?.name).toBe('Lois')
    })
  })
})
