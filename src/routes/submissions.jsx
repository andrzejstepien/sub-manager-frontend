import { useLoaderData } from "react-router-dom";
import { getSubmissions } from "../APIcalls.mjs";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";



export default function Submissions(){
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
        ['publication',(row)=>{return `../../publication/${row.pub_id}`}]      
    ]
  
    return(
        <>
        <PageHeader text="Submissions"/>
        <Table 
        data={submissions} 
        filterList={filterList} 
        highlights={highlights} 
        sortByDefault="Submitted"
        clickables={clickables}
        />
        </>
    )
}