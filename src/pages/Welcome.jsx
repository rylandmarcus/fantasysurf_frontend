import React from 'react'

const Welcome = ({setStatus}) => {
    const signup = () => {
        setStatus('signup')
    }
    const login = () => {
        setStatus('login')
    }
  return (
    <div>
        <h1>Welcome Page</h1>
        <button onClick={signup}>Signup</button>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Welcome