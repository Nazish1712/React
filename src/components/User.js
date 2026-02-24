import {useState, useEffect} from "react"
import Shimer from "./Shimer"
import { USER_INFO_API } from "../utils/constants"


const User = () => {
const [userInfo , setUserInfo] = useState(null)

useEffect(()=> {
    fetchUserInfo()
})

const fetchUserInfo = async() => {
    const data = await fetch("USER_INFO_API")
    const json = await data.json()

    setUserInfo(json.data)
}
if(userInfo === null){
    return <Shimer/>
}


    return (
        <div className="user-card">
            <h2></h2>
            <h3></h3>
            <h4></h4>
        </div>
    )
}

export default User