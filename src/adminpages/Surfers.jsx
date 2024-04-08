import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Surfers = () => {
    const data = useLoaderData()
    console.log(data)
    const [addNew, setAddNew] = useState(false)
    const timeToAdd = ()=>{
      setAddNew(true)
    }
    const cancelAddNew = ()=>{
      setAddNew(false)
    }
    const handleAddNewSurfer = (e)=>{
      e.preventDefault()
      const name = e.target.name.value
      const country = e.target.country.value
      const flag = e.target.flag.value
      const rank = e.target.rank.value
      const image = e.target.image.value
      axios.post(process.env.REACT_APP_BACKEND_URL+'/admin/surfers', {name:name, country:country, flag:flag, rank:rank, image:image})
    }

  return (
    <div>
        <h1>Surfers</h1>
        <Link to={'/admin/events'}>Events</Link>
        <Link to={'/admin'}>Admin Home</Link>
        {addNew?
        <div>
          <form onSubmit={handleAddNewSurfer}>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="country" placeholder="country"/>
            <input type="text" name="flag" placeholder="flag"/>
            <input type="number" name="rank" placeholder="rank"/>
            <input type="text" name="image" placeholder="image"/>
            <input type="submit" value="Add Surfer"/>
          </form>
          <button onClick={cancelAddNew}>cancel</button>
        </div>
        :
        <div>
          <button onClick={timeToAdd}>Add New Surfer</button>
        </div>
        }
        <div>
          {data.map((surfer)=>{
            return (
              <div key={surfer._id}>
                <h3>{surfer.name}</h3>
                <p>{surfer.country}</p>
                <img src={surfer.flag} alt={surfer.country} />
                <p>{surfer.rank}</p>
                <img src={surfer.image} alt={surfer.name}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Surfers