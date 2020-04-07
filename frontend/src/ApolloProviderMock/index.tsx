import React, { ReactNode } from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { SchemaLink } from '@apollo/link-schema'
import { makeExecutableSchema, addMockFunctionsToSchema, IMocks } from 'graphql-tools'
import { printSchema, buildClientSchema } from "graphql/utilities"

const AutoMockedProvider: React.FunctionComponent<{
  children: ReactNode;
  mockResolvers?: IMocks;
}> = ({ children, mockResolvers }) => {
  const json = require('../../schema.json')
  const schemaSDL = printSchema(
    buildClientSchema({ __schema: json.__schema as any })
  );
  
  const schema = makeExecutableSchema({
    typeDefs: schemaSDL,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
  
  addMockFunctionsToSchema({ schema, mocks: mockResolvers })
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema })
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AutoMockedProvider;