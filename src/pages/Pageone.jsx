import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Pageone = () => {
    const userData = useLoaderData()
  return (
    <div>
        <h1>Page One</h1>
        <h2>Hello {userData.username}</h2>
        <Link to='/pagetwo'>Go to Page Two</Link>
        <Link to='/home'>Go to Home Page</Link>
    </div>
  )
}

export default Pageone