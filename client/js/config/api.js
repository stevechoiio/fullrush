<<<<<<< HEAD
import { createRtdbLink } from "apollo-link-firebase";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import gql from "graphql-tag";
import firebase from "firebase";
let config = {
  apiKey: "AIzaSyDQBEmK46BdXynCQ0AiIUkn9e4gXJdyEJk",
  authDomain: "https://fullrush-c4cfe-1553e.firebaseio.com/",
  databaseURL: "https://fullrush-c4cfe-1553e.firebaseio.com/",
  projectId: "fullrush-c4cfe",
  storageBucket: "fullrush-c4cfe.appspot.com",
  messagingSenderId: "XXXXXXX"
};

// initialize firebase
firebase.initializeApp(config);

// create Realtime Database link
const rtdbLink = createRtdbLink({
  database: firebase.database()
});

export const client = new ApolloClient({
  link: rtdbLink,
  cache: new InMemoryCache()
});
=======
import ApolloClient, { createNetworkInterface } from 'react-apollo'
// import { createNetworkInterface }

let link = "";

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})
>>>>>>> df4bac5b143d4f9a7af78e53c321644b254fcf35

const query = gql`
  query getUsers {
    users @rtdbQuery(ref: "/users", type: "Users") @array {
      id @key
      name
    }
    reviews @rtdbQuery(ref: "/reviews", type: "Reviews") @array {
      id @key
      rating
    }
    washrooms @rtdbQuery(ref: "/washrooms", type: "Washrooms") @array {
      id @key
      name
    }
  }
`;

// Invoke the query and log the person's name
client.query({ query }).then(response => {
  console.log(response.data);
});
