import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./Components/shared/ScrollTop/ScrollTop";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}

export default App;
