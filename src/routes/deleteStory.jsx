import { redirect } from "react-router";
import { requestEdit } from "../APIcalls.mjs";

export async function action({request}){
    const formData = await request.formData()
    let data = Object.fromEntries(formData)
    console.dir(data)
    data = {
        id:Number(data.id),
        deleted:1,
    }
    console.log(data)
    await requestEdit(data,'story')
    return redirect("/stories")
}