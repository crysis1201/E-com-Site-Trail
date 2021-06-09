import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const Config ={
        apiKey: "AIzaSyCdp5iok0u2cy9gD7OCeU8ADpTv_KlSWyg",
        authDomain: "e-com-d35c1.firebaseapp.com",
        projectId: "e-com-d35c1",
        storageBucket: "e-com-d35c1.appspot.com",
        messagingSenderId: "609934601013",
        appId: "1:609934601013:web:58ce83a6dfd9e5625f3a7c",
        measurementId: "G-JRXS6WGDS8"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
