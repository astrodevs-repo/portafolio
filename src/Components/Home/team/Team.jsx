/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useGSAP } from "@gsap/react";
import s from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import yeli from "/public/team/yeli.jpg";
import SubTitle from "../../shared/SubTitle";
import Title from "../../shared/Title";
import Text from "../../shared/Text";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import Inspector from "../../shared/Inspector/Inspector";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Community({ index, onObserver, currentStep }) {
  const galleryRef = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const additionalY = { val: 0 };
      let additionalYAnim;
      let offset = 0;
      const cols = gsap.utils.toArray("#col");

      cols.forEach((col, i) => {
        const images = col.childNodes;

        // DUPLICATE IMAGES FOR LOOP
        images.forEach((image) => {
          var clone = image.cloneNode(true);
          col.appendChild(clone);
        });

        images.forEach((item) => {
          let columnHeight = item.parentElement.clientHeight;
          let direction = i % 2 !== 0 ? "+=" : "-=";

          gsap.to(item, {
            y: direction + Number(columnHeight / 2),
            duration: 20,
            repeat: -1,
            ease: "none",
            trigger: galleryRef.current,
            modifiers: {
              y: gsap.utils.unitize((y) => {
                if (direction == "+=") {
                  offset += additionalY.val;
                  y = (parseFloat(y) - offset) % (columnHeight * 0.5);
                } else {
                  offset += additionalY.val;
                  y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
                }

                return y;
              }),
            },
          });
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section
        id="team"
        initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: 200 }}
        animate={
          index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 } : {}
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className=" bg-gradient-to-r from-slate-600 to-blackCeniza rounded-t-3xl sm:rounded-3xl  my-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-5 sm:mx-5 md:mx-5 lg:mx-10 xl:mx-20 2xl:mx-20">
          <div className="p-10 sm:p-20 h-full flex flex-col justify-center items-center gap-5">
            <Title text={"Nuestro Team"} textColor={"text-white"} extra={"italic"} />
            <Text
              content={
                " Neurons cuenta con un equipo diverso de profesionales apasionados por la tecnología y el diseño web, así como expertos en data science, blockchain y gestión de bases de datos. Nuestro equipo multidisciplinario trabaja en estrecha colaboración para ofrecer soluciones integrales que impulsan el éxito de nuestros clientes en línea."
              }
              textColor={"text-white"}
            />
            <ButtonSimple
              text={"ver más"}
              w={"w-full"}
              bg={"bg-[#4f75ff]"}
              border={"border-[#4f75ff]"}
              hover={"bg-[#4563d0]"}
            />
          </div>
          <div className="mx-0 ">
            <div className="overflow-hidden transform-gpu">
              <div className={s.galleryvertical}>
                <div id="col" className={s.col}>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                </div>
                <div id="col" className={s.col}>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                </div>
                <div id="col" className={s.col}>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                  <div className={s.image}>
                    <img src={yeli} alt="gallery1"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Inspector>
  );
}

export default Community;
