import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Joinleaguebutton from '../components/Joinleaguebutton'

const Joinleague = () => {
    const leagues = useLoaderData()
    console.log(leagues)
  return (
    <div>
        <h1>Find a League</h1>
        {leagues.length===0?<div>There are no leagues!</div>:
        <div>
            {leagues.map((league, index)=>{
                return(
                    <div key={index+league._id} style={{display:'flex', padding:'10px', justifyContent:'space-around'}}>
                        <h3>{league.name}</h3>
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