
    const getUserByKey = async (obj, args, { firebase }) => {
      const { key } = args
      
      const ref = firebase.database().ref(`/users/${key}`)
      const result = (await ref.once('value')).val()
      const data = Object.assign({ key }, result)

      return data
    
    }
  

    const getUserByUsername = async (obj, args, { firebase }) => {
      const { name } = args
      
      const ref = firebase.database().ref('users')
      const result = await new Promise(resolve => {
        ref.orderByChild('name').equalTo(name).on('child_added', function(snapshot) {
          const key = snapshot.key;
          const data = snapshot.val();
            
          resolve(Object.assign({ key }, data))
        })
      });
      return result
    
    }
  

    const getUsers = async (obj, args, { firebase }) => {
      
      
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
  

    const createUser = async (obj, { input }, { firebase }) => {
      
      const ref = firebase.database().ref().child('users').push({ ...input })

      const result = Object.assign({ key: ref.key }, input)
      return result
    
    }
  

    module.exports = {
      Query: {
        getUserByKey,
getUserByUsername,
getUsers
      },
      Mutation: {
        updateUserByKey,
createUser
      }
    }
  