import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardProject = ({ nombre, description, tipoTrabajo, client, project, tools }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isText, setIsText] = useState(false);

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
      <Link to={"/team"}>
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
      </Link>
    </>
  );
};

export default CardProject;
