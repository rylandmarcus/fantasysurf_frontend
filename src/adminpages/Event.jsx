import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Event = () => {
    const event = useLoaderData()
    console.log(event)
    const [scores, setScores] = useState([12, 13, 16, 12, 10, 17, 14, 12, 11, 13, 13, 15, 17, 18])
    const [semiFinals, setSemiFinals] = useState([])
    const [finals, setFinals] = useState([])
    const [winner, setWinner] = useState({})

    useEffect(()=>{
        if (scores.length>=8){
            let semiCopy = [...semiFinals]
            for (let i=0; i<8; i+=2){
                if (scores[i]>scores[i+1]){
                    semiCopy[i/2] = i
                }else{
                    semiCopy[i/2] = i+1
                }
            }
            setSemiFinals(semiCopy)
            console.log(semiCopy)
        }
    },[scores])
    useEffect(()=>{
        if (scores.length>=12){
            console.log('from finals')
            console.log(semiFinals)
            let finalCopy = [...finals]
            for (let i=8; i<12; i+=2){
                if (scores[i]>scores[i+1]){
                    console.log(semiFinals)
                    finalCopy[(i-8)/2] = semiFinals[i-8]
                }else{
                    finalCopy[(i-8)/2] = semiFinals[i-7]
                }
            }

            setFinals(finalCopy)
            console.log(finalCopy)
        }
    },[semiFinals])
    useEffect(()=>{
        console.log('from winner')
        if (scores.length===14){
            if (scores[12]>scores[13]){
                const champ = event.surfers[finals[0]]
                setWinner(champ)
            }else{
                const champ = event.surfers[finals[1]]
                setWinner(champ)
            }
        }
    },[finals])
    // }
  return (
    <div>
        <h1>{event.name}</h1>
        <h3>{event.location}</h3>
        <h4>{event.date}</h4>
        <img src={event.flag} alt={event.location} />
        <img src={event.image} alt={event.name} />
        <p>Spot #{event.eventNumber}</p>
        <p>{event.surfers.map((s)=>s.name).join(', ')}</p>
        <div style={{display:'flex',flexDirection:'row'}}>
            {event.surfers.map((s, i)=>{
                return <div key={s._id}>
                    <p>{s.name}</p>
                    <p>{scores[i]}</p>
                </div>
            })}
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
            {semiFinals.map((i,idx)=>{
                return <div key={event.surfers[i]._id+'semis'}>
                    <p>{event.surfers[i].name}</p>
                    <p>{scores[8+idx]}</p>
                </div>
            })}
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
            {finals[0]&&finals[1]?finals.map((i,idx)=>{
                return <div key={event.surfers[i]._id+'finals'}>
                    <p>{event.surfers[i].name}</p>
                    <p>{scores[12+idx]}</p>
                </div>
            }):null}
        </div>
        <div>
            {winner?winner.name:null}
        </div>
    </div>
  )
}

export default Event