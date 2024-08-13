import Page404 from "./Pages/404/404";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Team from "./Pages/Team/Team";
import Sended from "./Pages/TeamAttachment/Sended";
import TeamAttachment from "./Pages/TeamAttachment/TeamAttachment";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/team",
    element: <Team />,
  },

  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
  {
    path: "/teamattachment",
    element: <TeamAttachment />,
  },
  {
    path: "/sended",
    element: <Sended />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
