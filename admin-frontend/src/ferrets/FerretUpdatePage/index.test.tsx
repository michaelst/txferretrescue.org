import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import FerretUpdatePage, { GET_FERRET, UPDATE_FERRET } from './'
import userEvent from '@testing-library/user-event'
import { Route, MemoryRouter } from 'react-router-dom'
import { InMemoryCache } from '@apollo/client'
// import { fireEvent } from '@testing-library/react'

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
  const { queryByText, getByTestId } = render(
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

  // const uploadButton = getByTestId('upload-photo')
  // 
  // const file = await fetch("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAACv0lEQVQ4EX1TUUiTURT+fjeWmy5zbnMiodQUGUlYL8KQ0YOBsj2kuN7Kh0BYZAY+6INPJUhg8yUDU/GhKM2WW/myam2aTdoYTBctCppz5jZN15jTxdzf/a+x1KLDz+Wccw/fOef7/suwxPAfS0TCEEllyOHx/lmVczjL4cVXvsE1eBdB3yLMF5rwoLMT6Z2dw6U0PgCQ/L6O5z09GFAqYX80DtcbO5Ll5ZCn07itVuPL9PRfIFmAn8kk3vb344PZjPNTU+iccSCvogLCxka8l0hwrrUVllu98I6PHwThOODMMzTEdkhl7GooROPd3V3WarWyOp2O9fl8ezUTE+xwUzO7s7VFY+6gE7y/N4i8kydwZfoFFKWltMPy8jIKCgogEokwOTlJc6ebm5EipL4zPctOwee86GoY0YVFbNbUIMWnKcTjceTn58Pj8cDtdkOr1YJhGIirq+EbG4Na3wKBQACGzgKiJPmWlpYQCAQgFotB8hgdHcUYKS4uLobRaIRUKoWqqgoiApybm0unoCuEZmbh7u1FZjMGlUpFuzscDthsNlRWVqK7u5uCqIkSeaTrZ4sFaaIMZxTg6/w81ouKICw8BplMBrlcDr/fj1QqhbKyMgpSW1tLV4gHg3jc1oZoNPoH4FRLCwKEKIbHR1dXFwwGA7xeL2KxGAXc3t5GksjMmd9ixvH6epSUlNCYMnaUMC8hiZkBI2729cFhtyMSiUChUEAoFNJxg6SznM+D99VrKPUX6TQcAiWRc8IuF0YuXYZSp4W8oQF1dXXIIawnQiGEEwl8dDqxdn8YP8iK10xPqQIHALhgZW4OT9qvQ3REAKVGg0JCqK3jBkD+xNW1KCRnzqKdrMDJmzUq474jsbHBLlhfsiN6PfvJ6WTvaDTsQ8NVdtZkYjOZzL7KPTe7Qhbxt0Ou6Z7cW2cOX+6LfwEf3V4l4H1eEwAAAABJRU5ErkJggg==")
  //   .then(res => res.arrayBuffer())
  //   .then(buffer => new File([buffer], 'test.png', { type: 'image/png' }))
  // 
  // fireEvent.change(uploadButton, { target: { files: [file] } })``

  // await waitFor(() => {
  //   const label = queryByText("test.png")
  //   expect(label).toBeInTheDocument()
  // })

  const updateButton = getByTestId('update-ferret-button')

  await act(async () => await userEvent.click(updateButton))

  await waitFor(() => {
    const updatedCache = cache.extract()
    expect(updatedCache['Ferret:1'].name).toBe('Lois')
  })

})
