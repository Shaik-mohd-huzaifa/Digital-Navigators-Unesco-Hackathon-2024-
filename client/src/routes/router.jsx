import { createBrowserRouter } from "react-router-dom";
import { FactCheck } from "../components/factCheck/factCheck.component";
import { Profile} from "../components/all";
import { Dashboard } from "./Dashboard/Dashboard.component";
import { IdeaSuggestor } from "../components/IdeaSuggestor/IdeaSuggestor.component";
import { Topic } from "../components/Topic/Topic.component";
import { Learning } from "../components/Learning/Learning.component";
import { Forum } from "../components/Forum/Forum.component";
import { Events } from "../components/Events/Events.component";
import { Course } from "../components/Course/Course.component";
import { Quiz } from "../components/quiz/quiz.component";
import ImageDownloader from "../components/Image Generation/imageGen.component";


export const router = createBrowserRouter(
    [
        {
          path: "/",
          element: 
          "Welocome to Home",
          errorElement: <div>Error Page</div>,
        },
        {
          path: "/dashboard",
          element: <Dashboard/>,
          children: [
            {
              index: true,
              element: <Profile/>

            },
            {
              path: 'factCheck',
              element: <FactCheck/>,
            },
            {
              path: "learning",
              element: <Learning/>
            },
            {
              path: "learning/course",
              element: <Course/>
            },
            {
              path: "forum",
              element: <Forum/>
            },
            {
              path: "about",
              element: <Profile/>
            },
            {
              path: "ideabank",
              element: <IdeaSuggestor/>,
            },
            {
              path: 'ideabank/:topicId',
              element: <Topic/>
            },
            {
              path: "events",
              element: <Events/>
            },
            {
              path: "events/:eventId",
              element: <Events/>
            },
            {
              path: "learning/quiz",
              element: <Quiz/>
            },
            {
              path: "imageGen",
              element: <ImageDownloader/>
            }
          ]
        }
      ]
)