import s from "./header.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  useGSAP(() => {
    gsap.fromTo(
      "main #img",
      { opacity: 1 },
      {
        opacity: 0,
        ease: "power4.in",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <section className="h-screen bg-red-500"></section>
      <section className="h-screen bg-white"></section>

      <section id="home" className={`${s.header__container} main`}>
        <div id="title" className={s.header__title}>
          {" "}
          <h1>
            We are <strong>Neurons</strong>
          </h1>
        </div>
        <h4 className={s.header__subtitle}>
          ¡Bienvenidos a Neurons ! No somos solo una agencia de desarrollo web; somos una firma
          integral de soluciones digitales...
        </h4>
        <div className={s.header__buttons}>
          <button className="">
            read more
            <FaArrowRight
              className={s.hoverimg}
              style={{ position: "absolute", right: "0.3vmax" }}
            />
          </button>
          <button>
            <FaArrowRight
              className={s.hoverimg}
              style={{ position: "absolute", right: "0.3vmax" }}
            />
            Nuestro trabajo
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
