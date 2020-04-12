import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { gql, useMutation } from '@apollo/client'
import './index.scss'

export const LOGIN = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}
`

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalid, setInvalid] = useState(false)

  const [login, { loading }] = useMutation(LOGIN, {
    variables: {
      username: username,
      password: password,
    },
    onCompleted: () => { },
    onError: () => setInvalid(true)
  })

  return (
    <div className="LoginPage h-100 d-flex align-items-center justify-content-center">
      <div className="container m-auto">
        <div className="form p-4 mt-0 mx-auto text-center">
          <div className="login-form">
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
              className={`p-3 mb-3 ${isInvalid && 'is-invalid'}`}
            />
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              className={`p-3 mb-3 ${isInvalid && 'is-invalid'}`}
            />
            <div id="ember449" className="login-button ember-view">
              <button className="p-3 login-button bg-success" data-ember-action="" data-ember-action-450="450">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
