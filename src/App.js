import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios'
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Header from './components/Header';

function App() {
  //use effect to check for what to start status as to check auth, works but with delay
  //can you declare state in useeffect? no
  //google best way to chekc for auth in react
  //maybe initial state is used as a variable that checks for auth
  //you can make inital status 'loading' and then check for auth
  //can put everything in the outlet and thne auth check in here and that can redirtct 
  const [status, setStatus] = useState('loading');
  axios.defaults.withCredentials = true
  useEffect(()=>{
    axios.get(process.env.REACT_APP_BACKEND_URL+'/verify').then(res=>{
      if (res.data.Status==='Success'&&res.data.admin){
        console.log('admin')
        // setStatus('admin')
        setStatus('authorized')
      } else if (res.data.Status==='Success'){
        setStatus('authorized')
      } else {
        setStatus('welcome')
      }
    }).catch(err=>{
      console.log(err)
      setStatus('welcome')
    })
  }, [])
  return (
    <div>
      <h1>Fantasy Surf App</h1>
      {status==='admin'?<Admin setStatus={setStatus}></Admin>:status==='loading'?<div>loading...</div>:status==='welcome'?<Welcome setStatus={setStatus}></Welcome>:status==='login'?<Login setStatus={setStatus}></Login>:status==='signup'?<Signup setStatus={setStatus}></Signup>:status==='authorized'?
      <div>
        <Header></Header>
        <Navbar setStatus={setStatus}></Navbar>
        <Outlet></Outlet>
      </div>
      :null}
    </div>
  );
}

export default App;
