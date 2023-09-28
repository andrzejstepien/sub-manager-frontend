import { useLoaderData } from "react-router-dom"
import Table from "../Components/Table.jsx";
import PageHeader from "../Components/PageHeader.jsx";


  

export default function Stories(){
    const { stories } = useLoaderData();
    console.dir(stories)
    const filterColumns = [
        'submissions',
        'deleted'
    ]
    const filterRows = [
        {column:'deleted',value:1}
    ]
    const clickables = [
        ['title',(row)=>{return `../../story/${row.id}`}]    
    ]
    const badges = [
        ['genres','name']
    ]
    return(
        <div id="page-container">
        <PageHeader heading="Stories" url="/story"/>
        <Table 
        data={stories} 
        filterColumns={filterColumns} 
        filterRows={filterRows}
        clickables={clickables}
        sortByDefault='title'
        badges={badges}
        />
        </div>
    )
}
