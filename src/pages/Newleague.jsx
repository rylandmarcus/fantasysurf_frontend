import axios from 'axios'
import React from 'react'

const Newleague = () => {
    const createLeague = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value
        axios.post(process.env.REACT_APP_BACKEND_URL+'/leagues/new', {name:name, password:password})
        .then((res)=>{window.location.href = '/leagues'})
        e.target.name.value = ''
        e.target.password.value = ''
    }
  return (
    <div>
        <h1>Create New League</h1>
        <form onSubmit={createLeague}>
            <input type="text" name="name" placeholder='League Name' required/>
            <input type="text" name="password" placeholder='League Password' required/>
            {/* <input type="" name="leagueType" placeholder='League Type' required/> */}
            {/* <input type="" name="event" placeholder='which event' required/> */}
            {/* <input type="" name="leagueLength" placeholder='one event or full year/rest of year' required/> */}
            <input type="submit" value="Create League"/>
        </form>
    </div>
  )
}

export default Newleague