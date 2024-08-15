import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Joinleaguebutton from '../components/Joinleaguebutton'

const Joinleague = () => {
    const leagues = useLoaderData()
    console.log(leagues)
  return (
    <div>
        <h1>Find a League</h1>
        {leagues.length===0?<div>There are no leagues to join!</div>:
        <div>
            {leagues.map((league, index)=>{
                return(
                    <div key={index+league._id} style={{display:'flex', padding:'10px', justifyContent:'space-around'}}>
                        <Link to={`/leagues/${league._id}`}><h3>{league.name}</h3></Link>
                        <h4>{league.teams.length}/{league.leagueSize}</h4>
                        {league.teams.length<league.leagueSize?<Joinleaguebutton league={league}></Joinleaguebutton>:null}
                    </div>
                )
            })}
        </div>
        }
    </div>
  )
}

export default Joinleague