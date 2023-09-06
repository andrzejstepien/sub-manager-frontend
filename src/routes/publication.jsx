import { useLoaderData, useParams } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
export default function Publication(){
    const { publicationId } = useParams()
    const { publications } = useLoaderData()
    const publicationsData = publications.find(row=>row.ID==publicationId)
    return(
        <>
        <PageHeader text={'Publication#'+publicationId}/>
        {JSON.stringify(publicationsData)}
        <Table data={publicationsData.Submissions}></Table>
        </>
    )
}