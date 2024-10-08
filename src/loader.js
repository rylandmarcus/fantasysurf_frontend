import axios from "axios";

axios.defaults.withCredentials = true
export const userLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/myhome').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            // window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        // window.location.href = '/'
        return {}
    })
}

export const adminLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/admin').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const adminSurfersLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/admin/surfers').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const adminEventsLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/admin/events').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const adminEventLoad = ({params})=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/admin/events/'+params.id).then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const adminSurferLoad = ({params})=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/admin/surfers/'+params.id).then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const ctEventsLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/ct/events').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const ctRankingsLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/ct/rankings').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const myLeaguesLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/leagues/myleagues').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const joinLeagueLoad = ()=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/leagues/joinleague').then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const leagueLoad = ({params})=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/leagues/'+params.id).then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const teamLoad = ({params})=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/leagues/'+params.id+'/team/'+params.teamid).then(res=>{
        if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}

export const draftroomLoad = ({params})=>{
    return axios.get(process.env.REACT_APP_BACKEND_URL+'/leagues/'+params.id+'/draft').then(res=>{
        if (res.Status==='Not in League'){
            window.location.href = '/leagues/'+params.id
            return {}
        } else if (res.data){
            console.log(res.data)
            console.log('from loader')
            const data = res.data
            return data
        } else {
            window.location.href = '/'
            return {}
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
        return {}
    })
}