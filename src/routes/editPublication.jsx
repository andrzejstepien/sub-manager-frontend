import { Form, useLoaderData, useParams, redirect } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestEdit } from "../APIcalls.mjs";

export async function action({request,params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    data.id=parseInt(params.publicationId)
    console.dir(data)
    await requestEdit(data,'publication')   
    return redirect(`/publication/${params.publicationId}`)
}



export default function EditPublication(){
    const { publicationId } = useParams()
    const { publications } = useLoaderData()
    const publicationData = publications.find(row=>row.id==publicationId)


    return(
        <>
        <PageHeader super={`Publication #${publicationData.id}`} heading="EDIT"/>
        <Form method="post" id="publication-form">
            <input
                placeholder='title'
                aria-label="Title"
                type="text"
                name="title"
                defaultValue={publicationData.title}    
            />
            <input
                placeholder='1000'
                aria-label="Website:"
                type="text"
                step="1"
                name="link"
                defaultValue={publicationData.link}    
            />
        <button type="submit">SAVE</button>
        <button type="button">CANCEL</button>
        </Form>
        
        </>
    )

}