import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyB8q4y7KBEKTOeBVbOp3X3pWufBb1jGBv8",
    authDomain: "crwn-db-ded66.firebaseapp.com",
    projectId: "crwn-db-ded66",
    storageBucket: "crwn-db-ded66.appspot.com",
    messagingSenderId: "1066456433640",
    appId: "1:1066456433640:web:486cdbbca4f18036bf5a5d",
    measurementId: "G-1BNM2NL87S"
  };

export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
    })
    }catch(error){
      console.log('error creating user',error.message)
    }
  }
  return userRef;
}

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;

