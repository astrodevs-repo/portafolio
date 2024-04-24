import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import yeli from "../../../public/team/yeli.jpg";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Velocity from "../../Components/shared/velocity/Velocity";

const Team = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  // const items = [
  //   {
  //     name: "Yelitza Palma",
  //     img: yeli,
  //     rol: "Project Manager",
  //   },
  //   {
  //     name: "Miguel Cruz",
  //     img: yeli,
  //     rol: "Database",
  //   },
  //   {
  //     name: "Jesus Moreno",
  //     img: yeli,
  //     rol: "Product Manager",
  //   },
  //   {
  //     name: "Adrian León",
  //     img: yeli,
  //     rol: "Data Analysis",
  //   },
  //   {
  //     name: "Luisana Acevedo",
  //     img: yeli,
  //     rol: "CTO",
  //   },
  //   {
  //     name: "Jesus Moreno",
  //     img: yeli,
  //     rol: "Product Manager",
  //   },
  // ];
  return (
    <div className="h-screen">
      <div className={styles.background}>
        <Parallax pages={9}>
          <ParallaxLayer
            offset={0}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <section
              id="section1"
              className="bg-gradient-to-br from-[#c5fcff]  to-[#694fff] h-full w-full py-40"
            >
              <Container>
                <h1 className=" flex justify-center text-4xl md:text-5xl lg:text-5xl font-bold relative z-10 p-6 md:p-8 lg:p-10">
                  <span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-indigo-600">
                    ¡Descubre a Nuestro Increíble Equipo!
                  </span>
                </h1>
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  {" "}
                  <p>
                    ¡Hola, mundo! Estás a punto de conocer a las mentes creativas y apasionadas
                    detrás de nuestro trabajo. Somos un equipo diverso, lleno de energía y listo
                    para llevar tus ideas al siguiente nivel. Desde expertos en diseño hasta genios
                    del código, cada miembro de nuestro equipo aporta su propio toque único. ¿Estás
                    listo para conocer a las caras detrás de las pantallas? ¡Sigue desplazándote y
                    únete a la diversión!
                  </p>
                </motion.div>
              </Container>
              <Velocity
                text={"Our Team"}
                right={"0%"}
                left={"-100%"}
                bg={"bg-[#694fff]"}
                textColor={"white"}
              />
              <Velocity text={"now us"} right={"-100%"} left={"0%"} bg={"bg-[#c5fcff]"} />
            </section>
          </ParallaxLayer>

          {/**photos */}
          <ParallaxLayer
            sticky={{ start: 1, end: 2.5 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img src={yeli} alt="1" />
              </motion.div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 5, end: 6.5 }}
            style={{ ...alignCenter, justifyContent: "flex-end", paddingRight: "200px" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img src={yeli} alt="2" />
              </motion.div>
            </div>
          </ParallaxLayer>
          {/**photos */}

          {/**texts */}
          <ParallaxLayer
            sticky={{ start: 1.5, end: 2.5 }}
            speed={1}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className={` w-1/2 pr-40 min-h-screen  flex flex-col justify-center items-start`}
            >
              <p className="text-xl">
                <span className="font-bold text-2xl">Yelitza</span> lidera nuestro equipo con una
                combinación de visión estratégica y habilidades organizativas excepcionales. Es la
                maestra detrás de la planificación y ejecución de nuestros proyectos, asegurando que
                cada paso se lleve a cabo con precisión y eficiencia. Su capacidad para coordinar
                recursos, establecer metas claras y mantener la comunicación fluida dentro del
                equipo es fundamental para nuestro éxito. Yelitza es una líder inspiradora que
                motiva a todos a dar lo mejor de sí mismos, manteniendo siempre el enfoque en los
                objetivos del proyecto y la satisfacción del cliente. Su dedicación y compromiso son
                ejemplares, y su enfoque en la excelencia impulsa a nuestro equipo hacia adelante en
                cada desafío que enfrentamos.
              </p>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 5.5, end: 6.5 }}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={` w-1/2 pl-40 min-h-screen flex flex-col justify-center items-start`}>
              <p className="text-xl">
                <span className="font-bold text-2xl">Adrian</span> personifica la pasión y la
                dedicación que se necesitan para llevar nuestros proyectos desde la concepción hasta
                la realización. Como Project Owner, es el guardián de la visión, siempre buscando
                nuevas oportunidades y desafíos para nuestro equipo. Su creatividad y perspicacia
                son insuperables, y su capacidad para identificar y priorizar las necesidades del
                cliente impulsa nuestro trabajo hacia la excelencia. Adrian no solo trae consigo un
                profundo conocimiento del mercado y las tendencias, sino también una energía
                contagiosa que inspira a todos a dar lo mejor de sí mismos. Es un líder visionario
                que sabe cómo motivar y guiar a nuestro equipo hacia el éxito, al mismo tiempo que
                fomenta un ambiente de colaboración y camaradería. Su compromiso con la excelencia y
                su enfoque centrado en el cliente son el motor que impulsa nuestros proyectos hacia
                nuevos horizontes de éxito. Además, su experiencia como experto en Data Science
                aporta un valor adicional al equipo, permitiéndonos aprovechar al máximo los datos
                para tomar decisiones informadas y estratégicas en cada etapa del proyecto.
              </p>
            </div>
          </ParallaxLayer>

          {/**texts */}

          <ParallaxLayer
            offset={8}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Team;
