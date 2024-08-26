import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { io } from 'socket.io-client'

const Draftroom = () => {
    const leagueLoad = useLoaderData()
    const [league, setLeague] = useState(leagueLoad)
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
        socket.emit('sayHi', league._id)
    }
    const hiOthers = () => {
        socket.emit('hiOthers', league._id)
    }
  return (
    <div>
        <h1>Draftroom</h1>
        <h2>Draft for {league.name}</h2>
        <button onClick={sayHi}>Say Hi</button>
        <button onClick={hiOthers}>Say Hi To Others</button>
    </div>
  )
}

export default Draftroom