import React from 'react'

const Signup = ({setStatus}) => {
    const welcome = () => {
        setStatus('welcome')
    }
    const login = () => {
        setStatus('login')
    }
  return (
    <div>
        <h1>Sign Up</h1>
        <button onClick={login}>Login</button>
        <button onClick={welcome}>Welcome page</button>
    </div>
  )
}

export default Signup