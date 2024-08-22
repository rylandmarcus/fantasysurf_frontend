import React from 'react'
import { io } from 'socket.io-client'

const Draftroom = () => {
    const socket = io.connect(process.env.REACT_APP_BACKEND_URL)
  return (
    <div>Draftroom</div>
  )
}

export default Draftroom