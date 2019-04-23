const getUserByKey = async (obj, args, { firebase }) => {
  const { key } = args;

  const ref = firebase.database().ref(`/users/${key}`);
  const result = (await ref.once("value")).val();
  const data = Object.assign({ key }, result);

  return data;
};

const getReviewByKey = async (obj, args, { firebase }) => {
  const { key } = args;

  const ref = firebase.database().ref(`/reviews/${key}`);
  const result = (await ref.once("value")).val();
  const data = Object.assign({ key }, result);

  return data;
};

const getWashroomByKey = async (obj, args, { firebase }) => {
  const { key } = args;

  const ref = firebase.database().ref(`/washrooms/${key}`);
  const result = (await ref.once("value")).val();
  const data = Object.assign({ key }, result);

  return data;
};

const getUserByUsername = async (obj, args, { firebase }) => {
  const { name } = args;

  const ref = firebase.database().ref("users");
  const result = await new Promise(resolve => {
    ref
      .orderByChild("name")
      .equalTo(name)
      .on("child_added", function(snapshot) {
        const key = snapshot.key;
        const data = snapshot.val();

        resolve(Object.assign({ key }, data));
      });
  });
  return result;
};

const getUsers = async (obj, args, { firebase }) => {
  const ref = firebase.database().ref("users");
  const result = [];
  await ref.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      const data = Object.assign({ key: childKey }, childData);
      result.push(data);
    });
  });
  return result;
};

const getReviewByID = async (obj, args, { firebase }) => {
  const { key } = args;

  const ref = firebase.database().ref("reviews");
  const result = await new Promise(resolve => {
    ref
      .orderByChild("key")
      .equalTo(key)
      .on("child_added", function(snapshot) {
        const key = snapshot.key;
        const data = snapshot.val();

        resolve(Object.assign({ key }, data));
      });
  });
  return result;
};

const getReviews = async (obj, args, { firebase }) => {
  const ref = firebase.database().ref("reviews");
  const result = [];
  await ref.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      const data = Object.assign({ key: childKey }, childData);
      result.push(data);
    });
  });
  return result;
};

const getWashroomByID = async (obj, args, { firebase }) => {
  const { key } = args;

  const ref = firebase.database().ref("washrooms");
  const result = await new Promise(resolve => {
    ref
      .orderByChild("key")
      .equalTo(key)
      .on("child_added", function(snapshot) {
        const key = snapshot.key;
        const data = snapshot.val();

        resolve(Object.assign({ key }, data));
      });
  });
  return result;
};

const getWashrooms = async (obj, args, { firebase }) => {
  const ref = firebase.database().ref("washrooms");
  const result = [];
  await ref.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      const data = Object.assign({ key: childKey }, childData);
      result.push(data);
    });
  });
  return result;
};

const updateUserByKey = async (obj, { input }, { firebase }) => {
  const key = input.key;
  delete input.key;

  const ref = firebase.database().ref(`/users/${key}`);
  const result = (await ref.once("value")).val();
  const infoToUpdate = Object.assign({}, result, input);

  firebase
    .database()
    .ref(`/users/${key}`)
    .set(infoToUpdate);

  const data = Object.assign({ key }, infoToUpdate);

  return data;
};

const updateWashroomByKey = async (obj, { input }, { firebase }) => {
  const key = input.key;
  delete input.key;

  const ref = firebase.database().ref(`/washrooms/${key}`);
  const result = (await ref.once("value")).val();
  const infoToUpdate = Object.assign({}, result, input);

  firebase
    .database()
    .ref(`/washrooms/${key}`)
    .set(infoToUpdate);

  const data = Object.assign({ key }, infoToUpdate);

  return data;
};

const updateReviewByKey = async (obj, { input }, { firebase }) => {
  const key = input.key;
  delete input.key;

  const ref = firebase.database().ref(`/reviews/${key}`);
  const result = (await ref.once("value")).val();
  const infoToUpdate = Object.assign({}, result, input);

  firebase
    .database()
    .ref(`/reviews/${key}`)
    .set(infoToUpdate);

  const data = Object.assign({ key }, infoToUpdate);

  return data;
};

const createUser = async (obj, { input }, { firebase }) => {
  const ref = firebase
    .database()
    .ref()
    .child("users")
    .push({ ...input });

  const result = Object.assign({ key: ref.key }, input);
  return result;
};

const createWashroom = async (obj, { input }, { firebase }) => {
  const ref = firebase
    .database()
    .ref()
    .child("washrooms")
    .push({ ...input });

  const result = Object.assign({ key: ref.key }, input);
  return result;
};

const createReview = async (obj, { input }, { firebase }) => {
  const ref = firebase
    .database()
    .ref()
    .child("reviews")
    .push({ ...input });

  const result = Object.assign({ key: ref.key }, input);
  return result;
};

module.exports = {
  Query: {
    getUserByKey,
    getReviewByKey,
    getWashroomByKey,
    getUserByUsername,
    getUsers,
    getReviewByID,
    getReviews,
    getWashroomByID,
    getWashrooms
  },
  Mutation: {
    updateUserByKey,
    updateWashroomByKey,
    updateReviewByKey,
    createUser,
    createWashroom,
    createReview
  }
};
