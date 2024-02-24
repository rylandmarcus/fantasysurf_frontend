import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [status, setStatus] = useState('welcome');
  return (
    <div>
      <h1>hey</h1>
      {status==='welcome'?<Welcome setStatus={setStatus}></Welcome>:status==='login'?<Login setStatus={setStatus}></Login>:status==='signup'?<Signup setStatus={setStatus}></Signup>:status==='authorized'?<Outlet></Outlet>:null}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
