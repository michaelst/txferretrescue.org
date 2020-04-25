import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { gql, useMutation } from '@apollo/client'
import { ListFerrets, ListFerrets_ferrets } from 'ferrets/FerretsPage/graphql/ListFerrets'
import { LIST_FERRETS } from 'ferrets/FerretsPage'

export const DELETE_FERRET = gql`
mutation DeleteFerret($id: ID!) {
  deleteFerret(id: $id) {
    id
  }
}
`

type FerretRowProps = {
  ferret: ListFerrets_ferrets
}

function FerretRow({ ferret }: FerretRowProps) {
  const [deleteFerret] = useMutation(DELETE_FERRET, {
    update(cache, { data: { deleteFerret } }) {
      const data = cache.readQuery<ListFerrets | null>({ query: LIST_FERRETS })

      cache.writeQuery({
        query: LIST_FERRETS,
        data: { ferrets: data?.ferrets.filter(ferret => ferret.id !== deleteFerret.id) }
      })
    }
  })

  return (
    <tr key={ferret.id} className="FerretRow" data-testid="FerretRow">
      <td>{ferret.name}</td>
      <td>{ferret.gender.toLowerCase()}</td>
      <td>{ferret.available ? 'Yes' : 'No'}</td>
      <td>{ferret.foster ? 'Yes' : 'No'}</td>
      <td>${ferret.fee}</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/ferrets/${ferret.id}`} className="pr-1">edit</Link> |
          <Button
            variant="link"
            className="m-0 p-0 pl-1"
            onClick={() => deleteFerret({ variables: { id: ferret.id } })}
            data-testid={`delete-ferret-${ferret.id}`}
          >
            delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default FerretRow
