import React, { useState } from 'react'
import './Joinleaguebutton.css'
import axios from 'axios'

const Joinleaguebutton = ({league}) => {
    const [trigger, setTrigger] = useState(false)

    const join = async (e)=>{
        e.preventDefault()
        if (league.password===e.target.password.value){
            console.log('join')
            axios.put(process.env.REACT_APP_BACKEND_URL+`/leagues/joinleague/${league._id}`, {teamName:e.target.teamname.value, password:e.target.password.value}).then(
                res=>{
                    if (res.data.Status==='alreadyInLeague'){
                        document.querySelector('.wrongPass').innerText = 'already in league'
                        setTimeout(()=>{document.querySelector('.wrongPass').innerText=''}, 3000)
                    } else if (res.data.Status==='leagueFull'){
                        document.querySelector('.wrongPass').innerText = 'league full'
                        setTimeout(()=>{document.querySelector('.wrongPass').innerText=''}, 3000)
                    } else if (res.data.Status==='leagueStarted'){
                        document.querySelector('.wrongPass').innerText = 'league started'
                        setTimeout(()=>{document.querySelector('.wrongPass').innerText=''}, 3000)
                    } else if (res.data.Status==='incorrectPassword'){
                        document.querySelector('.wrongPass').innerText = 'wrong password'
                        setTimeout(()=>{document.querySelector('.wrongPass').innerText=''}, 3000)
                    } else if (res.data.Status==='teamNameTaken'){
                        document.querySelector('.wrongPass').innerText = 'team name taken, try another name'
                        setTimeout(()=>{document.querySelector('.wrongPass').innerText=''}, 3000)
                    } else {
                        window.location.href = '/leagues'
                    }
                }
            )
        } else {
            document.querySelector('.wrongPass').innerText = 'wrong password'
            setTimeout(()=>{document.querySelector('.wrongPass').innerText=''}, 3000)
        }
    }

  return (trigger) ? (
    <div>
        <button>Join opne</button>
        <div className='joinLeagueButtonContainer'>
            <div className='joinLeagueButtonInner'>
                <h3>Join {league.name}?</h3>
                <form onSubmit={join}>
                    <input type="text" name='password' placeholder='League Password' required/>
                    <input type="text" name='teamname' placeholder='Your Team Name' required/>
                    <input type="submit" value='Join'/>
                </form>
                <button onClick={()=>setTrigger(false)}>Join closedd</button>
                <div className='wrongPass'></div>
            </div>
        </div>
    </div>
  ) : <button onClick={()=>setTrigger(true)}>Join opne</button>
}

export default Joinleaguebutton