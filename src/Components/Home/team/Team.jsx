import Title from "../../shared/Title";
import Text from "../../shared/Text";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import Inspector from "../../shared/Inspector/Inspector";
import { Stepper, StepperMobile } from "../../../data/Home";
import { motion } from "framer-motion";
import VelocityVertical from "../../shared/VelocityVertical";

function Community({ index, onObserver, currentStep }) {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section
        id="team"
        initial={{ opacity: 1, color: "rgba(255, 255, 255, 0)", y: 100 }}
        animate={
          index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 100 } : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-gradient-to-r from-slate-600 to-blackCeniza dark:from-slate-900 dark:to-blackCeniza rounded-3xl sm:rounded-3xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-5 sm:mx-5 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-20 transition-colors duration-1000 "
      >
        <section className="p-5 py-10 sm:p-20 h-full flex flex-col justify-center items-center gap-5">
          <Title text={"Nuestro Equipo"} textColor={"text-white"} extra={"font-Baskerville"} />
          <Text content={Stepper.body} textColor={"text-white"} />
          <ButtonSimple
            text={Stepper.title}
            w={"w-full"}
            bg={"bg-[#4f75ff]"}
            border={"border-[#4f75ff]"}
            hover={"bg-[#4563d0]"}
            active={false}
            route={Stepper.linkButton}
          />
        </section>
        <section className={`flex sm:hidden md:hidden justify-center px-0 sm:px-2 `}>
          {StepperMobile.itemsStepperImages.map(({ items, top, bottom, duration }, index) => (
            <VelocityVertical
              top={top}
              bottom={bottom}
              duration={duration}
              items={items}
              extra={"rounded-lg"}
              key={index}
            />
          ))}
        </section>
        <section className={`md:flex justify-center px-0 sm:px-2 hidden sm:hidden `}>
          {Stepper.itemsStepperImages.map(({ items, top, bottom, duration }, index) => (
            <VelocityVertical
              top={top}
              bottom={bottom}
              duration={duration}
              items={items}
              extra={"rounded-lg"}
              key={index}
            />
          ))}
        </section>
      </motion.section>
    </Inspector>
  );
}

export default Community;
