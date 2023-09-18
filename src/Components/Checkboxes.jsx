import { isNull } from "lodash"
import Checkbox from "./Checkbox"
export default (props) => {
    
    const optionsRendered = props.options?.map((e,i)=>{
        if(e===null){return}
        return <Checkbox
                onChange={props.onChange} 
                label={e}
                name={`${props.name}${i}`}
                key={e+i}
                value={props?.values[e]}
            />
    })
    .filter(e=>{return e!==null})

    return <fieldset>
        <legend>{props.legend}</legend>
        {optionsRendered}
    </fieldset>
}