import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { io } from 'socket.io-client'

const Draftroom = () => {
    const league = useLoaderData()
    const [leagueCopy, setLeagueCopy] = useState(league)
    const socket = io.connect(process.env.REACT_APP_BACKEND_URL)
    useEffect(()=>{
        socket.on('connect', ()=>{
            console.log('connected')
        })
        socket.on('receiveHi', ()=>{
            console.log('hello from the draft room')
        })
        socket.on('receiveHiOthers', ()=>{
            console.log('hello from another user in the draft room')
        })
        return ()=>{
            //leave room
        }
    },[socket])
    useEffect(()=>{
        socket.emit('join draftroom', league._id)
        return ()=>{
            socket.emit('leave draftroom', league._id)
        }
    },[league])
    const sayHi = () => {
        socket.emit('sayHi', leagueCopy._id)
    }
    const hiOthers = () => {
        socket.emit('hiOthers', leagueCopy._id)
    }
    const draftSurfer = (e) => {
        const draftedSurferId = leagueCopy.event.surfers[e.target.previousSibling.previousSibling.innerText-1]._id
        console.log('drafting '+e.target.previousSibling.previousSibling.innerText)
        socket.emit('draftSurfer', draftedSurferId, league.currentUser)
        //YOU ARE HERE
    }
  return (
    <div>
        <h1>Draftroom</h1>
        <h2>Draft for {leagueCopy.name}</h2>
        <button onClick={sayHi}>Say Hi</button>
        <button onClick={hiOthers}>Say Hi To Others</button>
        <h3>Teams</h3>
        {leagueCopy.teams.map((team, i)=>{
            return <div key={team._id+'in teams'+i}>
                <h4>{team.name}</h4>
                <div>
                    {team.surfers.map((surfer, i)=>{
                        return <li key={surfer._id+'in teams'+i}>{surfer.name}</li>
                    })}
                </div>
            </div>
        })}
        <h3>Surfers Remaining for Event: {leagueCopy.event.name}</h3>
        {leagueCopy.event.surfers.map((surfer, i)=>{
            return <div key={surfer._id+'in event'+i} style={{display:'flex',flexDirection:'row'}}> 
                <div>{i+1}</div>
                <div>{surfer.name}</div>
                <button onClick={draftSurfer}>draft</button> 
                </div>
        })}
    </div>
  )
}

export default Draftroom