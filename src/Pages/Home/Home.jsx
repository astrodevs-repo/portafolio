import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Team from "../../Components/Home/team/Team";
import Footer from "../../Components/Footer/Footer";
import PanelProyectos from "../../Components/PanelProjects/PanelProjects";

import { motion } from "framer-motion";
import StepList from "../../Components/Home/Steper";
import MovingText from "../../Components/shared/velocity/Velocity";
import ClientsSection from "../../Components/Home/ClientsSection/ClientsSection";

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

      <StepList />
      <PanelProyectos />
      <ClientsSection />
      <Team />
      <MovingText
        text={"Our Team"}
        right={"0%"}
        left={"-100%"}
        bg={"bg-[#694fff]"}
        textColor={"white"}
      />
      <MovingText text={"now us"} right={"-100%"} left={"0%"} bg={"bg-[#c5fcff]"} />
      <Footer />
    </motion.main>
  );
};

export default Home;
