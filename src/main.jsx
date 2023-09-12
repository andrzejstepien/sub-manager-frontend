import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './routes/root';
import ErrorPage from './error-page';
import {Submissions} from './routes/submissions';
import Story from './routes/story';
import Stories from './routes/stories';
import Publication from './routes/publication';
import Publications from './routes/publications';
import { storiesLoader,publicationsLoader,submissionsLoader, editSubmissionLoader } from './loaders.mjs';
import EditStory, {action as editStoryAction } from './routes/editStory';
import EditPublication, {action as editPublicationAction} from './routes/editPublication';
import CreateStory, {action as createStoryAction} from './routes/createStory';
import CreatePublication, {action as createPublicationAction} from './routes/createPublication';
import { action as deleteStoryAction } from './routes/deleteStory';
import { action as deletePublicationAction } from './routes/deletePublication';
import EditSubmission, {action as editSubmissionAction} from './routes/editSubmission';
import CreateSubmission, {action as createSubmissionAction} from './routes/createSubmission';
import './styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/stories",
        element: <Stories/>,
        id:"stories",
        loader: storiesLoader
      },
      {
        path: "/submissions",
        element: <Submissions/>,
        loader: submissionsLoader
      },
      {
        path: "/publications",
        id:"publications",
        element: <Publications/>,
        loader: publicationsLoader
      },
      {
        path: "/story/:storyId",
        element: <Story/>,
        loader: storiesLoader
      },
      {
        path: "/publication/:publicationId",
        element: <Publication/>,
        loader: publicationsLoader
      },
      {
        path:"/story/:storyId/edit",
        element: <EditStory/>,
        loader: storiesLoader,
        action: editStoryAction
      },
      {
        path:"/publication/:publicationId/edit",
        element: <EditPublication/>,
        loader: publicationsLoader,
        action: editPublicationAction
      },
      {
        path:"/submission/:submissionId/edit",
        element: <EditSubmission/>,
        loader: editSubmissionLoader,
        action: editSubmissionAction
      },
      {
        path:"/story/create",
        element: <CreateStory/>,
        loader: storiesLoader,
        action: createStoryAction
      },
      {
        path:"/publication/create",
        element: <CreatePublication/>,
        loader: publicationsLoader,
        action: createPublicationAction
      },
      {
        path:"/submission/create",
        element: <CreateSubmission/>,
        loader: editSubmissionLoader,
        action: createSubmissionAction
      },
      {
        path:"/story/:storyId/delete",
        action:deleteStoryAction 
      },
      {
        path:"/publication/:publicationId/delete",
        action:deletePublicationAction 
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
