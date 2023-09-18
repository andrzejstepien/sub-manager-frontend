import {getStories,getGenres,getPublications,getSubmissions, getResponses} from './APIcalls.mjs'

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

export async function editSubmissionLoader(){
    const {stories} = await storiesLoader()
    const {publications} = await publicationsLoader()
    const {submissions} = await submissionsLoader()
    let responses = await getResponses()
    responses = responses.data
    return { stories, publications, submissions, responses}
}

export async function editStoryLoader(){
    const {stories} = await storiesLoader()
    let genres = await getGenres()
    genres=genres.data
    return {stories,genres}
}