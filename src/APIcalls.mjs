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
export const getResponses = async () => {
    try {
        const res = await API.get("responses")
        return res
    } catch (error) {
        console.error(error)
    }
}
export const requestEdit = async (data,type) => {
    try {
        const res = await API.post(`/${type}/edit`,data)
        console.log(res)
        return res
    } catch (error) {
        console.error(error)
    }
}
export const requestDelete = async (data,type) => {
    console.log("requesting delete!")
    try {
        const res = await API.post(`/${type}/delete`,data)
        return res
    } catch (error) {
        console.error(error)
    }
}
export const requestCreate = async (data,type) => {
    try {
        const res = await API.post(`/${type}/create`,data)
        return res
    } catch (error) {
        console.log(error)
    }
}
