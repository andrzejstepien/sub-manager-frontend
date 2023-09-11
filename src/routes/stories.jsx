import { useLoaderData } from "react-router-dom"
import Table from "../Components/Table.jsx";
import PageHeader from "../Components/PageHeader.jsx";
import { getStories } from "../APIcalls.mjs";


  

export default function Stories(){
    const { stories } = useLoaderData();
    const filterList = [
        'submissions'
    ]
    const clickables = [
        ['title',(row)=>{return `../../story/${row.id}`}]    
    ]
    return(
        <>
        <PageHeader heading="Stories"/>
        <Table 
        data={stories} 
        filterList={filterList} 
        clickables={clickables}
        sortByDefault='title'
        />
        </>
    )
}
