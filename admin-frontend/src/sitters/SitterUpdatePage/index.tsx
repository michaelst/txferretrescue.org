import React from 'react'
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client'

function SitterUpdatePage() {
  let { sitterId } = useParams()

  return (
    <div className='SitterUpdatePage'>
      {sitterId}
    </div>
  )
}

export default SitterUpdatePage
