// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    createdAt
    updatedAt
    password
    facebookUserId
    userReviews {
      items {
        id
        rating
        comment
        placeId
      }
      nextToken
    }
    gender
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      password
      facebookUserId
      userReviews {
        nextToken
      }
      gender
    }
    nextToken
  }
}
`;
export const getWashroom = `query GetWashroom($id: ID!) {
  getWashroom(id: $id) {
    id
    name
    stall
    listOfPhotos {
      items {
        id
        contentType
        name
        url
        date
      }
      nextToken
    }
    listOfReviews {
      items {
        id
        rating
        comment
        placeId
      }
      nextToken
    }
    toiletSeater
    overallRating
    numberOfReviews
    instruction
    address
    locationLat
    locationLong
    hoursFrom
    hoursTo
    placeId
  }
}
`;
export const listWashrooms = `query ListWashrooms(
  $filter: ModelWashroomFilterInput
  $limit: Int
  $nextToken: String
) {
  listWashrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      stall
      listOfPhotos {
        nextToken
      }
      listOfReviews {
        nextToken
      }
      toiletSeater
      overallRating
      numberOfReviews
      instruction
      address
      locationLat
      locationLong
      hoursFrom
      hoursTo
      placeId
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    user {
      id
      name
      email
      createdAt
      updatedAt
      password
      facebookUserId
      userReviews {
        nextToken
      }
      gender
    }
    washroom {
      id
      name
      stall
      listOfPhotos {
        nextToken
      }
      listOfReviews {
        nextToken
      }
      toiletSeater
      overallRating
      numberOfReviews
      instruction
      address
      locationLat
      locationLong
      hoursFrom
      hoursTo
      placeId
    }
    rating
    comment
    placeId
  }
}
`;
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        name
        email
        createdAt
        updatedAt
        password
        facebookUserId
        gender
      }
      washroom {
        id
        name
        stall
        toiletSeater
        overallRating
        numberOfReviews
        instruction
        address
        locationLat
        locationLong
        hoursFrom
        hoursTo
        placeId
      }
      rating
      comment
      placeId
    }
    nextToken
  }
}
`;
export const getPhoto = `query GetPhoto($id: ID!) {
  getPhoto(id: $id) {
    id
    contentType
    name
    url
    washroom {
      id
      name
      stall
      listOfPhotos {
        nextToken
      }
      listOfReviews {
        nextToken
      }
      toiletSeater
      overallRating
      numberOfReviews
      instruction
      address
      locationLat
      locationLong
      hoursFrom
      hoursTo
      placeId
    }
    date
  }
}
`;
export const listPhotos = `query ListPhotos(
  $filter: ModelPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      contentType
      name
      url
      washroom {
        id
        name
        stall
        toiletSeater
        overallRating
        numberOfReviews
        instruction
        address
        locationLat
        locationLong
        hoursFrom
        hoursTo
        placeId
      }
      date
    }
    nextToken
  }
}
`;
