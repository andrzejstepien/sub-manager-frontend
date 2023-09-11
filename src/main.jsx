import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './routes/root';
import ErrorPage from './error-page';
import {Submissions} from './routes/submissions';
import Story from './routes/story';
import Stories from './routes/stories';
import Publication from './routes/publication';
import Publications from './routes/publications';
import { storiesLoader,publicationsLoader,submissionsLoader } from './loaders.mjs';
import EditStory, {action as editStoryAction } from './routes/editStory';
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
        loader: storiesLoader
      },
      {
        path: "/submissions",
        element: <Submissions/>,
        loader: submissionsLoader
      },
      {
        path: "/publications",
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
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
