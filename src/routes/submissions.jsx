import { useLoaderData } from "react-router-dom";
import { getSubmissions } from "../APIcalls.mjs";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";

export const submissionsTableOptions = {
     filterList : [
        'response_id',
        'pub_id',
        'story_id'
    ],
     highlights : [
        ['response','Pending']
    ],
     clickables : [
        ['story',(row)=>{
            return `../../story/${row.story_id}`}],
        ['publication',(row)=>{return `../../publication/${row.pub_id}`}]      
    ]
}

export function Submissions(){
    const { submissions } = useLoaderData();
    const filterList = [
        'response_id',
        'pub_id',
        'story_id'
    ]
    const highlights = [
        ['response','Pending']
    ]
    const clickables = [
        ['story',(row)=>{
            return `../../story/${row.story_id}`}],
        ['publication',(row)=>{return `../../publication/${row.pub_id}`}],
        ['id',(row)=>{return `../../submission/${row.id}/edit`}]      
    ]


  
    return(
        <>
        <PageHeader heading="Submissions"/>
        <Table 
        data={submissions} 
        filterList={filterList} 
        highlights={highlights} 
        sortByDefault="date_submitted"
        clickables={clickables}
        />
        </>
    )
}