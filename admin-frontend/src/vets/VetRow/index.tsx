import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client'
import { ListVets, ListVets_vets } from 'vets/VetsPage/graphql/ListVets'
import { LIST_VETS } from 'vets/VetsPage'

export const DELETE_VET = gql`
mutation DeleteVet($id: ID!) {
  deleteVet(id: $id) {
    id
  }
}
`

type VetRowProps = {
  vet: ListVets_vets
}

function VetRow({ vet }: VetRowProps) {
  const [deleteVet] = useMutation(DELETE_VET, {
    update(cache, { data: { deleteVet } }) {
      const data = cache.readQuery<ListVets | null>({ query: LIST_VETS })

      cache.writeQuery({
        query: LIST_VETS,
        data: { vets: data?.vets.filter(vet => vet.id !== deleteVet.id) }
      })
    }
  })

  return (
    <tr key={vet.id} className="VetRow" data-testid="VetRow">
      <td>{vet.companyName}</td>
      <td>{vet.vetName}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/vets/${vet.id}`} className="pr-1">edit</Link> |
                  <Button
            variant="link"
            className="m-0 p-0 pl-1"
            onClick={() => deleteVet({ variables: { id: vet.id } })}
            data-testid={`delete-vet-${vet.id}`}
          >
            delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default VetRow
