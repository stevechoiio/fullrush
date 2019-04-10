import gql from "graphql-tag";

// Queries
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

// Mutations 
export const UPDATE_WASHROOM_IMAGE = gql`
  mutation($userId: ID!, $url: String!, $contentType: String!, $name: String!) {
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