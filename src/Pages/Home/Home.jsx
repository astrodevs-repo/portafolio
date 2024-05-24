import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Team from "../../Components/Home/team/Team";
import Footer from "../../Components/Footer/Footer";
import StepList from "../../Components/Home/Steper";
import ClientsSection from "../../Components/Home/ClientsSection/ClientsSection";
import Servicios from "../../Components/Home/Servicios/Servicios";

import { motion } from "framer-motion";

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
      <Servicios />
      <ClientsSection />
      <StepList />
      <Team />
      <Footer />
    </motion.main>
  );
};

export default Home;
