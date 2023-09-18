import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './routes/root';
import ErrorPage from './error-page';
import {Submissions} from './routes/submissions';
import Story from './routes/story';
import Stories from './routes/stories';
import Publication from './routes/publication';
import Publications from './routes/publications';
import { storiesLoader,publicationsLoader,submissionsLoader, editSubmissionLoader, editStoryLoader } from './loaders.mjs';
import EditStory, {action as editStoryAction } from './routes/editStory';
import EditPublication, {action as editPublicationAction} from './routes/editPublication';
import CreateStory, {action as createStoryAction} from './routes/createStory';
import CreatePublication, {action as createPublicationAction} from './routes/createPublication';
import { action as deleteStoryAction } from './routes/deleteStory';
import { action as deletePublicationAction } from './routes/deletePublication';
import {action as deleteSubmissionAction} from './routes/deleteSubmission'
import EditSubmission, {action as editSubmissionAction} from './routes/editSubmission';
import CreateSubmission, {action as createSubmissionAction} from './routes/createSubmission';
import EditStoryRoot from './routes/editStoryRoot';
import EditPublicationRoot from './routes/editPublicationRoot';
import EditSubmissionRoot from './routes/editSubmissionRoot';
import DeleteStoryRoot from './routes/deleteStoryRoot';
import DeletePublicationRoot from './routes/deletePublicationRoot';
import DeleteSubmissionRoot from './routes/deleteSubmissionRoot';
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
        index:true,
        element:<Submissions/>,
        loader:submissionsLoader
      },
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
        loader: editStoryLoader,
        action: editStoryAction
      },
      {
        path:"/story/edit",
        element: <EditStoryRoot/>,
        loader: storiesLoader
      },
      {
        path:"/publication/:publicationId/edit",
        element: <EditPublication/>,
        loader: publicationsLoader,
        action: editPublicationAction
      },
      {
        path:"/publication/edit",
        element: <EditPublicationRoot/>,
        loader: publicationsLoader
      },
      {
        path:"/submission/:submissionId/edit",
        element: <EditSubmission/>,
        loader: editSubmissionLoader,
        action: editSubmissionAction
      },
      {
        path:"/submission/edit",
        element: <EditSubmissionRoot/>,
        loader: submissionsLoader
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
      },
      {
        path:"/submission/:subId/delete",
        action: deleteSubmissionAction
      },
      {
        path:"/story/delete",
        element:<DeleteStoryRoot/>,
        loader:storiesLoader
      },
      {
        path:"/publication/delete",
        element:<DeletePublicationRoot/>,
        loader:publicationsLoader
      },
      {
        path:"/submission/delete",
        element:<DeleteSubmissionRoot/>,
        loader:submissionsLoader
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
