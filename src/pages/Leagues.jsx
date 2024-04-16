import React from 'react'
import { Link } from 'react-router-dom'

const Leagues = () => {
  const leagues = []
  return (
    <div>
      <h1>Leagues</h1>
      <Link to='/newleague'><button>Create New League</button></Link>
      <Link><button>Join League</button></Link>
      <h2>Your Teams:</h2>
      {leagues.length===0?<div>Join or Create a league to make a team!</div>:null}
    </div>
  )
}

export default Leagues