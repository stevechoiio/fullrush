
    const updateFileByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/files/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/files/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateReviewByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/reviews/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/reviews/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateWashroomByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/washrooms/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/washrooms/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateUserByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/users/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/users/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateSetWashroomPhotosPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/setwashroomphotospayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/setwashroomphotospayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateUnsetWashroomPhotosPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/unsetwashroomphotospayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/unsetwashroomphotospayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateAddToReviewPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/addtoreviewpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/addtoreviewpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateAddToUserPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/addtouserpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/addtouserpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateRemoveFromReviewPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/removefromreviewpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/removefromreviewpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateRemoveFromUserPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/removefromuserpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/removefromuserpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateAuthenticateUserPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/authenticateuserpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/authenticateuserpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateSignupUserPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/signupuserpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/signupuserpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const updateInvokeFunctionPayloadByKey = async (obj, { input }, { firebase }) => {
      
      const key = input.key
      delete input.key
      
      const ref = firebase.database().ref(`/invokefunctionpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const infoToUpdate = Object.assign({}, result, input)

      firebase.database().ref(`/invokefunctionpayloads/${key}`).set(infoToUpdate)

      const data = Object.assign({ key }, infoToUpdate)

      return data
    
    }
  

    const createFile = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('files').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const createReview = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('reviews').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const createWashroom = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('washrooms').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateFile = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('files').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateReview = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('reviews').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('users').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateWashroom = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('washrooms').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateOrCreateFile = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('files').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateOrCreateReview = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('reviews').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateOrCreateUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('users').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const updateOrCreateWashroom = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('washrooms').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const deleteFile = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('files').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const deleteReview = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('reviews').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const deleteUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('users').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const deleteWashroom = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('washrooms').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const setWashroomPhotos = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('setwashroomphotospayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const unsetWashroomPhotos = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('unsetwashroomphotospayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const addToReview = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('addtoreviewpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const addToUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('addtouserpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const removeFromReview = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('removefromreviewpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const removeFromUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('removefromuserpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const createUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('users').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const authenticateUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('authenticateuserpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const signupUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('signupuserpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const invokeFunction = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('invokefunctionpayloads').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    const getFileByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/files/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const getReviewByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/reviews/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const getUserByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/users/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const getWashroomByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/washrooms/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const get_QueryMetaByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/_querymetas/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const getLoggedInUserPayloadByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/loggedinuserpayloads/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const getNodeByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/nodes/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const allFiles = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('files')
      const result = []
      await ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          
          const data = Object.assign({ key: childKey }, childData)
          result.push(data)
        });
      });
      return result
    
    }
  

    const allReviews = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('reviews')
      const result = []
      await ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          
          const data = Object.assign({ key: childKey }, childData)
          result.push(data)
        });
      });
      return result
    
    }
  

    const allUsers = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('users')
      const result = []
      await ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          
          const data = Object.assign({ key: childKey }, childData)
          result.push(data)
        });
      });
      return result
    
    }
  

    const allWashrooms = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('washrooms')
      const result = []
      await ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          
          const data = Object.assign({ key: childKey }, childData)
          result.push(data)
        });
      });
      return result
    
    }
  

    const _allFilesMeta = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('_querymetas')
      const result = await new Promise(resolve => {
        ref.orderByChild('filter').equalTo(filter).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const _allReviewsMeta = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('_querymetas')
      const result = await new Promise(resolve => {
        ref.orderByChild('filter').equalTo(filter).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const _allUsersMeta = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('_querymetas')
      const result = await new Promise(resolve => {
        ref.orderByChild('filter').equalTo(filter).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const _allWashroomsMeta = async (obj, args, { firebase }) => {
      const { filter, orderBy, skip, after, before, first, last } = args
      
      const ref = firebase.database().ref('_querymetas')
      const result = await new Promise(resolve => {
        ref.orderByChild('filter').equalTo(filter).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const File = async (obj, args, { firebase }) => {
      const { id } = args
      
      const ref = firebase.database().ref('files')
      const result = await new Promise(resolve => {
        ref.orderByChild('id').equalTo(id).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const Review = async (obj, args, { firebase }) => {
      const { id } = args
      
      const ref = firebase.database().ref('reviews')
      const result = await new Promise(resolve => {
        ref.orderByChild('id').equalTo(id).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const User = async (obj, args, { firebase }) => {
      const { email, facebookUserId, id } = args
      
      const ref = firebase.database().ref('users')
      const result = await new Promise(resolve => {
        ref.orderByChild('email').equalTo(email).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const Washroom = async (obj, args, { firebase }) => {
      const { id, placeId } = args
      
      const ref = firebase.database().ref('washrooms')
      const result = await new Promise(resolve => {
        ref.orderByChild('id').equalTo(id).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const loggedInUser = async (obj, args, { firebase }) => {
      
      
      const ref = firebase.database().ref('loggedinuserpayloads')
      const result = await new Promise(resolve => {
        ref.orderByChild('undefined').equalTo(undefined).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const user = async (obj, args, { firebase }) => {
      
      
      const ref = firebase.database().ref('users')
      const result = await new Promise(resolve => {
        ref.orderByChild('undefined').equalTo(undefined).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const node = async (obj, args, { firebase }) => {
      const { id } = args
      
      const ref = firebase.database().ref('nodes')
      const result = await new Promise(resolve => {
        ref.orderByChild('id').equalTo(id).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    module.exports = {
      Query: {
        getFileByKey,
getReviewByKey,
getUserByKey,
getWashroomByKey,
get_QueryMetaByKey,
getLoggedInUserPayloadByKey,
getNodeByKey,
allFiles,
allReviews,
allUsers,
allWashrooms,
_allFilesMeta,
_allReviewsMeta,
_allUsersMeta,
_allWashroomsMeta,
File,
Review,
User,
Washroom,
loggedInUser,
user,
node
      },
      Mutation: {
        updateFileByKey,
updateReviewByKey,
updateWashroomByKey,
updateUserByKey,
updateSetWashroomPhotosPayloadByKey,
updateUnsetWashroomPhotosPayloadByKey,
updateAddToReviewPayloadByKey,
updateAddToUserPayloadByKey,
updateRemoveFromReviewPayloadByKey,
updateRemoveFromUserPayloadByKey,
updateAuthenticateUserPayloadByKey,
updateSignupUserPayloadByKey,
updateInvokeFunctionPayloadByKey,
createFile,
createReview,
createWashroom,
updateFile,
updateReview,
updateUser,
updateWashroom,
updateOrCreateFile,
updateOrCreateReview,
updateOrCreateUser,
updateOrCreateWashroom,
deleteFile,
deleteReview,
deleteUser,
deleteWashroom,
setWashroomPhotos,
unsetWashroomPhotos,
addToReview,
addToUser,
removeFromReview,
removeFromUser,
createUser,
authenticateUser,
signupUser,
invokeFunction
      }
    }
  