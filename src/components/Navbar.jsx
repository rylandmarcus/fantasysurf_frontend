import React from 'react'
import Logout from './Logout'

const Navbar = ({setStatus}) => {
  return (
    <div>
        <nav style={{display:'flex'}}>
            <p>nav thing 1</p>
            <p>nav thing 2</p>
            <p>nav thing 3</p>
            <Logout setStatus={setStatus}></Logout>
        </nav>
    </div>
  )
}

export default Navbar