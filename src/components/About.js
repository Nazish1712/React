import User from "./User"
import UserContext from "../utils/UserContext"
import {useContext} from "react"

const About = () => {

const {loggedInUser} = useContext(UserContext)   

return(
    <div>
        <h1>About</h1>
        <p>LoggedIn User : {loggedInUser}</p>
        <h2>This is owner info</h2>
        <User/>
    </div>
)
}

export default About;