import { motion } from "framer-motion";

const MovingText = ({ text, left, right, bg, textColor }) => {
  const items = Array.from({ length: 200 }, (_, index) => index + 1);
  return (
    <div className={`relative h-fit py-5 overflow-hidden w-full ${bg}`}>
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
        className="w-[100%] flex gap-5"
      >
        {items.map((item) => (
          <div className="min-w-fit" key={item}>
            <h2 className={`text-${textColor} text-4xl`}>{text}</h2>{" "}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingText;
