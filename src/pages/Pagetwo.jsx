import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Pagetwo = () => {
    const userData = useLoaderData()
  return (
    <div>
        <h1>Page Two</h1>
        <h2>Hello {userData.username}</h2>
        <Link to='/pageone'>Go to Page One</Link>
        <Link to='/home'>Go to Home Page</Link>
    </div>
  )
}

export default Pagetwo