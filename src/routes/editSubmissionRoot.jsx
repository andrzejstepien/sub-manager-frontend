import { Form, Link, useLoaderData } from "react-router-dom";
import Dropdown from "../Components/Dropdown";
import { useState } from "react";
export default function EditSubmissionRoot (){
const {submissions} = useLoaderData()
const submissionsOptions = submissions?.map(row=>[row.id,row.date_submitted])
const [id,setId]=useState(1)
const handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    setId(value)
}
    return(
        <>
        <div id="page-container" className="vertical-center">
        <Form >
        <h2>Which submission would you like to edit?</h2>
        <label>Date submitted:
        <Dropdown name="sub_id" value={id} options={submissionsOptions} handleChange={handleChange}/>

        </label>
        <br/>
        <Link to={`/submission/${id}/edit`}>OK</Link>
        </Form>
        </div>
        </>
    )
}