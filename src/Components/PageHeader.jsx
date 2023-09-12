import plus from '../assets/plus.svg'
import pencil from '../assets/pencil.svg'
import trash from '../assets/trash.svg'
import { Link } from 'react-router-dom'
export default function (props){
    return(
        <header id="page-header">
            <h2>
                {props.super}
            </h2>
            <h1>
                {props.heading}
            </h1>
            <span id="icon-container">
            <Link to={`${props.url}/create`} >
            <img src={plus}/>    
            </Link>
            <Link to={`${props.url}${props?.id?`/${props.id}`:""}/edit`} >
            <img src={pencil}/>
            </Link>
            <Link to={`${props.url}${props?.id?`/${props.id}`:""}/delete`} >
            <img src={trash}/>
            </Link>  
            </span>
            
        </header>
    )
}