import { useState } from "react";
import proyectosData from "./proyectosData";
import CardProject from "../shared/CardProject/CardProject";

import Section from "../shared/Section/Section";
import ButtonSimple from "../shared/Buttons/ButtonSimple";

const PanelProyectos = () => {
  const [filtro, setFiltro] = useState("");
  const [proyectosVisibles, setProyectosVisibles] = useState(6);

  const filtrarProyectos = (tipoTrabajo) => {
    if (tipoTrabajo === "vertodos") {
      setFiltro("");
      return;
    }
    setFiltro(tipoTrabajo);
    setProyectosVisibles(6);
  };

  const proyectosFiltrados = filtro
    ? proyectosData.filter((proyecto) => proyecto.tipoTrabajo === filtro)
    : proyectosData;

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
    <Section id={"projects"} title={"Nuestros proyectos"} className="px-20 py-20">
      <div className="flex flex-wrap justify-start space-x-4">
        {buttons.map(({ keyword, name }, index) => (
          <button
            type="button"
            key={index}
            onClick={() => filtrarProyectos(keyword)}
            className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-8">
        {proyectosFiltrados.slice(0, proyectosVisibles).map((proyecto, index) => (
          <CardProject key={index} {...proyecto} />
        ))}
      </div>
      {proyectosVisibles < proyectosFiltrados.length && (
        <div className="flex justify-center mt-8">
          <ButtonSimple textColor={"gray"} text={"Ver más"} link={"projects"} />
        </div>
      )}
    </Section>
  );
};

export default PanelProyectos;
