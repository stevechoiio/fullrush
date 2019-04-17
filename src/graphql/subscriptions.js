// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateWashroom = `subscription OnCreateWashroom {
  onCreateWashroom {
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
export const onUpdateWashroom = `subscription OnUpdateWashroom {
  onUpdateWashroom {
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
export const onDeleteWashroom = `subscription OnDeleteWashroom {
  onDeleteWashroom {
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
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
export const onCreatePhoto = `subscription OnCreatePhoto {
  onCreatePhoto {
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
export const onUpdatePhoto = `subscription OnUpdatePhoto {
  onUpdatePhoto {
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
export const onDeletePhoto = `subscription OnDeletePhoto {
  onDeletePhoto {
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
