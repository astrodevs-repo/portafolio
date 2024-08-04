import { motion } from "framer-motion";

const Velocity = ({ left, right, items, extra }) => {
  return (
    <section className={`relative h-fit py-5 overflow-hidden w-full px-20 `}>
      <motion.div
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: 99999,
          fontSize: "24px",
          color: "black",
          fontWeight: "bold",
        }}
        initial={{ x: right }}
        animate={{ x: left }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-[100%] flex gap-20"
      >
        {items.map((item, index) => (
          <div className="min-w-fit flex items-center gap-5" key={index}>
            <img src={item.svg} alt="" className={extra} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Velocity;
