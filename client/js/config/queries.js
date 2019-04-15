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
export const CHECK_DUPLICATE_WASHROOM = gql`
  query GetAllWashrooms($placeId: String!) {
    allWashrooms(filter: { placeId: $placeId }) {
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

export const GET_ALL_PHOTOS = gql`
  query GetAllPhotos {
    allFiles {
      id
      url
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
      user {
        name
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
      userReviews {
        id
      }
    }
  }
`;

export const GET_WASHROOM_FROM_PHOTO = gql`
  query GetWashroomFromPhoto($id: ID!) {
    getWashroom
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
    $listOfPhotosId: ID
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
      listOfPhotosId: $listOfPhotosId
      address: $address
      locationLat: $lat
      locationLong: $long
    ) {
      id
      name
      stall
      placeId
    }
  }
`;
export const ADD_REVIEW = gql`
  mutation AddReview(
    $placeId: String!
    $rating: Int!
    $userId: ID!
    $lightRating: Int!
    $easeRating: Int!
    $dryingRating: Int!
    $sinkRating: Int!
    $toiletRating: Int!
    $comment: String!
  ) {
    createReview(
      placeId: $placeId
      rating: $rating
      userId: $userId
      lightRating: $lightRating
      easeRating: $easeRating
      dryingRating: $dryingRating
      sinkRating: $sinkRating
      toiletRating: $toiletRating
      comment: $comment
    ) {
      id
      rating
    }
  }
`;

export const ADD_WASHROOM_PHOTO = gql`
  mutation AddWashroomPhoto(
    $url: String!
    $name: String!
    $contentType: String!
  ) {
    createFile(url: $url, name: $name, contentType: $contentType) {
      id
      url
      name
      contentType
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
