import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.css";
import Header from "../../Components/Header/Header";
const Team = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className="h-screen">
      <div className={styles.background}>
        <Parallax pages={3}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <Header />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <div>about</div>
          </ParallaxLayer>
          {/* 
          <ParallaxLayer
            sticky={{ start: 1, end: 2 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <p>image</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 2, end: 3 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <p className="bg-green-50">segunda imagen</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
              <p>information</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
              <p>Neither am I</p>
            </div>
          </ParallaxLayer> */}
        </Parallax>
      </div>
    </div>
  );
};

export default Team;
