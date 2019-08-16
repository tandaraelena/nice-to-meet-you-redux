const functions = require('firebase-functions');
// const admin = require('firebase-admin')
// admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Elena!");
});

// exports.userJoined = functions.auth.user().onCreate(user => {
//   return admin.firestore.collection('users')
//   .doc(user.uid)
//   .get().then(doc => {
//     const newUser = doc.data()
//     const notification = {
//       content: 'Joined the application',
//       user: `${newUser.firstName} ${newUser.lastName}`,
//       time: admmin.firestore.FieldValue.serverTimestamp()
//     }

//     return create
//   })
// })