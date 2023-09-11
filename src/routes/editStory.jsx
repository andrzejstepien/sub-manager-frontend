import { Form, useLoaderData, useParams, redirect } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestEdit } from "../APIcalls.mjs";

export async function action({request,params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    data.id=parseInt(params.storyId)
    console.dir(data)
    await requestEdit(data,'story')   
    return redirect(`/story/${params.storyId}`)
}



export default function EditStory(){
    const { storyId } = useParams()
    const { stories } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)


    return(
        <>
        <PageHeader super={`Story #${storyData.id}`} heading="EDIT"/>
        <Form method="post" id="story-form">
            <input
                placeholder='title'
                aria-label="Title"
                type="text"
                name="title"
                defaultValue={storyData.title}    
            />
            <input
                placeholder='1000'
                aria-label="Wordcount"
                type="number"
                step="1"
                name="word_count"
                defaultValue={storyData.title}    
            />
        <button type="submit">SAVE</button>
        <button type="button">CANCEL</button>
        </Form>
        
        </>
    )

}