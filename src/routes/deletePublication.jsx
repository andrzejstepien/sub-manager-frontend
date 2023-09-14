import { redirect } from "react-router";
import { requestEdit } from "../APIcalls.mjs";

export async function action({request}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.dir(data)
    await requestEdit({id:Number(data.id),deleted:1},'publication')
    return redirect("/publications")
}