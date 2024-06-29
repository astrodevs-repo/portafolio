import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { routes } from "./routes.jsx";
import Layout from "./Layout/Layout.jsx";
import App from "./App.jsx";

// const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      {/* <RouterProvider router={router} /> */}
      <App />
    </Layout>
  </React.StrictMode>
);
