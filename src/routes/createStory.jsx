import { Form,redirect } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestCreate } from "../APIcalls.mjs";

export async function action({request,params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.dir(data)
    await requestCreate(data,'story')   
    return redirect(`/stories`)
}



export default function CreateStory(){



    return(
        <div id="page-container">
        <PageHeader super={`Story`} heading="CREATE"/>
        <Form method="post" id="new-story-form">
            <label>
            <input
                placeholder='title'
                aria-label="Title"
                type="text"
                name="title"
                defaultValue=""
            />
            </label>
            <label>
            <input
                placeholder='1000'
                aria-label="Wordcount"
                type="number"
                step="1"
                name="word_count"
                defaultValue=""
            />
            </label>
            <div id="bottom-button-container">
            <button type="submit">SAVE</button>
        <button type="button">CANCEL</button>
            </div>
        
        
        </Form>
        
        </div>
    )

}