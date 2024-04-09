import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Surfers = () => {
    const data = useLoaderData()
    console.log(data)
    const [addNew, setAddNew] = useState(false)
    const [nameToAdd, setNameToAdd] = useState('')
    const [countryToAdd, setCountryToAdd] = useState('')
    const [flagToAdd, setFlagToAdd] = useState('')
    const [rankToAdd, setRankToAdd] = useState('')
    const [imageToAdd, setImageToAdd] = useState('')
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
      e.target.name.value = ''
      e.target.country.value = ''
      e.target.flag.value = ''
      e.target.rank.value = ''
      e.target.image.value = ''
      setNameToAdd('')
      setCountryToAdd('')
      setFlagToAdd('')
      setRankToAdd('')
      setImageToAdd('')
    }

  return (
    <div>
        <h1>Surfers</h1>
        <Link to={'/admin/events'}>Events</Link>
        <Link to={'/admin'}>Admin Home</Link>
        {addNew?
        <div>
          <form onSubmit={handleAddNewSurfer}>
            <input type="text" name="name" placeholder="name" onChange={(e)=>setNameToAdd(e.target.value)}/>
            <input type="text" name="country" placeholder="country" onChange={(e)=>setCountryToAdd(e.target.value)}/>
            <input type="text" name="flag" placeholder="flag" onChange={(e)=>setFlagToAdd(e.target.value)}/>
            <input type="number" name="rank" placeholder="rank" onChange={(e)=>setRankToAdd(e.target.value)}/>
            <input type="text" name="image" placeholder="image" onChange={(e)=>setImageToAdd(e.target.value)}/>
            <input type="submit" value="Add Surfer"/>
          </form>
          <button onClick={cancelAddNew}>cancel</button>
          <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                border:'1px solid black',
                margin:'15px',
                padding:'10px',
                width:'300px',
                borderRadius:'15px',
                backgroundColor:'lightblue'
                }}>
                <img src={imageToAdd} alt={nameToAdd} style={{width:'200px', height:'200px', border:'2px solid black', borderRadius:'50%'}}/>
                <h3>{nameToAdd}</h3>
                <p style={{display:'flex', flexDirection:'row', alignItems:"center", border:'1px solid black', borderRadius:'15px', padding:'5px'}}><span style={{margin:'5px'}}><img src={flagToAdd} alt={countryToAdd} style={{width:'30px', height:'30px', border:'1px solid black', borderRadius:'50%'}}/></span>{countryToAdd}</p>
                <p>{rankToAdd}</p>
              </div>
        </div>
        :
        <div>
          <button onClick={timeToAdd}>Add New Surfer</button>
        </div>
        }
        <div>
          {data.map((surfer)=>{
            return (
              <div key={surfer._id} style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                border:'1px solid black',
                margin:'15px',
                padding:'10px',
                width:'300px',
                borderRadius:'15px',
                backgroundColor:'lightblue'
                }}>
                <img src={surfer.image} alt={surfer.name} style={{width:'200px', height:'200px', border:'2px solid black', borderRadius:'50%'}}/>
                <h3>{surfer.name}</h3>
                <p style={{display:'flex', flexDirection:'row', alignItems:"center", border:'1px solid black', borderRadius:'15px', padding:'5px'}}><span style={{margin:'5px'}}><img src={surfer.flag} alt={surfer.country} style={{width:'30px', height:'30px', border:'1px solid black', borderRadius:'50%'}}/></span>{surfer.country}</p>
                <p>{surfer.rank}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Surfers