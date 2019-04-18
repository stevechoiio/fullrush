// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createWashroom = `mutation CreateWashroom($input: CreateWashroomInput!) {
  createWashroom(input: $input) {
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
export const updateWashroom = `mutation UpdateWashroom($input: UpdateWashroomInput!) {
  updateWashroom(input: $input) {
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
export const deleteWashroom = `mutation DeleteWashroom($input: DeleteWashroomInput!) {
  deleteWashroom(input: $input) {
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
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
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
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
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
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
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
export const createPhoto = `mutation CreatePhoto($input: CreatePhotoInput!) {
  createPhoto(input: $input) {
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
export const updatePhoto = `mutation UpdatePhoto($input: UpdatePhotoInput!) {
  updatePhoto(input: $input) {
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
export const deletePhoto = `mutation DeletePhoto($input: DeletePhotoInput!) {
  deletePhoto(input: $input) {
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
