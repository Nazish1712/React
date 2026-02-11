import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./component/About"
import { createBrowserRouter,  RouterProvider} from "react-router-dom";


const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}

const router = createBrowserRouter(
 [
  {
    path:"/",
    element: <AppLayout/>
  },
  {
    path:"/about",
    element: <About/>
  }
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


