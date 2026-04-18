import React , {lazy, Suspense , useState , useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery"
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,  Outlet, RouterProvider} from "react-router-dom";
import UserContext from "./utils/UserContext"
import {Provider} from "react-redux"
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

const [usersName, setUsersName] = useState()

//authentication
useEffect(() => {
  //make an api call 
  const data = {
    name: "Nazish"
  }
  setUsersName(data.name)
}, [])



    return(
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : usersName}}> 
       <div className="app">
         <Header/>
         <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}


const appRouter = createBrowserRouter(
 [
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element:<Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
 ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)









// const AppLayout = () => {
//   return(
//     <div>
//       <Header/>
//       <Body/>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)


