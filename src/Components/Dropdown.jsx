

export default (props) => {
    
    const optionsRendered = props.options?.map((e,i)=>{
        return <option key={i} value={e[0]}>{e[1]}</option>
    })
    return <select name={props.name} value={props.value} onChange={props?.handleChange}>
        {optionsRendered}
    </select>
}