import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Section1 from "../../Components/Home/Section1";
import Team from "../../Components/Home/team/Team";

import PanelProyectos from "../../Components/PanelProjects/PanelProjects";
import { data, data1 } from "../../data/Home";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Section1 data={data} />
      <Section1 data={data1} />
      <PanelProyectos />
      <Team />
      {/* 
      
      
      

       */}
      {/* <Banner /> */}
    </div>
  );
};

export default Home;
