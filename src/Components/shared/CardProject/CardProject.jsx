import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Container from "../../Container/Container";
import GalleryComponent from "../gallery/GalleryProject";

const CardProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isText, setIsText] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setIsText(!isText);
    window.history.pushState({}, "", "/");
  };

  const handleCardClick = () => {
    setIsOpen(true);
    // Cambiar el URL sin recargar la página
    window.history.pushState({}, "", "/team");
  };

  useEffect(() => {
    if (isOpen) {
      // Deshabilitar scroll cuando isOpen es true
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setIsText(!isText);
      }, 3000);
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
                Noteworthy technology acquisitions 2021
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
          className={`fixed h-screen  z-40 w-full overflow-y-auto bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 drawer ${
            style.drawer
          } ${isOpen ? style.open : style.closed}`}
          tabIndex="-1"
          aria-labelledby="drawer-swipe-label"
        >
          <Container>
            <div onClick={handleClose}>Cerrar</div>
            {isText && <GalleryComponent title={"nombre del proyecto"} />}
            {isText && (
              <div className={`h-screen ${style.text} ${isText ? style.open : style.closed}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aperiam aut
                consectetur ullam nemo quod nisi sequi consequatur accusamus corporis eius
                praesentium quam, officiis, rem vero. Facere tenetur inventore a. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Nulla atque mollitia sunt pariatur deleniti
                nobis minus amet debitis quo maiores odio culpa in veniam tempore modi, animi, saepe
                quod asperiores!lorenmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn Lorem ipsum
                dolor sit amet consectetur adipisicing elit. At aut ipsum laboriosam assumenda
                consequuntur sit error illo cum repellat neque suscipit, ab quisquam voluptate
                veritatis deleniti atque perspiciatis incidunt temporibus.
              </div>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

export default CardProject;
