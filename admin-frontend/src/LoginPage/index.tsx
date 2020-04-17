import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Login } from './graphql/Login'
import './index.scss'

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`

type LoginPageProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

function LoginPage({ setToken }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalid, setInvalid] = useState(false)

  const [login, { loading }] = useMutation(LOGIN, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: (data: Login) => setToken(data.login.token),
    onError: () => setInvalid(true)
  })

  return (
    <div className="LoginPage h-100 d-flex align-items-center justify-content-center">
      <div className="container m-auto">
        <div className="form p-4 mt-0 mx-auto text-center">
          <div className="login-form">
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              className={`p-3 mb-3 ${isInvalid && 'is-invalid'}`}
              data-testid="email-field"
            />
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              className={`p-3 mb-3 ${isInvalid && 'is-invalid'}`}
              data-testid="password-field"
            />
              <button 
                className="p-3 login-button bg-success" 
                onClick={() => login()}
                disabled={loading}
                data-testid="login-button"
              >
                login
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
