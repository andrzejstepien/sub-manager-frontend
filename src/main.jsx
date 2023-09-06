import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root, loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Submissions from './routes/submissions';
import Story from './routes/story';
import Stories from './routes/stories';
import Publication from './routes/publication';
import Publications from './routes/publications';
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
        loader: rootLoader
      },
      {
        path: "/submissions",
        element: <Submissions/>,
        loader: rootLoader
      },
      {
        path: "/publications",
        element: <Publications/>,
        loader: rootLoader
      },
      {
        path: "/story/:storyId",
        element: <Story/>,
        loader: rootLoader
      },
      {
        path: "/publication/:publicationId",
        element: <Publication/>,
        loader: rootLoader
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
