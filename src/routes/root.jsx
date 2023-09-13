import { Outlet, Link, useNavigation } from "react-router-dom"
import { getStories, getPublications, getSubmissions } from "../APIcalls.mjs"
import Loader from "../Components/Loader"



export function Root() {
  const navigation = useNavigation()
    return(
        <>
        <div id="container">
          {navigation==="loading"?<Loader/>:""}
        <div id="sidebar">
          <h1>Submission <br/> Manager</h1> version 1.0
          <ul>
            <li>
            <Link to={`stories`}>STORIES</Link>
            </li>
            <li>
            <Link to={`submissions`}>SUBMISSIONS</Link>
            </li>
            <li>
            <Link to={`publications`}>PUBLICATIONS</Link>
            </li>
            <li>          
            </li>
          </ul>
        </div>
       
        <div id="outlet">
            <Outlet/>
       
        </div>
        </div>
        
        </>
    )
}