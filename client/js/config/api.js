import ApolloClient, { createNetworkInterface } from 'react-apollo'
// import { createNetworkInterface }

let link = "";

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

export default client;
