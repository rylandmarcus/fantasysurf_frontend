import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Homepagetest = () => {
  const userData = useLoaderData()
  console.log(userData)
  console.log('from Homepagetest')
  return (
    <div>
        <h1>Homepage Test</h1>
        <h2>Hello {userData.username}</h2>
    </div>
  )
}

export default Homepagetest