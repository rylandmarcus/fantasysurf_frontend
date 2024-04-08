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
                if (res.data.Status==='Success'&&res.data.admin){
                    setStatus('admin')
                    // window.location.href = '/home'
                    //decide what page to direct to
                } else if (res.data.Status==='Success'){
                    setStatus('authorized')
                    window.location.href = '/home'
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
    <div style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:'20px'}}>
        <h1>login</h1>
        <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', width:'200px', justifyContent:'center', padding:'20px'}}>
            <input type="text" name='username' placeholder='username' required/>
            <input type="password" name='password' placeholder='password' required/>
            <input type="submit" value="Log in"/>
        </form>
        <div id='errorSlot'></div>
        <button onClick={signup}>Don't have an account? Signup Here</button>
        <button onClick={welcome}>Back to the Welcome page</button>
    </div>
  )
}

export default Login