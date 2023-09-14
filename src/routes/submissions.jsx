import { useLoaderData } from "react-router-dom";
import { getSubmissions } from "../APIcalls.mjs";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import edit from '../assets/pencil.svg'

export const submissionsTableOptions = {
     filterColumns : [
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
    const filterColumns = [
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
        ['edit',(row)=>{return `../../submission/${row.id}/edit`}]      
    ]

    const extraCols = [
        ['edit', <img src={edit} width="100%" style={{margin:"auto"}}/>]
    ]


  
    return(
        <div id="page-container">
        <PageHeader heading="Submissions" url="/submission"/>
        <Table 
        data={submissions} 
        filterColumns={filterColumns} 
        highlights={highlights} 
        sortByDefault="date_submitted"
        clickables={clickables}
        extraCols={extraCols}
        />
        </div>
    )
}