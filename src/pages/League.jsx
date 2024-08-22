import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Joinleaguebutton from '../components/Joinleaguebutton'
import axios from 'axios'

const League = () => {
    const league = useLoaderData()
    const leaveLeague = (e)=>{
        //once league is active, no more leaving, also make it a second are you sure you want to leave
        e.preventDefault()
        axios.put(process.env.REACT_APP_BACKEND_URL+'/leagues/leaveleague/'+league._id).then(
            res=>{
                window.location.href = '/leagues'
            }
        )
        console.log('leave league')
    }
  return (
    <div>
        <h1>{league.name}</h1>
        <h2>{league.teams.length}/{league.leagueSize} {
            league.teams.length==league.leagueSize?"league full": 
            league.currentUser==-1?<Joinleaguebutton league={league}></Joinleaguebutton>:
            null} {league.currentUser>=0?<button onClick={leaveLeague}>Leave League</button>:null}</h2>
        {league.currentUser>=0&&league.status==='full'?<Link to={`/leagues/${league._id}/draftroom`}><button>Join Draft</button></Link>:null}
        <h2>Teams:</h2>
        {league.teams.map((team, index)=>{
            return(
                <div key={index+team._id}>
                    <Link to={`/leagues/${league._id}/team/${team._id}`}><h3>{team.name}{index==league.currentUser?"(My team)":null}</h3></Link>
                    <h4>Surfers:</h4>
                    {team.surfers.map((surfer, index)=>{
                        return(
                            <div key={index+surfer._id}>
                                <h5>{surfer.name}</h5>
                                <h6>{surfer.country}</h6>
                                <h6>{surfer.rank}</h6>
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default League