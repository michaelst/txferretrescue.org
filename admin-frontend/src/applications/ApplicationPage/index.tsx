import React from 'react'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import ContentBox from 'ContentBox'
import { GetApplication } from './graphql/GetApplication'
import Actions from './components/Actions'
import Details from './components/Details'
import Messages from './components/Messages'
import Status from './components/Status'

export const GET_APPLICATION = gql`
query GetApplication($id: ID!) {
  application(id: $id) {
    id
    age
    approved
    cageInfo
    city
    diseasesInfo
    eatInfo
    email
    final
    foreverHome
    fostering
    heartwormPrevent
    heartwormTreat
    heartworms
    homeType
    keptInfo
    landlordInfo
    legalToOwn
    moveInfo
    name
    notes
    numFerretsInfo
    otherAnimals
    ownHome
    ownedBefore
    ownedDetails
    peopleAtAddress
    phonePrimary
    phoneSecondary
    playInfo
    proofingInfo
    reviewed
    smoker
    state
    street
    surrenderedDetails
    surrendered
    timeAtAddress
    toyInfo
    vaccinesCurrent
    vetInfo
    zipCode
    messages {
      id
      message
      sentAt
    }
  }
}
`

function ApplicationPage() {
  const { applicationId } = useParams()

  const { data } = useQuery<GetApplication>(GET_APPLICATION, {
    variables: { id: applicationId }
  })

  return (
    <div className='ApplicationPage'>
      <ContentBox>
        <h2 className="mb-4">{data?.application.name}</h2>
        {data && <Actions application={data.application} />}
        {data && <Status application={data.application} />}
        {data && <Messages application={data.application} />}
        {data && <Details application={data.application} />}
      </ContentBox>
    </div>
  )
}

export default ApplicationPage
