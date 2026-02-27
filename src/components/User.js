import Shimmer from "./Shimer"
import useUserInfo from "../utils/useUserInfo"

const User = () => {
    
const userInfo = useUserInfo()

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