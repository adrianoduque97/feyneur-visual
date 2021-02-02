import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCDx3owXu-UcUTPscWpE7b60lbj3M5frco",
    authDomain: "feyneur-visual.firebaseapp.com",
    projectId: "feyneur-visual",
    storageBucket: "feyneur-visual.appspot.com",
    messagingSenderId: "575114905589",
    appId: "1:575114905589:web:4c85cc096bb3e49b6802bc",
    measurementId: "G-9SV7BEQKQM"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await  userRef.get()

    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(e){
        console.log(e.message)

      }

    }
    return userRef
  }



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;