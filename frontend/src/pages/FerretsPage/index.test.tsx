import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { LIST_FERRETS, FerretsPage } from './'
import { MockedProvider } from '@apollo/client/testing'
import { HashRouter } from 'react-router-dom'

function mocks(foster: boolean) {
  return [
    {
      request: {
        query: LIST_FERRETS,
        variables: {
          foster: foster,
        },
      },
      result: {
        data: {
          ferrets: [
            {
              "__typename": "Ferret",
              "ageMonths": 2,
              "ageYears": 2,
              "bio": "Some description",
              "fee": "100.00",
              "gender": "Male",
              "id": "1",
              "imageUrl": "https://storage.googleapis.com/ferret-rescue/ferret-images/1466285620.jpg",
              "name": "Test"
            },
            {
              "__typename": "Ferret",
              "ageMonths": 1,
              "ageYears": 1,
              "bio": "Some description",
              "fee": "100.00",
              "gender": "Male",
              "id": "2",
              "imageUrl": "https://storage.googleapis.com/ferret-rescue/ferret-images/1466285620.jpg",
              "name": "Test"
            }
          ]
        }
      },
    },
  ]
};

test('renders FerretsPage with foster=false', async () => {
  const { getByText, getAllByTestId } = render(
    <MockedProvider mocks={mocks(false)}>
      <HashRouter>
        <FerretsPage foster={false} />
      </HashRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const linkElement = getByText(/All ferrets have their/i)
    expect(linkElement).toBeInTheDocument()

    const ferretRows = getAllByTestId('FerretRow')
    expect(ferretRows.length).toBe(2)
  })
})

test('renders FerretsPage with foster=true', async () => {
  const { getByText, getAllByTestId } = render(
    <MockedProvider mocks={mocks(true)}>
      <HashRouter>
        <FerretsPage foster={true} />
      </HashRouter>
    </MockedProvider>
  )

  await waitFor(() => {
    const linkElement = getByText(/Most of the ferrets that are surrendered/i)
    expect(linkElement).toBeInTheDocument()

    const ferretRows = getAllByTestId('FerretRow')
    expect(ferretRows.length).toBe(2)
  })
})
