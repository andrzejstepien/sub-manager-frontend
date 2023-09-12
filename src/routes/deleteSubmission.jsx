import { redirect } from "react-router";
import { requestDelete } from "../APIcalls.mjs";

export async function action({params}){
    await requestDelete({id:Number(params.storyId)},'submission')
    return redirect("/submissions")
}