import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Section1 from "../../Components/Home/Section1";
import Team from "../../Components/Home/team/Team";
import Footer from "../../Components/Footer/Footer";
import PanelProyectos from "../../Components/PanelProjects/PanelProjects";

import { motion } from "framer-motion";
import { data, data1 } from "../../data/Home";

const Home = () => {
  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Header />
      <About />
      <Section1 data={data} />
      <Section1 data={data1} />
      <PanelProyectos />
      <Team />
      <Footer />
    </motion.main>
  );
};

export default Home;
