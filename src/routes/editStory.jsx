import { Form, useLoaderData, useParams, redirect, useNavigate, useSubmit } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import { requestEdit } from "../APIcalls.mjs";
import Checkboxes from "../Components/Checkboxes"
import { useState,useEffect } from "react";
import { forIn } from "lodash";

export async function action({request,params}){
    const data = await request.json()
    console.dir(data)
    data.id=params.storyId
    await requestEdit(data,'story')   
    return redirect(`/story/${params.storyId}`)
}

const makeGenreObject = (genres,titleGenres) =>{
    const obj = {}
    for (const genre of genres) {
        if(genre){
            obj[genre] = titleGenres.some(e=>{
                return e.name===genre
            })
        }
        
    }
    return obj
}




export default function EditStory(){
    const submit = useSubmit()
    const navigate = useNavigate()
    const { storyId } = useParams()
    const { stories, genres } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)
    const [data,setData] = useState({
        genres:{}
    })
    const handleToggle = (target) => {
        setData(prev => {
            return {
                ...prev,
                genres:{
                    ...prev.genres,
                    [target]: !prev.genres[target]
                }
                
            }
        })
    }
    const handleChange = (event) => {
        const value = event.target.value
        setData({
            ...data,
            [event.target.name]: value
        })
    }
    const handleSave = (event) =>{
        submit(data,{
            method:"post",
            action: `/story/${storyId}/edit`,
            encType: "application/json"
        })
    }
    useEffect(()=>{
        console.dir(data)
    },[data])
    useEffect(()=>{
        setData(prev=>{
           return {
                ...prev,
                genres:makeGenreObject(genres,storyData.genres)
            }
        })
    },[storyData])
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
                onChange={handleChange}
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
                onChange={handleChange}   
            />
            </label>
            <label>
                <Checkboxes
                name="genres"
                options={genres}
                onChange={handleToggle}
                values={data.genres}
                legend="Genres:"
                />
            </label>
        <div id="bottom-button-container">
        <button type="button" onClick={handleSave}>SAVE</button>
        <button type="button" onClick={()=>{navigate("/stories")}}>CANCEL</button>
        </div>
        
        </Form>
        
        </div>
    )

}