import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout/Layout.jsx";

import App from "./App.jsx";
import { LangProvider } from "./context/useLang.jsx";

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <HelmetProvider context={helmetContext}>
        <Layout>
          <App />
        </Layout>
      </HelmetProvider>
    </LangProvider>
  </React.StrictMode>
);
