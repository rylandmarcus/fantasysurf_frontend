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
            return <div key={event._id}>
              <Link to={'/admin/events/'+event._id} style={{textDecoration:'none', color:'black'}}>
                <div>
                  <h3>{event.name}</h3>
                  <h5>{event.location}</h5>
                  <h4>{event.date}</h4>
                  <img src={event.flag} alt={event.location} />
                  <img src={event.image} alt={event.name} />
                  <p>Spot #{event.eventNumber}</p>
                  <p>{event.surfers.map((s)=>s.name).join(', ')}</p>
                </div>
              </Link>
            </div>
        })}
    </div>
  )
}

export default Events