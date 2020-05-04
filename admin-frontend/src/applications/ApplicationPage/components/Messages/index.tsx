import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { GetApplication_application } from 'applications/ApplicationPage/graphql/GetApplication'
import TextField from 'forms/TextField'
import moment from 'moment/moment'

export const SEND_MESSAGE = gql`
mutation SendMessage($id: ID!, $message: String!) {
  sendMessage(id: $id, message: $message) {
    id
    messages {
      id
      message
      sentAt
    }
  }
}
`

type MessagesProps = {
  application: GetApplication_application
}

function Messages({ application }: MessagesProps) {
  const [message, setMessage] = useState('')

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    variables: {
      id: application.id,
      message: message,
    }
  })

  return (
    <div className='Messages'>
      <h4 className="mt-4">Messages</h4>
      <TextField label="Send message to applicant" value={message} setValue={setMessage} required={false} />
      <Button onClick={() => sendMessage() && setMessage('')} className="btn btn-success">Send</Button>

      <h6 className="mt-4">Message History</h6>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th style={{ width: '25%' }}>Sent At</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {application.messages.map(message => {
            return (
              <tr key={message.id}>
                <td>{moment.utc(message.sentAt).local().format('MM/DD/YY h:mma')}</td>
                <td>{message.message}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Messages
