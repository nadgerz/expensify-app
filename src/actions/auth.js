import { firebase, googleAuthProvider } from '../firebase/firebase';


export const startLogin = () => {
  return () => {
    // we are trying to call a firebase related method
    return firebase.auth().signInWithPopup( googleAuthProvider );
  };
};
