import {useState, useEffect} from "react"
import Shimmer from "./Shimer"
import {USER_INFO_API} from "../utils/constants"


const User = () => {
const [userInfo , setUserInfo] = useState(null)

useEffect(()=> {
    fetchUserInfo()
}, [])

const fetchUserInfo = async() => {
    const data = await fetch(USER_INFO_API)
    const json = await data.json()

    setUserInfo(json)
}
if(userInfo === null){
    return <Shimmer/>
}

 const {name , company , followers}= userInfo;

    return (
        <div className="user-card">
            <h2>{"Name"} : {name}</h2>
            <h3>{"Company"} : {company}</h3>
            <h4>{"Followers"} : {followers}</h4>
        </div>
    )
}

export default User