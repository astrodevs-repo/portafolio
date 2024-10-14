import { motion } from "framer-motion";

const Velocity = ({ left, right, items, extra }) => {
  return (
    <section className={`relative h-fit py-5 overflow-hidden w-full rotate `}>
      <motion.section
        initial={{ x: right }}
        animate={{ x: left }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`${extra} w-[100%] flex gap-10`}
      >
        {items.map((item, index) => (
          <img
            src={item.svg}
            alt=""
            className="w-[40vw] flex items-center"
            key={index}
            width={100}
            height={500}
          />
        ))}
      </motion.section>
    </section>
  );
};

export default Velocity;
