import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListFerrets } from './graphql/ListFerrets'
import FerretRow from './components/FerretRow'
import FerretsInfo from './components/FerretsInfo'
import FostersInfo from './components/FostersInfo'

export const LIST_FERRETS = gql`
query ListFerrets($foster : Boolean!) {
  ferrets(foster: $foster) {
    id
    ageMonths
    ageYears
    bio
    fee
    gender
    image
    name
  }
}
`

type FerretsPageProps = {
  foster: boolean
}

export function FerretsPage({ foster }: FerretsPageProps) {
  const { data } = useQuery<ListFerrets>(LIST_FERRETS, {
    variables: { foster }
  })

  return (
    <div className="FerretsPage">
      {foster ? <FostersInfo /> : <FerretsInfo />}

      {data?.ferrets.map(ferret => <FerretRow key={ferret.id} ferret={ferret} />)}
    </div>
  )
}
