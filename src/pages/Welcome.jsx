import React from 'react'

const Welcome = ({setStatus}) => {
    const signup = () => {
        setStatus('signup')
    }
    const login = () => {
        setStatus('login')
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Welcome Page</h1>
        <div>
          <h3>Already have an account?</h3>
        <button onClick={login}>Click Here to Login</button>
        <h3>Don't have an account?</h3>
        <button onClick={signup}>Signup</button>
        </div>
    </div>
  )
}

export default Welcome