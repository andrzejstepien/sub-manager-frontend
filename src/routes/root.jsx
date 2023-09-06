import { Outlet, Link } from "react-router-dom"
import { getStories, getPublications, getSubmissions } from "../APIcalls.mjs"

export async function loader(){
  let stories = await getStories()
  stories = stories.data
  let publications = await getPublications()
  publications = publications.data
  let submissions = await getSubmissions()
  submissions=submissions.data
  return { stories, publications, submissions }
}


export function Root() {

    return(
        <>
        <div id="container">
        <div id="sidebar">
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