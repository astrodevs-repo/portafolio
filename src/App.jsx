import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/shared/ScrollTop/ScrollTop";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON desde la carpeta public
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log("Error al cargar los datos:", error));
  }, []);
  return (
    <Router basename="/">
      <ScrollToTop>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} data={data} />
            ))}
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}

export default App;
