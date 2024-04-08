import React, { useEffect } from 'react'
// import Logout from '../components/Logout'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Admin = () => {
    axios.defaults.withCredentials = true
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL+'/admin').then(res=>{
            if (res.data){
                console.log(res.data)
            } else {
                console.log('no data')
            }
        }).catch(err=>{
            console.log(err)
        })
    }, [])
  return (
    <div>
        {/* <Logout setStatus={setStatus}></Logout> */}
        <h1>Admin</h1>
        <Link to={'/admin/surfers'}>Surfers</Link>
        <Link to={'/admin/events'}>Events</Link>
    </div>
  )
}

export default Admin