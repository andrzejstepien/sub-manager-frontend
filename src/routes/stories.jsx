import { useLoaderData } from "react-router-dom"
import Table from "../Components/Table.jsx";
import PageHeader from "../Components/PageHeader.jsx";
import { getStories } from "../APIcalls.mjs";
import magGlass from "../assets/magnifying-glass.svg"

  

export default function Stories(){
    const { stories } = useLoaderData();
    const filterColumns = [
        'submissions',
        //'deleted'
    ]
    const filterRows = [
        {column:'deleted',value:1}
    ]
    const clickables = [
        ['title',(row)=>{return `../../story/${row.id}`}]    
    ]
    return(
        <div id="page-container">
        <PageHeader heading="Stories" url="/story"/>
        <Table 
        data={stories} 
        filterColumns={filterColumns} 
        clickables={clickables}
        sortByDefault='title'
        filterRows={filterRows}
        />
        </div>
    )
}
