import Container from "../../Components/Container/Container";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import GalleryComponent from "../../Components/shared/gallery/GalleryProject";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import proyectosData from "../../Components/PanelProjects/proyectosData";
import Navbar from "../../Components/Navbar/Navbar";
import { TextParallaxContentExample } from "../../Components/Project/ContentProjectInfo";
const Project = () => {
  const params = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Buscar el proyecto correspondiente en proyectosData utilizando el ID de los parámetros de la URL
    const project = proyectosData.find((e) => e.id === params.id);
    console.log("hola", params, item);
    setItem(project);

    // Limpiar el estado al desmontar el componente
    return () => {
      setItem(null);
    };
  }, [params.id]);

  if (!item) {
    return null;
  }

  return (
    <motion.main
      className="main__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <section id="home">
        <Navbar />
        <div className="h-20"></div>

        <GalleryComponent title={item.nombre} description={item.description} />

        <Container>
          <div className="grid grid-cols-1 gap-4 ">
            <div className={`flex flex-col justify-start gap-10 `}>
              <div className="grid grid-cols-2 gap-5">
                <div className="text-gray-400">
                  Client <br />
                  <span className="font-bold text-black">{item.nombre}</span>
                </div>
                {/* Si tienes un objeto `client`, puedes iterar sobre sus propiedades */}
                {item.client &&
                  Object.entries(item.client).map(([property, value], index) => (
                    <div key={index} className="text-gray-400">
                      {property} <br />
                      <span className="font-bold text-black">{value}</span>
                    </div>
                  ))}
              </div>
              <div>
                <h1 className="text-2xl m-0">Tools & Technologies</h1>
                <div className="flex flex-wrap gap-2">
                  {item.tools &&
                    Object.entries(item.tools).map(([property], index) => (
                      <div key={index}>
                        <span className="font-normal">{property}</span>,
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* <div className={`grid grid-cols-1 gap-5 `}>
              {Object.entries(item.project).map(([property, value], index) => (
                <section id={property} key={index}>
                  <div className={` ${style.text}`}>
                    <h1 className="m-0 text-lg py-5">{property}</h1>
                    <p>{value}</p>
                  </div>
                </section>
              ))}
            </div> */}
          </div>
        </Container>
        <TextParallaxContentExample />
      </section>
    </motion.main>
  );
};

export default Project;
