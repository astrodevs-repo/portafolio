import yeli from "../../../../public/team/yeli.jpg";
import miguel from "../../../../public/team/miguel.jpg";
import jesus from "../../../../public/team/jesus.jpg";
import { motion } from "framer-motion";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import Section from "../../shared/Section/Section";
import { useState } from "react";

const Team = () => {
  const items = [
    {
      name: "Yelitza Palma",
      img: yeli,
      rol: "Project Manager",
      bgColor: "bg-[#FADBD8]", // Color pastel
    },
    {
      name: "Miguel Cruz",
      img: yeli,
      rol: "Database",
      bgColor: "bg-[#D2B4DE]", // Color pastel
    },
    {
      name: "Jesus Moreno",
      img: yeli,
      rol: "Product Manager",
      bgColor: "bg-[#AED6F1]", // Color pastel
    },
    {
      name: "Adrian León",
      img: yeli,
      rol: "Data Analysis",
      bgColor: "bg-[#ABEBC6]", // Color pastel
    },
    {
      name: "Luisana Acevedo",
      img: miguel,
      rol: "CTO",
      bgColor: "bg-[#F9E79F]", // Color pastel
    },
    {
      name: "Jesus Moreno",
      img: jesus,
      rol: "Product Manager",
      bgColor: "bg-[#D5DBDB]", // Color pastel
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section title={"Quienes somos"} id="team">
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <motion.article
            key={index}
            className="items-center flex justify-center"
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
          >
            <motion.img
              src={item.img}
              alt=""
              className="rounded-lg rounded-b-lg h-80 w-80 object-cover"
              animate={{ rotateY: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 1 }}
            />

            {activeIndex === index && (
              <motion.div
                className={`text-white absolute inset-0 ${item.bgColor} flex items-center justify-center flex-col`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
              >
                <h1 className="text-2xl text-white font-extrabold">{item.name}</h1>
                <p>{item.rol}</p>
              </motion.div>
            )}
          </motion.article>
        ))}
      </section>
      <section className="group h-full flex items-center ">
        <ButtonSimple textColor={"gray"} text={"ver mas"} link={"team"} />
      </section>
    </Section>
  );
};

export default Team;
