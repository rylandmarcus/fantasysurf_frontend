import axios from 'axios'
import React from 'react'

const Logout = ({setStatus}) => {
    const handleLogout = ()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL+'/auth/logout').then(
            res=>{
                console.log(res)
                window.location.reload(true)
                setStatus('welcome')
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
    }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout