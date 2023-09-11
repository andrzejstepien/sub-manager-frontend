import { useLoaderData, useParams, Link } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";
import { useState, useEffect } from "react";

const { filterList=[...filterList],highlights,clickables } = submissionsTableOptions
export default function Story(){
    const { storyId } = useParams()
    const { stories } = useLoaderData()
    const storyData = stories.find(row=>row.id==storyId)
   
    return(
        <>
        <div id="page">
        <PageHeader super={'Story#'+storyId} heading={storyData.title}/>
     <div>Wordcount: {storyData.word_count}</div>
     <Table 
     data={storyData.submissions} 
     filterList={[...filterList,'story']}
     highlights={highlights}
     clickables={clickables}
     sortByDefault='date_submitted'
     header='Submissions:'
     ></Table>
     <Link to={`/story/${storyData.id}/edit`}>EDIT</Link>
     </div>
        </>
    )
}