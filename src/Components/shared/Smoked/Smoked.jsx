// Background.tsx
import { motion } from "framer-motion";
import React from "react";
import png from "/public/atomgrueso.png"; // Asegúrate de que esta ruta sea correcta

const Background = () => {
  // Crea una función para generar una posición, tamaño y rotación aleatorios
  const getRandomTransform = () => {
    const size = Math.random() * 150 + 250; // Tamaño entre 50 y 250 px
    const rotation = Math.random() * 360; // Rotación entre 0 y 360 grados
    const x = Math.random() * 100; // Posición X en porcentaje
    const y = Math.random() * 100; // Posición Y en porcentaje
    return {
      width: `${size}px`,
      height: `${size}px`,
      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      top: `${y}%`,
      left: `${x}%`,
    };
  };

  // Crea una lista de elementos de imagen con transformaciones aleatorias
  const elements = Array.from({ length: 30 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        ...getRandomTransform(),
        backgroundImage: `url(${png})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 60, // Cambia la duración según la velocidad que desees
        ease: "linear",
      }}
    />
  ));

  return (
    <div className="absolute top-0 left-0 z-0 w-full h-screen overflow-hidden opacity-30">
      {elements}
    </div>
  );
};

export default Background;
