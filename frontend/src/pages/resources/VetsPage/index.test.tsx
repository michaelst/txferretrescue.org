import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { LIST_VETS, VetsPage } from './'
import { MockedProvider } from '@apollo/client/testing'

function mocks(foster: boolean) {
  return [
    {
      request: {
        query: LIST_VETS,
      },
      result: {
        data: {
          vets: [
            {
              "__typename": "Vet",
              "city": "Frisco",
              "companyName": "Plantation Pet Health Center",
              "id": "9",
              "notes": null,
              "phone": null,
              "state": "TX",
              "street": "12560 Lebanon Road",
              "vetName": "George E. Martin Jr., DVM",
              "website": "http://www.plantationpethealthcenter.com/",
              "zip": "75035"
            },
            {
              "__typename": "Vet",
              "city": "Plano",
              "companyName": "Parker Animal & Bird Clinic",
              "id": "3",
              "notes": "Closed on Wednesday",
              "phone": "(972) 985-0036",
              "state": "TX",
              "street": "2129 W. Parker Road, Suite A",
              "vetName": "Charles C. Blonien, DVM",
              "website": null,
              "zip": "75023"
            }
          ]
        }
      },
    },
  ]
};

test('renders VetsPage', async () => {
  const { getByText, getAllByTestId } = render(
    <MockedProvider mocks={mocks(false)}>
      <VetsPage />
    </MockedProvider>
  )

  await waitFor(() => {
    const linkElement = getByText(/Emergency Animal Clinic/i)
    expect(linkElement).toBeInTheDocument()

    const ferretRows = getAllByTestId('VetBox')
    expect(ferretRows.length).toBe(2)
  })
})
