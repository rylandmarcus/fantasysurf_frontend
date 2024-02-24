import React from 'react'

const Login = ({setStatus}) => {
    const signup = () => {
        setStatus('signup')
    }
    const welcome = () => {
        setStatus('welcome')
    }
  return (
    <div>
        <h1>login</h1>
        <button onClick={signup}>Signup</button>
        <button onClick={welcome}>Welcome page</button>
    </div>
  )
}

export default Login