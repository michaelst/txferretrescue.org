import React from 'react'
import { gql, useQuery } from '@apollo/client'

type SitterFormProps = {
  name: string,
  phone: string,
  email: string,
  notes?: string
}
function SitterForm({ name, phone, email, notes }: SitterFormProps) {
  return (
    <div className="SitterForm">
    </div>
  )
}

export default SitterForm
