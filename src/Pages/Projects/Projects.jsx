import { useState } from "react";
import proyectosData from "../../Components/PanelProjects/proyectosData";
import Section from "../../Components/shared/Section/Section";
import Container from "../../Components/Container/Container";
import Title from "../../Components/shared/Title";
import CardProject from "../../Components/shared/CardProject/CardProject";

const Projects = () => {
  const [filtro, setFiltro] = useState("");
  const [proyectosVisibles, setProyectosVisibles] = useState(6);
  const [busqueda, setBusqueda] = useState("");

  const filtrarProyectos = (tipoTrabajo) => {
    if (tipoTrabajo === "vertodos") {
      setFiltro("");
      return;
    }
    setFiltro(tipoTrabajo);
    setProyectosVisibles(6);
  };

  const proyectosFiltrados = proyectosData.filter((proyecto) => {
    if (filtro && proyecto.tipoTrabajo !== filtro) return false;
    if (busqueda && !proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase())) return false;
    return true;
  });

  const buttons = [
    {
      name: "Data Analysis",
      keyword: "data analysis",
    },
    {
      name: "Development",
      keyword: "development",
    },
    {
      name: "UI / UX",
      keyword: "ui/ux",
    },
    {
      name: "Ver Todos",
      keyword: "vertodos",
    },
  ];

  return (
    <Section id={"projects"}>
      <Container>
        <Title text={"Projects"} />
        <div style={{ height: "50px" }}></div>
        <div className="flex flex-wrap justify-between items-center space-x-4 ">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="py-2.5 px-3 me-2 mb-2 sm:w-[50%] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600"
          />
          <div>
            {buttons.map(({ keyword, name }, index) => (
              <button
                type="button"
                key={index}
                onClick={() => filtrarProyectos(keyword)}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        {proyectosFiltrados.length === 0 && (
          <p className="w-[100%] text-center pt-40">
            No hay proyectos que coincidan con la búsqueda.
          </p>
        )}
        <div className="grid grid-cols-1 h-screen  justify-center items-start  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
          {proyectosFiltrados.slice(0, proyectosVisibles).map((proyecto, index) => (
            <CardProject key={index} {...proyecto} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
