import {useFirebase} from "./context/firebase"
import {useState} from 'react'

function App() {
  const firebase = useFirebase();
  const [email,setEmail] = useState('')
  const [password , setPassword] = useState('')

  console.log('firebase' , firebase);
  return (
    <div className="App">
     <h1>Fire base</h1>
     <input onChange={(e) => setEmail(e.target.value) }
     value={email} 
     type="email" 
     placeholder="enter email" />
     <input onChange={(e) => setPassword(e.target.value) }
     value={password}
     type="password" 
     placeholder="enter password" />
     <button onClick={()=>
      {firebase.signupUserWithEmailAndPassword(email,password)
      firebase.putData('users/' + "devindi",{email,password});}
      }>Signup</button>
    </div>
  );
}

export default App;
