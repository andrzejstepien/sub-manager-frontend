import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import Dropdown from "../Components/Dropdown";
import { useState } from "react";
export default function DeleteStoryRoot (){
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
        }}>
        <h2>Which story would you like to delete?</h2>

        <Dropdown name="id" value={id} options={storiesOptions} handleChange={handleChange}/>
        <br/>
        <button type="submit">DELETE</button>
        </Form>
        </div>
        </>
    )
}