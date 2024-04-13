import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Events = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
        <h1>Events</h1>
        <Link to={'/admin/surfers'}>Surfers</Link>
        <Link to={'/admin'}>Admin Home</Link>
        <Link to={'/admin/newevent'}>Add New Event</Link>
        {data.map((event)=>{
            return <div key={event._id} style={{width:'800px'}}>
              <Link to={'/admin/events/'+event._id} style={{textDecoration:'none', color:'black'}}>
                <div style={{border:'solid 2px black', width:'800px', textAlign:'center', backgroundColor:'lightcyan', borderRadius:'15px', paddingBottom:'10px', margin:'20px'}}>
                  <p>Stop #{event.eventNumber}</p>
                  <h3>{event.name}</h3>
                  <h5>{event.location}</h5>
                  <img src={event.flag} alt={event.location} style={{width:'30px', height:'20px'}}/>
                  <h4>{event.date}</h4>
                  <img src={event.image} alt={event.name}  style={{width:'650px', height:'450px'}}/>
                </div>
              </Link>
            </div>
        })}
    </div>
  )
}

export default Events