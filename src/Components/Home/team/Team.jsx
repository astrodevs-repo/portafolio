import Title from "../../shared/Title";
import Text from "../../shared/Text";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import { Stepper, StepperMobile } from "../../../data/Home";

import VelocityVertical from "../../shared/VelocityVertical";
import React from "react";

const Community = React.memo(function Community({ index }) {
  return (
    <section id={index} className="pt-5 sm:py-20">
      <section className="bg-gradient-to-r from-slate-600 to-blackCeniza dark:from-slate-900 dark:to-blackCeniza rounded-3xl sm:rounded-3xl  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-5 sm:mx-5 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-20 transition-colors duration-1000  ">
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
      </section>
    </section>
  );
});

export default Community;
