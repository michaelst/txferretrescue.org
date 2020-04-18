import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { ResetPassword } from './graphql/ResetPassword'
import { useHistory } from "react-router-dom"
import createApolloClient from 'helpers/createApolloClient'
import './index.scss'

export const RESET_PASSWORD = gql`
mutation ResetPassword($password: String!) {
  resetPassword(password: $password) {
    token
  }
}
`

type ResetPasswordPageProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

function ResetPasswordPage({ setToken }: ResetPasswordPageProps) {
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const search = window.location.search
  const params = new URLSearchParams(search)
  const tokenParam = params.get('token')
  const client = createApolloClient(tokenParam)
  
  const history = useHistory()

  const [resetPassword, { loading }] = useMutation(RESET_PASSWORD, {
    variables: {
      password: password,
    },
    onCompleted: (data: ResetPassword) => {
      setToken(data.resetPassword.token)
      history.push('/')
    },
    onError: () => { },
    client: client
  })

  const disabled = loading || password.length < 12 || password !== repeatPassword

  return (
    <div className="ResetPasswordPage h-100 d-flex align-items-center justify-content-center">
      <div className="container m-auto">
        <div className="form p-4 mt-0 mx-auto text-center">
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            className={`p-3 mb-3 ${password.length < 12 && 'is-invalid'}`}
            data-testid="password-field"
          />
          <input
            type="password"
            value={repeatPassword}
            placeholder="repeat password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRepeatPassword(event.target.value)}
            className={`p-3 mb-3 ${password !== repeatPassword && 'is-invalid'}`}
            data-testid="repeat-password-field"
          />
          <button
            className="p-3 reset-button bg-success"
            onClick={() => resetPassword()}
            disabled={disabled}
            data-testid="reset-button"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage
