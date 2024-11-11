import { motion, useScroll, useTransform } from "framer-motion";

export default function Panel({ items, baseVelocity }) {
  const { scrollY } = useScroll(); // Usamos el scrollY para controlar el movimiento.

  // Movimiento sin el wrap, desplazamiento lineal.
  const y = useTransform(scrollY, (value) => `${(value / 10) * baseVelocity}%`);

  // Invertir los items si baseVelocity es negativo
  const reversedItems = baseVelocity < 0 ? [...items].reverse() : items;

  return (
    <section className="relative h-screen py-5 overflow-hidden w-full px-2 z-0">
      <motion.div
        style={{ y }}
        className={`w-full flex flex-col gap-2 absolute ${
          baseVelocity > 0 ? "top-[-0vh]" : "top-[0vh]"
        }  left-0`}
      >
        {/* Columna que se mueve hacia arriba o hacia abajo */}
        {reversedItems.map((item, index) => (
          <motion.div
            className={`w-full ${item.color} h-[100vh] flex items-center gap-5 cursor-pointer justify-center`}
            key={index}
          >
            {item.type === "img" ? (
              <div className="relative w-full h-full">
                {" "}
                {/* El contenedor de la imagen ocupa todo el espacio */}
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover" // Aseguramos que la imagen ocupe todo el espacio disponible
                />
              </div>
            ) : (
              <div className="p-5 text-black">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
