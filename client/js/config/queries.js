import gql from "graphql-tag";

// Queries
export const GET_ALL_WASHROOMS = gql`
  query GetAllWashrooms {
    allWashrooms {
      name
      instruction
      overallRating
      listOfPhotos {
        id
        url
      }
    }
  }
`;
export const GET_USER_INFO = gql`
  query USER($id: ID!) {
    allUsers(filter: { id: $id }) {
      id
      name
      email
    }
  }
`;

export const GET_ONE_WASHROOM = gql`
  query GetOneWashroom(
    $name: String!
  ) {
    oneWashroom {
      name
    }
  }
`
// Mutations
export const ADD_WASHROOM = gql`
  mutation AddWashroom(
    $name: String!
    $stall: Int!
    $overallRating: Float!
    $toiletSeater: Boolean!
    $listOfPhotos: File!
  ) {
    createWashroom(
      name: $name
      stall: $stall
      overallRating: $overallRating
      toiletSeater: $toiletSeater
      listOfPhotos: $listOfPhotos
    ) {
      id
      name
      stall
    }
  }
`;
export const ADD_REVIEW = gql`
  mutation AddReview($washroomId: ID!, $rating: Int!) {
    createReview(washroomId: $washroomId, rating: $rating) {
      id
      rating
    }
  }
`;
export const AUTHENTICATE_USER = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
export const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`;
export const UPDATE_SIGNEDUPUSER = gql`
  mutation updateSignedupUser($id: ID!, $name: String!, $gender: String!) {
    updateUser(id: $id, name: $name, gender: $gender) {
      id
      name
      email
      gender
    }
  }
`;

export const UPDATE_WASHROOM_IMAGE = gql`
  mutation updateWashroomImage($url: String!) {
    updateWashroomImage(
      url: $url
    ) {
      id
      url
    }
  }
`;
