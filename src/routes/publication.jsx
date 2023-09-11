import { useLoaderData, useParams, Link, Form } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";

const { filterList, highlights, clickables } = submissionsTableOptions
export default function Publication() {
    const { publicationId } = useParams()
    const { publications } = useLoaderData()
    const publicationData = publications.find(row => row.id == publicationId)
    return (
        <>  <div id="page">
            <PageHeader super={'Publication#' + publicationId} heading={publicationData.title}/>
            <div>
            Link: 
            <a href={publicationData.link}>{publicationData.link}</a>
            </div>
            <Table data={publicationData.submissions}
                filterList={[...filterList,'publication']}
                highlights={highlights}
                clickables={clickables}
                sortByDefault='date_submitted'
                header='Submissions:'
            ></Table>
            <Link to={`/publication/${publicationData.id}/edit`}>EDIT</Link>
            <Form
  method="post"
  action="delete"
  onSubmit={(event) => {
    if (
      !confirm(
        "Please confirm you want to delete this record."
      )
    ) {
      event.preventDefault();
    }
  }}
>
  <button type="submit">Delete</button>
</Form>
            </div>
        </>
    )
}