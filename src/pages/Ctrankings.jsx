import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Ctrankings = () => {
  const rankings = useLoaderData()
  console.log(rankings)
  return (
    <div>
      <h1>Rankings</h1>
      {rankings.map(s=>( 
        <div key={s._id+'rankings'} style={{display:'flex', flexDirection:'row', borderTop:'3px solid black', padding:'5px', alignItems:'center'}}>
          <div style={{fontSize:'40px', marginRight:'20px'}}>{s.rank}</div>
          <img style={{width:'60px', height:'60px', borderRadius:'50%', border:'1px solid black', marginRight:'20px'}} src={s.image} alt={s.name} />
          <div>
            <div style={{fontSize:'30px'}}>{s.name}</div>
              <div style={{display:'flex', flexDirection:'row'}}>
                <img style={{width:'20px', height:'15px', border:'.5px solid black'}} src={s.flag} alt={s.country} />
                <div style={{fontSize:'15px', marginLeft:'5px'}}>{s.country}</div>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ctrankings