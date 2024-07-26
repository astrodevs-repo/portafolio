import Container from "../../Components/Container/Container";
import { motion } from "framer-motion";
import GalleryComponent from "../../Components/shared/gallery/GalleryProject";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import proyectosData from "../../Components/PanelProjects/proyectosData";
import { TextParallaxContentExample } from "../../Components/Project/ContentProjectInfo";
import Text from "../../Components/shared/Text";
import SubTitle from "../../Components/shared/SubTitle";
import Footer from "../../Components/Footer/Footer";
const Project = () => {
  const params = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const project = proyectosData.find((e) => e.id === params.id);

    setItem(project);

    return () => {
      setItem(null);
    };
  }, []);

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
        <GalleryComponent {...item} />

        <Container>
          <div className="grid grid-cols-1 gap-4 ">
            <div className={`flex flex-col justify-start gap-10 `}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="text-gray-400">
                  Client <br />
                  <Text content={item.nombre} extra={"font-bold"} />
                </div>
                {/* Si tienes un objeto `client`, puedes iterar sobre sus propiedades */}
                {item.client &&
                  Object.entries(item.client).map(([property, value], index) => (
                    <div key={index} className="text-gray-400">
                      {property} <br />
                      <Text content={value} extra={"font-bold"} />
                    </div>
                  ))}
              </div>
              <div>
                <SubTitle text={"Tools & Technologies"} extra={""} />
                <div className="flex flex-wrap gap-2">
                  {item.tools &&
                    Object.entries(item.tools).map(([property], index) => (
                      <div key={index}>
                        <Text content={property} extra={"font-bold"} />
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
        <TextParallaxContentExample project={item?.project} />
      </section>
      <Footer />
    </motion.main>
  );
};

export default Project;
