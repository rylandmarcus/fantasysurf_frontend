import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { io } from 'socket.io-client'

const Draftroom = () => {
    const league = useLoaderData()
    const [leagueCopy, setLeagueCopy] = useState(league)
    const socket = io.connect(process.env.REACT_APP_BACKEND_URL)
    const [announcementBar, setAnnouncementBar] = useState('')
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
        // socket.on('thePickIsIn', ()=>{
        //     console.log('the pick is in')
        //     setAnnouncementBar('The Pick Is In')
        // })
        socket.on('receiveDraft', (draftedSurferId, drafterIdx)=>{
            console.log('received draft')
            console.log(draftedSurferId)
            if (draftedSurferId){
                const draftedSurferIdx = league.event.surfers.findIndex(surfer=>surfer._id === draftedSurferId)
                if (draftedSurferIdx>=0){     
                    let updatedLeague = JSON.parse(JSON.stringify(leagueCopy)); // Deep clone
                    console.log(updatedLeague.event.surfers)
                    updatedLeague.teams[drafterIdx].surfers.push(draftedSurferIdx)
                    updatedLeague.event.surfers = updatedLeague.event.surfers.filter(surfer=>surfer._id !== draftedSurferId)
                    setLeagueCopy(updatedLeague)
                    setAnnouncementBar('')
                    console.log(league.event.surfers[draftedSurferIdx].name+' was drafted by '+league.teams[drafterIdx].name)
                }
            }
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
    },[leagueCopy])
    //^This used to be league not leagueCopy and it was rerendering league causing the copies to reset, now we hop in and out of the room each pick, idk if this is still the right answer but it seems to be work atm
    const sayHi = () => {
        socket.emit('sayHi', leagueCopy._id)
    }
    const hiOthers = () => {
        socket.emit('hiOthers', leagueCopy._id)
    }
    const draftSurfer = (e) => {
        const draftedSurferId = leagueCopy.event.surfers[e.target.previousSibling.previousSibling.innerText-1]._id
        console.log('drafting '+e.target.previousSibling.previousSibling.innerText)
        socket.emit('draftSurfer', draftedSurferId, league.currentUser, league._id)
    }
  return (
    <div>
        <h1>Draftroom</h1>
        <h2>Draft for {leagueCopy.name}</h2>
        <h2>{announcementBar}</h2>
        <button onClick={sayHi}>Say Hi</button>
        <button onClick={hiOthers}>Say Hi To Others</button>
        <h3>Teams</h3>
        {leagueCopy.teams.map((team, i)=>{
            return <div key={team._id+'in teams'+i}>
                <h4>{team.name}</h4>
                <div>
                    {team.surfers.map((surfer, i)=>{
                        // const s = league.event.surfers[surfer]
                        return <li key={league.event.surfers[surfer]._id+'in teams'+i}>{league.event.surfers[surfer].name}</li>
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