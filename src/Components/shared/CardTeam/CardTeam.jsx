import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yeli from "../../../../public/team/yeli.jpg";
import miguel from "../../../../public/team/miguel.jpg";
import jesus from "../../../../public/team/jesus.jpg";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const cardColors = ["#FF5733", "#33FF57", "#5733FF", "#FF33F9", "#F9FF33", "#33F9FF", "#FF3333"];

function Card({
  x,
  rotate,
  drag,
  frontCard,
  variantsFrontCard,
  variantsBackCard,
  exitX,
  setIndex,
  day,
  color,
}) {
  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setIndex((prevIndex) => (prevIndex === daysOfWeek.length - 1 ? 0 : prevIndex + 1));
    }
    if (info.offset.x > 100) {
      setIndex((prevIndex) => (prevIndex === 0 ? daysOfWeek.length - 1 : prevIndex - 1));
    }
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
        backgroundColor: color,
      }}
      whileTap={{ cursor: "grabbing" }}
      // Dragging
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
        }}
      >
        {day}
      </motion.div>
    </motion.div>
  );
}

export default function CardTeam() {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <motion.div style={{ width: 150, height: 150, position: "relative" }} className="bg-red-500">
        <AnimatePresence initial={false}>
          <Card
            key={index === 0 ? daysOfWeek.length - 1 : index - 1}
            x={-10}
            rotate={0}
            drag="x"
            frontCard={false}
            exitX={-250}
            setIndex={setIndex}
            day={daysOfWeek[index === 0 ? daysOfWeek.length - 1 : index - 1]}
            color={cardColors[index === 0 ? daysOfWeek.length - 1 : index - 1]}
            className="rounded-lg"
            style={{
              backgroundImage: `url(${yeli})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Card>
          <Card
            key={index}
            x={-10}
            rotate={0}
            drag="x"
            frontCard={true}
            exitX={0}
            setIndex={setIndex}
            day={daysOfWeek[index]}
            color={cardColors[index]}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
