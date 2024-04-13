import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const Navbar = ({setStatus}) => {
  return (
    <div>
        <nav style={{display:'flex'}}>
            <Link to='/leagues'><button>Leagues</button></Link>
            <Link to='/ctevents'><button>CT Events</button></Link>
            <Link to='/ctrankings'><button>CT Rankings</button></Link>
            <Link to='/pastleagues'><button>Past Leagues</button></Link>
            <Link to='/settings'><button>Settings</button></Link>
            <Logout setStatus={setStatus}></Logout>
        </nav>
    </div>
  )
}

export default Navbar