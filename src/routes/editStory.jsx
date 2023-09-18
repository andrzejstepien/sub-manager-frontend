import { Form, useLoaderData, useParams, redirect, useNavigate } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestEdit } from "../APIcalls.mjs";
import Checkboxes from "../Components/Checkboxes"
import { useState,useEffect } from "react";
import { forIn } from "lodash";

export async function action({request,params}){
    const formData = await request.formData()
    console.dir(formData)
    let data = Object.fromEntries(formData)
    data.id=parseInt(params.storyId)
    data = packageGenres(data)
    console.dir(data)
    await requestEdit(data,'story')   
    return redirect(`/story/${params.storyId}`)
}

export const packageGenres = (data) => {
    const array = []
    for (const key in data) {
        if(/genres/.test(key)){
            array.push(key.slice(6))
            delete data[key]
        }
    }
    data.genres=array
    return data
}




export default function EditStory(){
    const navigate = useNavigate()
    const { storyId } = useParams()
    const { stories, genres } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)
    const [toggledGenres,setToggledGenres]=useState({})
    const handleToggle = (target) => {
        setToggledGenres(prev => {
            return {
                ...prev,
                [target]: !prev[target]
            }
        })
    }
    useEffect(()=>{
        console.dir(toggledGenres)
    },[toggledGenres])
    return(
        <div id="page-container">
        <PageHeader super={`Story #${storyData.id}`} heading="EDIT" url="/story" id={storyId}/>
        <Form method="post" id="story-form">
            <label> Title:
            <input
                placeholder='title'
                aria-label="Title"
                type="text"
                name="title"
                defaultValue={storyData.title}    
            />
            </label>
            <label> Wordcount:
            <input
                placeholder='1000'
                aria-label="Wordcount"
                type="number"
                step="1"
                name="word_count"
                defaultValue={storyData.word_count}    
            />
            </label>
            <label>
                <Checkboxes
                name="genres"
                options={genres}
                onChange={handleToggle}
                values={genres}
                legend="Genres:"
                />
            </label>
        <div id="bottom-button-container">
        <button type="submit">SAVE</button>
        <button type="button" onClick={()=>{navigate("/stories")}}>CANCEL</button>
        </div>
        
        </Form>
        
        </div>
    )

}