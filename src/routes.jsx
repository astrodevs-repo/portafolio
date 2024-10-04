import Page404 from "./Pages/404/404";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Sended from "./Pages/TeamAttachment/Sended";
import TeamAttachment from "./Pages/TeamAttachment/TeamAttachment";

export const routes = [
  {
    path: "/",
    element: <Home />,
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
    path: "/*",
    element: <Page404 />,
  },
];
