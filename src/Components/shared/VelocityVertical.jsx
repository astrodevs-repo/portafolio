import { motion } from "framer-motion";

const VelocityVertical = ({ top, bottom, items, extra, duration }) => {
  const duplicateItems = (items, times) => {
    let result = [];
    for (let i = 0; i < times; i++) {
      result = result.concat(items);
    }
    return result;
  };

  const duplicatedItems = duplicateItems(items, 10);
  return (
    <section className="relative h-[500px] py-5 overflow-hidden w-full px-2 z-0">
      <motion.div
        initial={{ y: top }}
        animate={{ y: bottom }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="w-[100%] flex flex-col gap-5"
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            className="min-w-fit flex items-center gap-5 cursor-pointer"
            key={index}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={item} alt="" className={extra} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VelocityVertical;
