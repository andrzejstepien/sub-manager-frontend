import { useLoaderData, useParams } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";

const { filterList=[...filterList],highlights,clickables } = submissionsTableOptions
export default function Story(){
    const { storyId } = useParams()
    const { stories } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)
    filterList.push(
        'story',

    )
    return(
        <>
        <PageHeader text={'Story#'+storyId}/>
        {JSON.stringify(storyData)}
     <Table 
     data={storyData.submissions} 
     filterList={filterList}
     highlights={highlights}
     clickables={clickables}
     sortByDefault='date_submitted'
     ></Table>
        </>
    )
}