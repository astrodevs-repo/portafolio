import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardProject = ({ id, nombre, description, tipoTrabajo, client, project, tools }) => {
  return (
    <>
      {/* Drawer init and toggle */}
      <Link to={`/project/${id}`}>
        <div className="text-center  w-full">
          <div className="w-full rounded-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg"
                src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/06/Ui-ux-cover-imge.jpg"
                alt=""
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {nombre}
              </h5>
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

CardProject.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tipoTrabajo: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
};

export default CardProject;
