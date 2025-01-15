import { createContext, useContext } from "react"; // For React Context
import { initializeApp } from "firebase/app"; // For initializing Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Auth
import { getDatabase, set, ref } from "firebase/database"; // Firebase Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyC36WUt0Ddf1qoHhRiTJ3P3XFEM4TTPtEU",
  authDomain: "authentication-7cc85.firebaseapp.com",
  projectId: "authentication-7cc85",
  storageBucket: "authentication-7cc85.appspot.com",
  messagingSenderId: "1092841935094",
  appId: "1:1092841935094:web:e6ac06e5473f68a1e71cd7",
  measurementId: "G-EH221SGWKB",
  databaseURL: "https://authentication-7cc85-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
