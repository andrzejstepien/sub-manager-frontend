import { Form, Link, useLoaderData } from "react-router-dom";
import Dropdown from "../Components/Dropdown";
import { useState } from "react";
export default function EditPublicationRoot (){
const {publications} = useLoaderData()
const publicationsOptions = publications?.map(row=>[row.id,row.title])
const [id,setId]=useState(1)
const handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    setId(value)
}
    return(
        <>
        <div id="page-container">
        <Form >
        <h2>Which publication would you like to edit?</h2>

        <Dropdown name="pub_id" value={id} options={publicationsOptions} handleChange={handleChange}/>
        <br/>
        <Link to={`/publication/${id}/edit`}>OK</Link>
        </Form>
        </div>
        </>
    )
}