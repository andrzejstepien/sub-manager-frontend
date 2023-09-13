import plus from '../assets/plus.svg'
import pencil from '../assets/pencil.svg'
import trash from '../assets/trash.svg'
import { Link, Form, useNavigate, useSubmit } from 'react-router-dom'
export default function (props) {
    const navigate = useNavigate()
    let submit = useSubmit()
    const handleClickDelete = (event) => {
        if(props?.id){
            if (confirm("Are you sure you want to delete this record?")){
                event.preventDefault();
                submit({
                    id:props.id
                },
                {
                    method:"post",
                    action: `${props.url}/${props.id}/delete`
                })            
                
            }   
        }else{
            navigate(`${props.url}/delete`)
        }
        

        
      }


    return (
        <header id="page-header">
            <div id="h-container">
            <h2>
                {props.super}
            </h2>
            <h1>
                {props.heading}
            </h1>
            </div>
            
            
            <span id="icon-container">
                
                    <button onClick={() => { navigate(`${props.url}/create`) }}>
                        <img src={plus} />
                    </button>
                    <button onClick={() => { navigate(`${props.url}${props?.id ? `/${props.id}` : ""}/edit`) }}>
                        <img src={pencil} />
                    </button>
                    <button 
                          onClick={handleClickDelete}>
                        <img src={trash} />
                    </button>
                   


            </span>




        </header>
    )
}