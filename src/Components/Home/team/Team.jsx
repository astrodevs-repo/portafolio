import Title from "../../shared/Title";
import Text from "../../shared/Text";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import { Stepper } from "../../../data/Home";
import { motion } from "framer-motion";

import VelocityVertical from "../../shared/VelocityVertical";

function TeamSection({ index }) {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: false },
  };

  return (
    <motion.section
      id={index}
      className="pt-5 sm:py-20 pb-10 flex justify-center"
      {...animationProps}
    >
      <section className=" shadow-2xl shadow-blackCeniza max-w-[1800px] min-h-[450px] max-h-[600px]  bg-gradient-to-r from-slate-600 to-blackCeniza dark:from-slate-900 dark:to-blackCeniza rounded-lg sm:rounded-3xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-5 sm:mx-5 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-20 transition-colors duration-1000  ">
        <section className="p-5 py-10 sm:p-20 h-full flex flex-col justify-center items-center gap-5">
          <Title text={"Nuestro Equipo"} textColor={"text-white"} extra={"font-Baskerville"} />
          <Text content={Stepper.body} textColor={"text-white"} />
          <ButtonSimple
            text={Stepper.title}
            textColor={"text-white"}
            w={"w-full"}
            active={false}
            route={Stepper.linkButton}
          />
        </section>

        <section className={`justify-center px-0 sm:px-2 hidden sm:hidden md:hidden lg:flex `}>
          {Stepper.itemsStepperImages.map(({ direction, items, top, bottom, duration }, index) => (
            <VelocityVertical
              top={top}
              bottom={bottom}
              duration={duration}
              items={items}
              extra={"rounded-md"}
              key={index}
              baseVelocity={direction}
              direction={direction}
            />
          ))}
        </section>
      </section>
    </motion.section>
  );
}

export default TeamSection;
