import React from "react";
import "./style.css"; // Importa tu archivo CSS para estilos personalizados si es necesario

const Team = () => {
  return (
    <section className="carousel-container">
      <div className="carousel">
        <div className="slide bg-red-200">
          <div className="content flex justify-center items-center">
            <div className="bg-black h-1/2 w-full">Slide 1</div>
          </div>
        </div>
        <div className="slide bg-red-400">
          <div className="content flex justify-center items-center">
            <div className="bg-black h-1/2 w-full">Slide 2</div>
          </div>
        </div>
        {/* Agrega más slides según sea necesario */}
      </div>
    </section>
  );
};

export default Team;
