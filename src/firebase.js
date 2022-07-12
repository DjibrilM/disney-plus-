import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth"


 
const firebaseConfig = {
  apiKey: "AIzaSyClDZS3-r5qjm7EXBrN1vbxvHJ3auTKNdk",
  authDomain: "disney--plus-3fb3f.firebaseapp.com",
  projectId: "disney--plus-3fb3f",
  storageBucket: "disney--plus-3fb3f.appspot.com",
  messagingSenderId: "1072472652336",
  appId: "1:1072472652336:web:39fd6b1d0d3e9581960bf5",
  measurementId: "G-W8F1VP75M3"
};
  

const app =  initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




export { auth,provider,storage,db};


