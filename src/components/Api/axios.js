import Axios from "axios"

export default Axios.create({
    baseURL:"https://meetups-web-default-rtdb.firebaseio.com/",
    headers:{
        "Content-Type": "application/json"
    }
    
})