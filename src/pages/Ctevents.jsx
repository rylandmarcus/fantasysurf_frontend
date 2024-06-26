import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Ctevents = () => {
  const data = useLoaderData()
  const events = data.sort((a, b) => a.eventNumber - b.eventNumber)
  console.log(events)
  const [openEvent, setOpenEvent] = useState(events[events.length-1] || {})
  const handleOpenEvent = (e) =>{
    const event = events.filter(event => event.eventNumber == e.target.innerText)
    setRound32([])
    setRound16([])
    setQuarters([])
    setSemis([])
    setFinals([])
    setWinner({})
    setOpenEvent(event[0])
    console.log(event)
    console.log(e.target.innerText)
    console.log(openEvent)
  }
  const eventLength = (openEvent.surfers.length*2)-1
  const brack = new Array(eventLength).fill(null)
  openEvent.surfers.forEach((s, i)=>{
    brack[i] = i
  })
  const [bracket, setBracket] = useState(brack)
  useEffect(()=>{
    let bracketCopy = [...brack]
    for (let i=0; i<openEvent.scores.length; i+=2){
      if (openEvent.scores[i]&&openEvent.scores[i+1]){
        if (openEvent.scores[i]>openEvent.scores[i+1]){
          bracketCopy[(i/2)+openEvent.surfers.length] = bracketCopy[i]
        }else{
          bracketCopy[(i/2)+openEvent.surfers.length] = bracketCopy[i+1]
        }
      }
    }
    setBracket(bracketCopy)
    console.log(bracketCopy)
  },[openEvent])
  const [round32, setRound32] = useState([])
  const [round16, setRound16] = useState([])
  const [quarters, setQuarters] = useState([])
  const [semis, setSemis] = useState([])
  const [finals, setFinals] = useState([])
  const [winner, setWinner] = useState({})
  useEffect(()=>{
    let round32Copy = []
    let round16Copy = []
    let quartersCopy = []
    let semisCopy = []
    let finalsCopy = []
    let winnerCopy = {}
    console.log(bracket)
    if (eventLength===63){
      for (let i=0; i<bracket.length; i+=2){
        if (bracket[i]!==null&&bracket[i+1]!==null){
          if (i<32){
            round32Copy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<48){
            round16Copy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<56){
            quartersCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<60){
            semisCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<62){
            finalsCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }
        }
        if (i===62&&bracket[i]){
          winnerCopy = bracket[i]
        }
      }
    } else if (eventLength===31){
      for (let i=0; i<bracket.length; i+=2){
        if (bracket[i]!==null&&bracket[i+1]!==null){
          if (i<16){
            round16Copy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<24){
            quartersCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<28){
            semisCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<30){
            finalsCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else{
            winnerCopy = bracket[i]
          }
        }
        if (i===30&&bracket[i]){
          winnerCopy = bracket[i]
        }
      }
    } else if (eventLength===15){
      for (let i=0; i<bracket.length; i+=2){
        if (bracket[i]!==null&&bracket[i+1]!==null){
          if (i<8){
            quartersCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<12){
            semisCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else if (i<14){
            finalsCopy.push([bracket[i], bracket[i+1], openEvent.scores[i], openEvent.scores[i+1]])
          }else{
            winnerCopy = bracket[i]
          }
        }
        if (i===14&&bracket[i]){
          winnerCopy = bracket[i]
        }
      }
    }
    setRound32(round32Copy)
    setRound16(round16Copy)
    setQuarters(quartersCopy)
    setSemis(semisCopy)
    setFinals(finalsCopy)
    setWinner(winnerCopy)
  },[bracket])
  return (
    <div>
      <h1>CT Events</h1>
      <nav style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        {events.map(event => {
          return (
              <p key={event._id+'navbar'} style={openEvent._id===event._id?{backgroundColor:'cyan'}:{}} onClick={handleOpenEvent}>{event.eventNumber}</p>
          )
        })}
      </nav>
      <div >
        {openEvent.name?
        <h2>Stop #{openEvent.eventNumber}: {openEvent.name} {openEvent.location} {openEvent.date}<span><img style={{width:'30px', height:'20px'}} src={openEvent.flag} alt={openEvent.location} /></span><span><img src={openEvent.image} alt={openEvent.name} style={{width:'100px', height:'70px'}}/></span></h2>
        :null}
        {openEvent.name?
        <div style={{display:'flex', flexDirection:'row'}}>
          {round32.length>0?
          <div>
            <h3>Round of 32</h3>
            <div className='roundDiv'>
            {round32.map((heat, i)=>{
              return (
                <div key={i+'round32'} className='heatDiv'>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[0]].image} alt={openEvent.surfers[heat[0]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[0]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[0]].rank===0?'WC':openEvent.surfers[heat[0]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[0]].flag} alt={openEvent.surfers[heat[0]].country} />
                  </div>
                  {typeof heat[2]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[2].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold'}}>---VS---</div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[1]].image} alt={openEvent.surfers[heat[1]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[1]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[1]].rank===0?'WC':openEvent.surfers[heat[1]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[1]].flag} alt={openEvent.surfers[heat[1]].country} />
                  </div>
                  {typeof heat[3]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[3].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                </div>
              )
            })}
            </div>
          </div>
          :null}
          {round16.length>0?
          <div>
            <h3>Round of 16</h3>
            <div className='roundDiv'>
            {round16.map((heat, i)=>{
              return (
                <div key={i+'round16'} className='heatDiv'>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[0]].image} alt={openEvent.surfers[heat[0]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[0]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[0]].rank===0?'WC':openEvent.surfers[heat[0]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[0]].flag} alt={openEvent.surfers[heat[0]].country} />
                  </div>
                  {typeof heat[2]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[2].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold'}}>---VS---</div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[1]].image} alt={openEvent.surfers[heat[1]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[1]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[1]].rank===0?'WC':openEvent.surfers[heat[1]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[1]].flag} alt={openEvent.surfers[heat[1]].country} />
                  </div>
                  {typeof heat[3]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[3].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                </div>
              )
            })}
            </div>
            </div>
            :null}
          {quarters.length>0?
          <div>
            <h3>Quarter Finals</h3>
            <div className='roundDiv'>
            {quarters.map((heat, i)=>{
              return (
                <div key={i+'quarters'} className='heatDiv'>
                 <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[0]].image} alt={openEvent.surfers[heat[0]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[0]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[0]].rank===0?'WC':openEvent.surfers[heat[0]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[0]].flag} alt={openEvent.surfers[heat[0]].country} />
                  </div>
                  {typeof heat[2]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[2].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold'}}>---VS---</div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[1]].image} alt={openEvent.surfers[heat[1]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[1]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[1]].rank===0?'WC':openEvent.surfers[heat[1]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[1]].flag} alt={openEvent.surfers[heat[1]].country} />
                  </div>
                  {typeof heat[3]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[3].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                </div>
              )
            })}
            </div>
            </div>
            :null}
          {semis.length>0?
          <div>
            <h3>Semi Finals</h3>
            <div className='roundDiv'>
            {semis.map((heat, i)=>{
              return (
                <div key={i+'semis'} className='heatDiv'>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[0]].image} alt={openEvent.surfers[heat[0]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[0]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[0]].rank===0?'WC':openEvent.surfers[heat[0]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[0]].flag} alt={openEvent.surfers[heat[0]].country} />
                  </div>
                  {typeof heat[2]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[2].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold'}}>---VS---</div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[1]].image} alt={openEvent.surfers[heat[1]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[1]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[1]].rank===0?'WC':openEvent.surfers[heat[1]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[1]].flag} alt={openEvent.surfers[heat[1]].country} />
                  </div>
                  {typeof heat[3]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[3].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                </div>
              )
            })}
            </div>
            </div>
            :null}
          {finals.length>0?
          <div>
            <h3>Finals</h3>
            <div className='roundDiv'>
            {finals.map((heat, i)=>{
              return (
                <div key={i+'finals'} className='heatDiv'>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[0]].image} alt={openEvent.surfers[heat[0]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[0]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[0]].rank===0?'WC':openEvent.surfers[heat[0]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[0]].flag} alt={openEvent.surfers[heat[0]].country} />
                  </div>
                  {typeof heat[2]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[2].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                  <div style={{textAlign:'center', fontWeight:'bold'}}>---VS---</div>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                  <div className='surferInHeatDiv'>
                    <img style={{width:'60px', height:'60px', border:'1px solid black', borderRadius:'50%'}} src={openEvent.surfers[heat[1]].image} alt={openEvent.surfers[heat[1]].name} />
                    <div style={{fontSize:'25px'}}>{openEvent.surfers[heat[1]].name}</div>
                    <div style={{color:'gray'}}>{openEvent.surfers[heat[1]].rank===0?'WC':openEvent.surfers[heat[1]].rank}</div>
                    <img style={{width:'30px', height:'20px', border:'1px solid black'}} src={openEvent.surfers[heat[1]].flag} alt={openEvent.surfers[heat[1]].country} />
                  </div>
                  {typeof heat[3]==='number'?<div style={{fontSize:'25px', fontWeight:'bold', paddingRight:'10px'}}> {heat[3].toFixed(2)}pts</div>:<div>TBD</div>}
                  </div>
                </div>
              )
            })}
            </div>
            </div>
            :null}
          {openEvent.surfers[winner]?
          <div>
            <h3>Winner 👑</h3>
            <p>{openEvent.surfers[winner].name}</p>
          </div>
          :null}
        </div>
        :<p>loading</p>}
      </div>
    </div>
  )
}

export default Ctevents