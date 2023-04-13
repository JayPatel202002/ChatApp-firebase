import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks";
import { useCollectionData } from "react-firebase-hooks";

const firebaseConfig = {
  apiKey: "AIzaSyAhbWsJVQRAkfEsuvsQTYeZZZEHizYVPNI",
  authDomain: "superchat-90924.firebaseapp.com",
  projectId: "superchat-90924",
  storageBucket: "superchat-90924.appspot.com",
  messagingSenderId: "258867603184",
  appId: "1:258867603184:web:b68aeb9926fd4dfb000435",
  measurementId: "G-MYHL2H0WM6"
};

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        {user ? <Chatroom /> : <SignIn /> }
      </section>
    </div>
  );
}

function SignIn(){
const signinWithGoogle = () =>{
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);

}

  return (
    <button onClick = {signinWithGoogle}>
      Sign in with google
    </button>
  ) 
}

function SignOut(){
  return auth.currentUser && (
    <button onClic = {()=> auth.signOut()}>
      Sign out
    </button>
  )
}

function Chatroom() {}

export default App;
