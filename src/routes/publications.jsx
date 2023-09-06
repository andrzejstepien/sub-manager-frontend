import { useLoaderData } from "react-router-dom"
import { getPublications } from "../APIcalls.mjs";
import Table from "../Components/Table.jsx";
import PageHeader from "../Components/PageHeader.jsx";


  

export default function Publications(){
    const { publications } = useLoaderData();
    const filterList = [
        'Submissions'
    ]
    const links = [
        'Website'
    ]
    const clickables = [
        ['Title',(row)=>{return `../../publication/${row.ID}`}]    
    ]
    return(
        <>
        <PageHeader text="Publications"/>
        <Table 
        data={publications} 
        filterList={filterList}
        links={links}
        clickables={clickables}
        />
        </>
    )
}
