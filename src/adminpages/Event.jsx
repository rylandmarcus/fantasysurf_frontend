import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Event = () => {
    const event = useLoaderData()
    console.log(event)
    const scorecard = [12, 13, 16, 12, 10, 17, 14, 12, 11, 13, 13, 15, 17, 18]
    // const [scores, setScores] = useState(scorecard)
    const [scores, setScores] = useState(event.scores)
    const [semiFinals, setSemiFinals] = useState([])
    const [finals, setFinals] = useState([])
    const [winner, setWinner] = useState({})
    const eventLength = (event.surfers.length*2)-1
    const brack = new Array(eventLength).fill(null)
    event.surfers.forEach((s, i)=>{
        brack[i] = i
    })
    const [bracket, setBracket] = useState(brack)
    useEffect(()=>{
        let bracketCopy = [...brack]
        for (let i=0; i<scores.length; i+=2){
            if (scores[i]&&scores[i+1]){
                if (scores[i]>scores[i+1]){
                    bracketCopy[(i/2)+event.surfers.length] = bracketCopy[i]
                }else{
                    bracketCopy[(i/2)+event.surfers.length] = bracketCopy[i+1]
                }
            }
        }
        setBracket(bracketCopy)
    },[scores])
  
    const updateScores = (e)=>{
        e.preventDefault()
        const newScores = e.target.scores.value.split(',').map((s)=>parseInt(s))
        axios.put(process.env.REACT_APP_BACKEND_URL+'/admin/updatescores/'+event._id, {scores:newScores})
        setScores(newScores)
    }
    const offlineSetScores = (e)=>{
        e.preventDefault()
        const newScores = document.querySelector('input[name="scores"]').value.split(',').map((s)=>parseInt(s))
        setScores(newScores)
    }
  return (
    <div>
        <Link to={'/admin/events'}>Back</Link>
        <div style={{display:'flex', flexDirection:'row', border:'1px solid black'}}>
            <p>Stop #{event.eventNumber}</p>
            <h2>{event.name}</h2>
            <h5>{event.location}</h5>
            <h5>{event.date}</h5>
            <img src={event.flag} alt={event.location} style={{width:'20px', height:'20px'}}/>
            <img src={event.image} alt={event.name} style={{width:'100px'}}/>
        </div>
        <p>{event.surfers.map((s)=>s.name).join(', ')}</p>
        <form onSubmit={updateScores}>
            <input type="text" name='scores' defaultValue={scores.join(', ')} style={{width:'100%', fontSize:'20px'}}/>
            <input type="submit" value="update scores" />
        </form>
        <button onClick={offlineSetScores}>Offline set scores</button>
        <div>
            {bracket.map((s, i)=>{
              return  s===null?<div key={'tbddiv'+i}>TBD</div>: <div key={event.surfers[s]._id+'bracket'+i}>
                  <h4>
                  {i===eventLength-1?'champion':i===eventLength-3?'Finals':i===eventLength-7?'Semi-Finals':i===eventLength-15?'Quarter-Finals':i===eventLength-31?'Round of 16':i===eventLength-63?'Round of 32':null}
                 </h4> 
                    <p>{event.surfers[s].name}:{scores[i]} </p> 
                </div>
            })}
        </div>
    </div>
  )
}

export default Event