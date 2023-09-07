import { useLoaderData, useParams } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";

const { filterList, highlights, clickables } = submissionsTableOptions
export default function Publication() {
    const { publicationId } = useParams()
    const { publications } = useLoaderData()
    const publicationsData = publications.find(row => row.id == publicationId)
    return (
        <>
            <PageHeader text={'Publication#' + publicationId} />
            {JSON.stringify(publicationsData)}
            <Table data={publicationsData.submissions}
                filterList={filterList}
                highlights={highlights}
                clickables={clickables}
                sortByDefault='date_submitted'
            ></Table>
        </>
    )
}