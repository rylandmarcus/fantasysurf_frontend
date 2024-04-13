import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Surferedit = () => {
    const data = useLoaderData()
    
    const [nameToAdd, setNameToAdd] = useState(data.name)
    const [countryToAdd, setCountryToAdd] = useState(data.country)
    const [flagToAdd, setFlagToAdd] = useState(data.flag)
    const [rankToAdd, setRankToAdd] = useState(data.rank)
    const [imageToAdd, setImageToAdd] = useState(data.image)
    const handleUpdateSurfer = ()=>{
        axios.put(process.env.REACT_APP_BACKEND_URL+'/admin/surfers/'+data._id, {name:nameToAdd, country:countryToAdd, flag:flagToAdd, rank:rankToAdd, image:imageToAdd})
        console.log('update surfer')
    }
  return (
    <div>
        <h1>Surfer Edit</h1>
        <Link to={'/admin/surfers'}>back</Link>
        <h2>{data.name}</h2>

        <div>
          <form onSubmit={handleUpdateSurfer}>
            <input type="text" name="name" placeholder="name" onChange={(e)=>setNameToAdd(e.target.value)} defaultValue={nameToAdd}/>
            <input type="text" name="country" placeholder="country" onChange={(e)=>setCountryToAdd(e.target.value)} defaultValue={countryToAdd}/>
            <input type="text" name="flag" placeholder="flag" onChange={(e)=>setFlagToAdd(e.target.value)} defaultValue={flagToAdd}/>
            <input type="number" name="rank" placeholder="rank" onChange={(e)=>setRankToAdd(e.target.value)} defaultValue={rankToAdd}/>
            <input type="text" name="image" placeholder="image" onChange={(e)=>setImageToAdd(e.target.value)} defaultValue={imageToAdd}/>
            <input type="submit" value="Edit Surfer"/>
          </form>
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
    </div>
  )
}

export default Surferedit