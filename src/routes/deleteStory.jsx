import { redirect } from "react-router";
import { requestDelete } from "../APIcalls.mjs";

export async function action({request}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.dir(data)
    await requestDelete({id:Number(data.id)},'story')
    return redirect("/stories")
}