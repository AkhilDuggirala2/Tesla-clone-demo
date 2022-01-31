import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4EcWZZ8WEQ0DOW1plX_Dhw_1r-cTAmNo",
    authDomain: "tesla-clone-6f487.firebaseapp.com",
    projectId: "tesla-clone-6f487",
    storageBucket: "tesla-clone-6f487.appspot.com",
    messagingSenderId: "543359318443",
    appId: "1:543359318443:web:2a8a13f8e60ece1d2afaee"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth }