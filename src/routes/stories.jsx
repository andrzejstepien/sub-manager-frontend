import { useLoaderData } from "react-router-dom"
import { getStories } from "../APIcalls.mjs";
import Table from "../Components/Table.jsx";
import PageHeader from "../Components/PageHeader.jsx";


  

export default function Stories(){
    const { stories } = useLoaderData();
    const filterList = [
        'Submissions'
    ]
    const clickables = [
        ['Title',(row)=>{return `../../story/${row.ID}`}]    
    ]
    return(
        <>
        <PageHeader text="Stories"/>
        <Table data={stories} filterList={filterList} clickables={clickables}/>
        </>
    )
}
