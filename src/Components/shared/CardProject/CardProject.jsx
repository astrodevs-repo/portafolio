import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Container from "../../Container/Container";
import GalleryComponent from "../gallery/GalleryProject";
import { IoMdClose } from "react-icons/io";

const CardProject = ({ nombre, description, tipoTrabajo, client, project, tools }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isText, setIsText] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsText(!isText);
    window.history.pushState({}, "", "/");
  };

  const handleCardClick = () => {
    setIsOpen(true);
    window.history.pushState({}, "", "/team");
  };

  useEffect(() => {
    if (isOpen) {
      // Deshabilitar scroll cuando isOpen es true
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setIsText(!isText);
      }, 1000);
    } else {
      // Habilitar scroll cuando isOpen es false
      document.body.style.overflow = "auto";
    }
    // Limpiar el efecto cuando el componente se desmonta o cuando isOpen cambia
    return () => {
      document.body.style.overflow = "auto";
      setIsText(!isText);
    };
  }, [isOpen]);

  return (
    <>
      {/* Drawer init and toggle */}
      <div className="text-center" onClick={handleCardClick}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <img
              className="rounded-t-lg"
              src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg"
              alt=""
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {nombre}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
              chronological order.
            </p>
          </div>
        </div>
      </div>

      {/* Drawer component */}
      {isOpen && (
        <div
          id="drawer-swipe"
          className={`fixed h-screen z-40 w-full overflow-y-auto bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 drawer ${
            style.drawer
          } ${isOpen ? style.open : style.closed}`}
          tabIndex="-1"
          aria-labelledby="drawer-swipe-label"
        >
          <div
            onClick={handleClose}
            className="w-full flex justify-end py-10 px-10 cursor-pointer hover:text-red-500"
          >
            <IoMdClose />
          </div>
          <GalleryComponent title={nombre} description={description} />
          <Container>
            {" "}
            <div className="grid grid-cols-1 gap-4 pb-[500px]  ">
              <div className={` flex flex-col justify-start gap-10 pt-40`}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="text-gray-400">
                    client <br />
                    <span className="font-bold text-black">{nombre} </span>
                  </div>
                  {Object.entries(client).map(([property, value], index) => (
                    <div key={index} className="text-gray-400">
                      {property} <br />
                      <span className="font-bold text-black">{value} </span>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-2xl m-0">Tools & Technologies</h1>

                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {Object.entries(tools).map(([property], index) => (
                      <div key={index}>
                        <span className="font-normal">{property} </span>,
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={` flex flex-col gap-5`}>
                {Object.entries(project).map(([property, value], index) => (
                  <section id={property} key={index}>
                    <div className={` ${style.text}`}>
                      <h1 className="m-0 text-lg py-5">{property}</h1>
                      <p>{value}</p>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default CardProject;
