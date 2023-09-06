import axios from "axios"

const API = axios.create({
    baseURL:"http://localhost:4000/api/",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
})

export const getSubmissions = async () => {
    try {
        const res = await API.get("submissions")
        return res
    } catch (error) {
        console.error(error)
    }
}
export const getStories = async () => {
    try {
        const res = await API.get("stories")
        return res
    } catch (error) {
        console.error(error)
    }
}
export const getPublications = async () => {
    try {
        const res = await API.get("publications")
        return res
    } catch (error) {
        console.error(error)
    }
}
