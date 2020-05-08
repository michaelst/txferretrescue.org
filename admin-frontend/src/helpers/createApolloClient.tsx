import { ApolloClient, InMemoryCache, ApolloLink, concat } from '@apollo/client'
import { createLink } from "apollo-absinthe-upload-link"

const createApolloClient = (token: string | null) => {
  const uri = process.env.NODE_ENV === 'production' ? 'https://api.txferretrescue.org/graphql' : 'http://localhost:4000/graphql'

  const httpLink = createLink({ uri: uri })

  const authMiddleware = new ApolloLink((operation, forward) => {
    console.log(token)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      }
    })

    return forward(operation)
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink)
  })
}

export default createApolloClient
