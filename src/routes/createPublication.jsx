import { Form,redirect } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestCreate } from "../APIcalls.mjs";

export async function action({request,params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.dir(data)
    await requestCreate(data,'publication')   
    return redirect(`/publications`)
}



export default function CreatePublication(){



    return(
        <div id="page-container">
        <PageHeader super={`Publication`} heading="CREATE"/>
        <Form method="post" id="new-story-form">
            <input
                placeholder='title'
                aria-label="Title"
                type="text"
                name="title"
                defaultValue=""
            />
            <input
                placeholder='website'
                aria-label="Website:"
                type="text"
                step="1"
                name="link"
                defaultValue=""
            />
            <input
                placeholder='1000'
                aria-label="Query after:"
                type="number"
                step="1"
                name="query_after_days"
                defaultValue=""
            />
        <button type="submit">SAVE</button>
        <button type="button">CANCEL</button>
        </Form>
        
        </div>
    )

}