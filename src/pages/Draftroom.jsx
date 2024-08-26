import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const Draftroom = () => {
    const [league, setLeague] = useState({})
    const socket = io.connect(process.env.REACT_APP_BACKEND_URL)
    useEffect(()=>{
        socket.on('connect', ()=>{
            console.log('connected')
        })
        return ()=>{
            //leave room
        }
    },[socket])
    useEffect(()=>{
        socket.emit('join draftroom', {league: league._id})
        return ()=>{
            socket.emit('leave draftroom', {league: league._id})
        }
    },[league])
  return (
    <div>Draftroom</div>
  )
}

export default Draftroom