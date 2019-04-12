import gql from "graphql-tag";

// Queries
export const GET_ALL_WASHROOMS = gql`
  query GetAllWashrooms {
    allWashrooms {
      id
      name
      instruction
      overallRating
      numberOfReviews
      address
      placeId
      locationLat
      locationLong
      toiletSeater
      listOfPhotos {
        id
        url
      }
    }
  }
`;
export const GET_ALL_WASHROOM_BY_DISTANCE = gql`
  query GetAllReviewsByDistance(
    $latmin: Float!
    $latmax: Float!
    $longmin: Float!
    $longmax: Float!
  ) {
    allWashrooms(
      filter: {
        locationLat_gt: $latmin
        locationLat_lt: $latmax
        locationLong_gt: $longmin
        locationLong_lt: $longmax
      }
    ) {
      id
      name
      instruction
      overallRating
      numberOfReviews
      address
      placeId
      locationLat
      locationLong
      toiletSeater
      listOfPhotos {
        id
        url
      }
    }
  }
`;
export const GET_REVIEWS_FOR_WASHROOM = gql`
  query GetAllReviews($placeId: String!) {
    allReviews(filter: { placeId: $placeId }) {
      rating
      placeId
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
  query GetOneWashroom($name: String!) {
    oneWashroom {
      name
    }
  }
`;
// Mutations
export const ADD_WASHROOM = gql`
  mutation AddWashroom(
    $placeId: String!
    $name: String!
    $stall: Int!
    $overallRating: Float!
    $numberOfReviews: Int!
    $toiletSeater: Boolean!
    $listOfPhotos: File
    $address: String!
    $lat: Float!
    $long: Float!
  ) {
    createWashroom(
      placeId: $placeId
      name: $name
      stall: $stall
      overallRating: $overallRating
      numberOfReviews: $numberOfReviews
      toiletSeater: $toiletSeater
      listOfPhotos: $listOfPhotos
      address: $address
      locationLat: $lat
      locationLong: $long
    ) {
      id
      name
      stall
    }
  }
`;
export const ADD_REVIEW = gql`
  mutation AddReview($placeId: String!, $rating: Int!) {
    createReview(placeId: $placeId, rating: $rating) {
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
export const UPDATE_WASHROOM_RATING = gql`
  mutation updateWashroomRating(
    $id: ID!
    $overallRating: Float!
    $numberOfReviews: Int!
  ) {
    updateWashroom(
      id: $id
      numberOfReviews: $numberOfReviews
      overallRating: $overallRating
    ) {
      id
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
