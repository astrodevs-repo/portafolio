import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout/Layout.jsx";

import App from "./App.jsx";
const helmetContext = {};
// const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      {/* <RouterProvider router={router} /> */}
      <Layout>
        <App />
      </Layout>
    </HelmetProvider>
  </React.StrictMode>
);
