import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Homepagetest = () => {
  const userData = useLoaderData()
  console.log(userData)
  console.log('from Homepagetest')
  const [user, setUser] = useState(userData)
  return (
    <div>
        <h1>Homepage Test</h1>
        <h2>Hello {user.username}</h2>
        <Link to='/pageone'>Go to Page One</Link>
        <Link to='/pagetwo'>Go to Page Two</Link>
    </div>
  )
}

export default Homepagetest