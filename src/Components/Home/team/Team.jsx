/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useGSAP } from "@gsap/react";
import s from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import yeli from "/public/team/yeli.jpg";

gsap.registerPlugin(ScrollTrigger);

function Community() {
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
          let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

          gsap.to(item, {
            y: direction + Number(columnHeight / 2),
            duration: 40, // Aumenta la duración para reducir la velocidad de la animación
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
    <>
      <div ref={container} className={s.community__container}>
        <div className={s.community__left}>
          <div className={s.galleryverticalsection}>
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
                  <img src="/assets/gallery9.jpg" alt="gallery1"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.opacityeffect}></div>
        <div className={s.community__right}>
          <h2>
            Conoce a nuestro <br></br>
            <span>team</span>
          </h2>
          <p className={s.community__text}>Neurons cuenta con un equipo</p>
          <button>ver más</button>
        </div>
      </div>
    </>
  );
}

export default Community;
