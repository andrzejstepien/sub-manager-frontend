import {getStories,getPublications,getSubmissions} from './APIcalls.mjs'

export async function publicationsLoader (){
    let publications = await getPublications()
    publications = publications.data
    return {publications}
}
export async function storiesLoader(){
    let stories = await getStories()
    stories = stories.data
    return {stories}
}
export async function submissionsLoader(){
    let submissions = await getSubmissions()
    submissions=submissions.data
    return { submissions }
  }