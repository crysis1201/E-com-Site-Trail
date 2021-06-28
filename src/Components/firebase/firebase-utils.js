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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`)

        const snapshot = await userRef.get();

        if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const setDate = new Date();

                try{
                        await userRef.set({
                                displayName,
                                email,
                                setDate,
                                ...additionalData
                        });

                }
                catch(error){
                        console.log('error creating user', error.message)
                }
        
        }
        return userRef;
};

export const addCollectionAndDocuments = async ( collectionkey, objectsToAdd ) => {
 const collectionRef = firestore.collection(collectionkey);

 const batch = firestore.batch();
 objectsToAdd.forEach(obj => {
         const newDocRef = collectionRef.doc();
         batch.set(newDocRef, obj);
 });

 return await batch.commit();

};

export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(doc => {
                const {title, items} = doc.data();

                return {
                        routeName: encodeURI(title.toLowerCase()),
                        id: doc.id,
                        title,
                        items
                }
        });

        return transformedCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
        }, {});
}

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
