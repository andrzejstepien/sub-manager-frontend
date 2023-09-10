import { useLoaderData, useParams } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";

const { filterList=[...filterList],highlights,clickables } = submissionsTableOptions
export default function Story(){
    const { storyId } = useParams()
    const { stories } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)
   
    return(
        <>
        <div id="page">
        <PageHeader super={'Story#'+storyId} heading={storyData.title}/>
     <Table 
     data={storyData.submissions} 
     filterList={[...filterList,'story']}
     highlights={highlights}
     clickables={clickables}
     sortByDefault='date_submitted'
     header='Submissions:'
     ></Table>
     </div>
        </>
    )
}