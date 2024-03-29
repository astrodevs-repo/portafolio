import Container from "../../Container/Container";
import styles from "./GalleryComponent.module.scss";
import PropTypes from "prop-types";

const GalleryComponent = ({ title, description }) => {
  return (
    <div>
      <Container>
        <div className="">
          <p className="text-blue-600 font-semibold text-lg">product desig</p>
          <br />
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Container>

      <div className={styles["gallery-wrap"]}>
        <div
          className={`${styles.item} ${styles["item-1"]}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80')`,
          }}
        ></div>
        <div
          className={`${styles.item} ${styles["item-2"]}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80')`,
          }}
        ></div>

        <div
          className={`${styles.item} ${styles["item-3"]}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80')`,
          }}
        >
          <a href="#objetive"></a>
        </div>
        <div
          className={`${styles.item} ${styles["item-4"]}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80')`,
          }}
        ></div>
        <div
          className={`${styles.item} ${styles["item-5"]}`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80')`,
          }}
        ></div>
      </div>
    </div>
  );
};

GalleryComponent.propTypes = {
  title: PropTypes.node,
};

export default GalleryComponent;
