import { Form, useLoaderData, useParams, redirect, useNavigate } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestEdit } from "../APIcalls.mjs";
import Dropdown from "../Components/Dropdown";
import { useEffect,useState } from "react";

export async function action({request,params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    data.id=parseInt(params.submissionId)
    console.dir(data)
    await requestEdit(data,'submission')   
    return redirect(`/submissions`)
}




export default function EditSubmission(){
    const navigate = useNavigate()
    const { submissionId } = useParams()
    const { submissions, stories, publications, responses } = useLoaderData()
    const submissionData = submissions.find(row=>row.id==submissionId)
    const [data,setData] = useState({
        story_id:submissionData.story_id,
        pub_id:submissionData.pub_id,
        date_submitted:submissionData.date_submitted,
        date_responded:submissionData.date_responded,
        response_id:submissionData.response_id
    })

    
    const storiesOptions = stories?.map(row=>[row.id,row.title])
    const publicationsOptions = publications?.map(row=>[row.id,row.title])
    const responsesOptions = responses?.map(row=>[row.id,row.response])

    const handleChange = (event) => {
        const value = event.target.value
        setData({
            ...data,
            [event.target.name]: value
        })
    }



    return(
        <div id="page-container">
        <PageHeader super={`Submission #${submissionData.id}`} heading="EDIT" url="/submission" id={submissionId}/>
        <Form method="post" id="submission-form">
            <label> Story:
            <Dropdown name="story_id" value={data.story_id} options={storiesOptions} handleChange={handleChange}/>
            </label>
            <label> Publication:
            <Dropdown name="pub_id" value={data.pub_id} options={publicationsOptions} handleChange={handleChange}/>
            </label>
            <label> Date submitted:
            <input name="date_submitted" type="date" value={data.date_submitted} onChange={handleChange}/>
            </label>
            <label> Date responded:
            <input name="date_responded" type="date" value={data.date_responded} onChange={handleChange}/>
            </label>
            <label> Status:
            <Dropdown name="response_id" value={data.response_id} options={responsesOptions} handleChange={handleChange}/>
            </label>
            <div id="bottom-button-container">
            <button type="submit">SAVE</button>
        <button type="button" onClick={()=>{navigate("/submissions")}}>CANCEL</button>
            </div>
        
        </Form>
        
        </div>
    )

}