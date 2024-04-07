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
            window.location.href = '/'
        }
    }).catch(err=>{
        console.log(err)
        window.location.href = '/'
    })
}