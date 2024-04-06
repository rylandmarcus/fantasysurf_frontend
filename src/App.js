import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  //use effect to check for what to start status as to check auth, works but with delay
  //can you declare state in useeffect? no
  //google best way to chekc for auth in react
  //maybe initial state is used as a variable that checks for auth
  //you can make inital status 'loading' and then check for auth
  //can put everything in the outlet and thne auth check in here and that can redirtct 
  const test = 'welcome'
  const [status, setStatus] = useState(test);
  // useEffect(()=>{
  //   setStatus('authorized')
  // }, [])
  return (
    <div>
      <h1>hey</h1>
      {status==='welcome'?<Welcome setStatus={setStatus}></Welcome>:status==='login'?<Login setStatus={setStatus}></Login>:status==='signup'?<Signup setStatus={setStatus}></Signup>:status==='authorized'?<Outlet></Outlet>:null}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
