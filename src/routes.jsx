import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Team from "./Pages/Team/Team";

export const routes = [
  {
    path: "/",
    element: <Home />,
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
];
