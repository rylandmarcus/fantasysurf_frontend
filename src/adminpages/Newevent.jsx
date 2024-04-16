import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Newevent = () => {
    const surfers = useLoaderData()
    const [selectedSurfers, setSelectedSurfers] = useState([])
    const [unselectedSurfers, setUnselectedSurfers] = useState(surfers)
    const unselect = (e)=>{
        let name = e.target.previousSibling.innerText
        let surfer = surfers.find((s)=>s.name===name)
        setSelectedSurfers(selectedSurfers.filter((s)=>s!==surfer))
        setUnselectedSurfers([...unselectedSurfers, surfer])
        if (surfer.name.toLowerCase().includes(document.querySelector('input[placeholder="search surfer"]').value.toLowerCase())){
            setShownUnselected([...shownUnselected, surfer])
        }
    }
    const [shownUnselected, setShownUnselected] = useState(surfers)
    const addWSLEvent = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const location = e.target.location.value
        const date = e.target.date.value
        const flag = e.target.flag.value
        const image = e.target.image.value
        const eventNumber = e.target.eventNumber.value
        const surfers = selectedSurfers.map((s)=>s._id)
        axios.post(process.env.REACT_APP_BACKEND_URL+'/admin/events', {name:name, location:location, date:date, flag:flag, image:image, eventNumber:eventNumber, surfers:surfers})
        .then((res)=>{window.location.href = '/admin/events'})
        e.target.name.value = ''
        e.target.location.value = ''
        e.target.date.value = ''
        e.target.flag.value = ''
        e.target.image.value = ''
        e.target.eventNumber.value = ''
        setSelectedSurfers([])
        setUnselectedSurfers(surfers)
        setShownUnselected(surfers)
    }
  return (
    <div>
        <h1>New Event</h1>
        <Link to={'/admin/surfers'}>Surfers</Link>
        <Link to={'/admin/events'}>Events</Link>
        <Link to={'/admin'}>Admin Home</Link>
        <form onSubmit={addWSLEvent}>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="location" placeholder="location"/>
            <input type="text" name="date" placeholder="date"/>
            <input type="text" name="flag" placeholder="flag"/>
            <input type="text" name="image" placeholder="image"/>
            <input type="number" name="eventNumber" placeholder="event number"/>
            <input type="submit" value="Add Event"/>
        </form>
        <div>
            <p>Selected({selectedSurfers.length}):</p>
            <div style={{display:'flex', flexDirection:'row'}}>
                {selectedSurfers.map((surfer)=>{
                    return <div key={surfer._id} style={{display:'flex', flexDirection:'row'}}>
                        <p>{surfer.name}</p>
                        <button onClick={unselect}>X</button>
                    </div>
                }
                )}
            </div>
        </div>
        <div>
            <p>Surfers:</p>
            <input type="text" placeholder='search surfer' onChange={(e)=>{
                setShownUnselected(unselectedSurfers.filter((s)=>s.name.toLowerCase().includes(e.target.value.toLowerCase())))
            }}/>
            <div>
                {shownUnselected.map((surfer)=>{
                    return <div key={surfer._id} style={{display:'flex', flexDirection:'row'}}>
                        <p>{surfer.name}</p>
                        <input type="checkbox" onChange={(e)=>{
                            if(e.target.checked){
                                setSelectedSurfers([...selectedSurfers, surfer])
                                setUnselectedSurfers(unselectedSurfers.filter((s)=>s!==surfer))
                                setShownUnselected(shownUnselected.filter((s)=>s!==surfer))
                            }else{
                                setSelectedSurfers(selectedSurfers.filter((s)=>s!==surfer))
                                setUnselectedSurfers([...unselectedSurfers, surfer])
                            }
                        }}/>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Newevent