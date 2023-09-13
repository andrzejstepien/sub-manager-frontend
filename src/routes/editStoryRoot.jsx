import { Form, Link, useLoaderData } from "react-router-dom";
import Dropdown from "../Components/Dropdown";
import { useState } from "react";
export default function EditStoryRoot (){
const {stories} = useLoaderData()
const storiesOptions = stories?.map(row=>[row.id,row.title])
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
        <h2>Which story would you like to edit?</h2>

        <Dropdown name="story_id" value={id} options={storiesOptions} handleChange={handleChange}/>
        <br/>
        <Link to={`/story/${id}/edit`}>OK</Link>
        </Form>
        </div>
        </>
    )
}