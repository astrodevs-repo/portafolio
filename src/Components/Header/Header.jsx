import s from "./header.module.scss";

function Header() {
  return (
    <main id="main" className={`${s.header__container} main`}>
      <div id="title" className={s.header__title}>
        {" "}
        <h1>
          Nosotros somos <strong>Neurons</strong>
          <br />
        </h1>
      </div>
      <h4 className={s.header__subtitle}>digital assets, real world value</h4>
      <div className={s.header__buttons}>
        <button className="">
          Explore gold
          <img
            className={s.hoverimg}
            style={{ position: "absolute", right: "0.3vmax" }}
            src="src/assets/buttons/arrow.svg"
            alt=""
          />
        </button>
        <button>
          <img
            style={{ position: "absolute", left: 0 }}
            src="/assets/buttons/buttonexplore.png"
            alt=""
          />
          Explore Co-Owned Art
          <img
            className={s.hoverimg}
            style={{ position: "absolute", right: "0.3vmax" }}
            src="/assets/buttons/arrow.svg"
            alt=""
          />
        </button>
      </div>
      <img
        data-speed="0.8"
        id="img"
        className={s.vidrio}
        src=" /assets/vidrio6.png"
        alt="imgvidrio"
      />
      <img
        data-speed="1.15"
        id="img"
        className={s.vidrio2}
        src="/assets/topleft.png"
        alt="imgvidrio"
      />
      <img
        data-speed="1.5"
        id="img"
        className={s.vidrio3}
        src="/assets/vidrio5.png"
        alt="imgvidrio"
      />
      <img
        data-speed="1.6"
        id="img"
        className={s.vidrio4}
        src="/assets/vidrio4.png"
        alt="imgvidrio"
      />
    </main>
  );
}

export default Header;
