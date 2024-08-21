import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Leagues = () => {
  const leagues = useLoaderData()
  console.log(leagues)
  return (
    <div>
      <h1>Leagues</h1>
      <Link to='/newleague'><button>Create New League</button></Link>
      <Link to='/joinleague'><button>Join League</button></Link>
      <h2>Your Teams:</h2>
      {leagues.length===0?<div>Join or Create a league to make a team!</div>:
      <div>
        {leagues.map((league, index)=>{
          return(
            <div key={index+league._id}>
              <Link to={`/leagues/${league._id}`}><h3>{league.name}</h3></Link>
              <h4>Teams:</h4>
              {league.teams.map((team, index)=>{
                return(
                  <div key={index+team._id}>
                    <Link to={`/leagues/${league._id}/team/${team._id}`}>{team.name}{index===league.currentUser?'(My Team!)':null}</Link>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      }
    </div>
  )
}

export default Leagues