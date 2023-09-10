export default function (props){
    return(
        <header>
            <h2>
                {props.super}
            </h2>
            <h1>
                {props.heading}
            </h1>
        </header>
    )
}