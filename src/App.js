import './App.css';
import Chat from './components/Chat/Chat';
import Signin from './components/SignIn/Signin';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'




function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      
      {user ? <Chat /> : <Signin />}
  
    </div>
  );
}

export default App;
