import React from 'react'

const Signup = ({setStatus}) => {
    const welcome = () => {
        setStatus('welcome')
    }
    const login = () => {
        setStatus('login')
    }
    const handleSignup = async (e)=>{
      e.preventDefault()
      const username = document.querySelector("input[name='username']").value
      const password = document.querySelector("input[name='password']").value
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL+'/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username:username, password:password }),
        })
        console.log(response.message)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
          setStatus('login')
        } else if (data.message==="exists"){
          document.getElementById('errorSlot').innerText = "username already exists"
        } else {
          document.getElementById('errorSlot').innerText = "signup failed"
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  return (
    <div style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:'20px'}}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup} style={{display:'flex', flexDirection:'column', width:'200px', justifyContent:'center', padding:'20px'}}>
            <input type="text" name='username' placeholder='username' required/>
            <input type="password" name='password' placeholder='password' required/>
            <input type="submit" value="Sign up"/>
        </form>
        <div id='errorSlot'></div>
        <button onClick={login}>Already have an account? Login Here</button>
        <button onClick={welcome}>Back to the Welcome page</button>
    </div>
  )
}

export default Signup