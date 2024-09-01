// Background.tsx
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import png from "/public/atomgrueso.png"; // Asegúrate de que esta ruta sea correcta

const Background = () => {
  // Estado para la posición de los elementos
  const [scrollY, setScrollY] = useState(0);

  // Actualiza el estado del scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Añade y limpia el listener de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Crea una función para generar una posición, tamaño y rotación aleatorios
  const getRandomTransform = () => {
    const size = Math.random() * 150 + 350; // Tamaño entre 350 y 500 px
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
  const elements = Array.from({ length: 10 }).map((_, i) => (
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
        y: -scrollY, // Mueve el elemento hacia arriba según el scroll
      }}
      transition={{
        type: "tween",
        duration: 0.5, // Cambia la duración para ajustar la velocidad del movimiento
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
