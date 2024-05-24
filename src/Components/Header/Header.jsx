import s from "./header.module.scss";

function Header() {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutus");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main id="main" className={`${s.header__container} main`}>
      <div id="title" className={s.header__title}>
        {" "}
        <p className="font-Lalezar font-extrabold text-5xl">
          NOSOTROS SOMOS <strong className="text-5xl font-extrabold font-Lalezar">NEURONS</strong>
          <br />
        </p>
      </div>
      <h4 className={s.header__subtitle}>Una firma integral de soluciones digitales.</h4>
      <div className={s.header__buttons}>
        <button className="">
          Nuestros Proyectos
          <img
            className={s.hoverimg}
            style={{ position: "absolute", right: "0.3vmax" }}
            src="src/assets/buttons/arrow.svg"
            alt=""
          />
        </button>
        <button onClick={scrollToAboutUs}>
          Quienes Somos
          <img
            className={s.hoverimg}
            style={{ position: "absolute", right: "0.3vmax" }}
            src="src/assets/buttons/arrow.svg"
            alt=""
          />
        </button>
      </div>
    </main>
  );
}

export default Header;
