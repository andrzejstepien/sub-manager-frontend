import plus from '../assets/plus.svg'
import pencil from '../assets/pencil.svg'
import trash from '../assets/trash.svg'
import { Link, Form, useNavigate } from 'react-router-dom'
export default function (props) {
    const navigate = useNavigate()
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
                    <Form
                    method="post"
                    action="delete"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to delete this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit"
                    ><img src={trash} /></button>
                </Form>


            </span>




        </header>
    )
}