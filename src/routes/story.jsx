import { useLoaderData, useParams } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
export default function Story(){
    const { storyId } = useParams()
    const { stories } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)
    return(
        <>
        <PageHeader text={'Story#'+storyId}/>
        {JSON.stringify(storyData)}
     <Table data={storyData.submissions}></Table>
        </>
    )
}