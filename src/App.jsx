import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
