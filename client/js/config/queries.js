import gql from "graphql-tag";


// Queries
export const GET_ALL_WASHROOMS = gql`
  query Washroom {
    allWashrooms {
      name
      instruction
      overallRating
      listOfPhotos
    }
  }
`;
        
// Mutations
export const ADD_WASHROOM = gql`
  mutation AddWashroom(
    $name: String!
    $stall: Int!
    $overallRating: Float!
    $toiletSeater: Boolean!
  ) {
    createWashroom(
      name: $name
      stall: $stall
      overallRating: $overallRating
      toiletSeater: $toiletSeater
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

export const UPDATE_WASHROOM_IMAGE = gql`
  mutation($id: ID!, $url: String!, $contentType: String!, $name: String!) {
    createFile(
      userId: $userId
      url: $url
      contentType: $contentType
      name: $name
    ) {
      id
      name
      url
      contentType
      user {
        id
        email
      }
    }
  }
`;