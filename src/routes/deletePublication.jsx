import { redirect } from "react-router";
import { requestDelete } from "../APIcalls.mjs";

export async function action({params}){
    await requestDelete({id:Number(params.publicationId)},'publication')
    return redirect("/publications")
}