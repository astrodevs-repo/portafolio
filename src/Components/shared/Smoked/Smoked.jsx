import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { atomImageHeader } from "../../../utils/urlImages";

const SectionA = () => {
  const { scrollY } = useScroll();

  // Transformaciones de movimiento para las imágenes
  const y3 = useSpring(useTransform(scrollY, [0, 2000], [0, -400]), {
    stiffness: 50,
    damping: 15,
  });

  // Rotación continua usando Framer Motion
  const rotate = useSpring(0, { stiffness: 5, damping: 15 });

  // Actualizar la rotación en función del scroll
  rotate.set(rotate.get() + 1); // Incrementa la rotación continuamente

  // Array de propiedades para las imágenes
  const images = [
    { className: "absolute top-40 left-40 w-56 h-56 opacity-40" },
    { className: "absolute right-0 top-20 w-96 h-96 opacity-40" },
    { className: "absolute right-40 bottom-0 w-60 h-60 opacity-50" },
    { className: "absolute right-1/2 top-0 w-64 h-64 opacity-20" },
    { className: "absolute right-3/2 bottom-0 w-64 h-64 opacity-80" },
  ];

  return (
    <section className="absolute top-0 left-0 z-0 w-full h-screen overflow-hidden opacity-60 hidden sm:flex">
      {images.map((imageProps, index) => (
        <motion.img
          key={index}
          src={atomImageHeader}
          alt="rotating"
          loading="lazy" // Carga diferida
          style={{
            y: y3,
            rotate,
          }}
          width={100}
          height={100}
          className={imageProps.className}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Configura la animación continua
        />
      ))}
    </section>
  );
};

export default SectionA;
