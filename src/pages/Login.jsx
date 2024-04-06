import React from 'react'
import axios from 'axios'

const Login = ({setStatus}) => {
    axios.defaults.withCredentials = true
    const signup = () => {
        setStatus('signup')
    }
    const welcome = () => {
        setStatus('welcome')
    }
    const handleLogin = (e)=>{
        e.preventDefault()
        const username = document.querySelector("input[name='username']").value
        const password = document.querySelector("input[name='password']").value
        axios.post(process.env.REACT_APP_BACKEND_URL+'/auth/login', {username:username, password:password}).then(
            res=>{
                console.log(res)
                if (res.data.Status==='Success'){
                    setStatus('authorized')
                } else {
                    console.log('login failed')
                    document.getElementById('errorSlot').innerText = 'login failed'
                }
            }
        ).catch(
            err=>{
                document.getElementById('errorSlot').innerText = err.response.data.message
            }
        )
    }
  return (
    <div>
        <h1>login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" name='username' placeholder='username' required/>
            <input type="password" name='password' placeholder='password' required/>
            <input type="submit" value="Log in"/>
        </form>
        <div id='errorSlot'></div>
        <button onClick={signup}>Signup</button>
        <button onClick={welcome}>Welcome page</button>
    </div>
  )
}

export default Login