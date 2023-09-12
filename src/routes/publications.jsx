import { useLoaderData } from "react-router-dom"
import { getPublications } from "../APIcalls.mjs";
import Table from "../Components/Table.jsx";
import PageHeader from "../Components/PageHeader.jsx";



  

export default function Publications(){
    const { publications } = useLoaderData();
    const filterList = [
        'submissions'
    ]
    const links = [
        'link'
    ]
    const clickables = [
        ['title',(row)=>{return `../../publication/${row.id}`}]    
    ]
    return(
        <div id="page-container">
        <PageHeader heading="Publications" url="/publication"/>
        <Table 
        data={publications} 
        filterList={filterList}
        links={links}
        clickables={clickables}
        sortByDefault='title'
        />
        </div>
    )
}
