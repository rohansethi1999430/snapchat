
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCGuzXFjm9Ad2ZBmjZBceR_ZOQEQavmGBA",
    authDomain: "snapchat-b221d.firebaseapp.com",
    projectId: "snapchat-b221d",
    storageBucket: "snapchat-b221d.appspot.com",
    messagingSenderId: "745607708610",
    appId: "1:745607708610:web:d51fbbf94b997bbe61205b"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const storage=firebase.storage();
  const auth=firebase.auth();
  const provider=firebase.auth.GoogleAuthProvider();

  export {db,storage,auth,provider}