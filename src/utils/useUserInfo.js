import {useState, useEffect} from "react"
import {USER_INFO_API} from "./constants"

const useUserInfo = () => {
const [userInfo , setUserInfo] = useState(null)

useEffect(()=> {
    fetchUserInfo()
}, [])

const fetchUserInfo = async() => {
    const data = await fetch(USER_INFO_API)
    const json = await data.json()

    setUserInfo(json)
}
   return userInfo

}

export default useUserInfo