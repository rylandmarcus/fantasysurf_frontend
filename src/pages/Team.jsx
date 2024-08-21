import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Team = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
        <h1>{data.team.name} {data.league.myTeam?"(My Team)": null}</h1>
        <h4>{data.league.name}{data.league.currentUser>-1?"I'm in this leageu":null}</h4>
    </div>
  )
}

export default Team