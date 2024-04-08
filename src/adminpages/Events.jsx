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
        <Link>Add New Event</Link>
    </div>
  )
}

export default Events