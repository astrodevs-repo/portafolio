import { useEffect, useState } from "react";
import Container from "../../Container/Container";
import styles from "./GalleryComponent.module.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const GalleryComponent = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState([
    {
      name: "item-1",
      url: "https://www.ebizneeds.com/blog/wp-content/uploads/2022/11/Frame-206.jpg",
    },
    {
      name: "item-2",
      url: "https://preview.redd.it/20-prompts-for-landing-pages-and-ui-ux-design-v0-ai7ad1oeutta1.png?width=636&format=png&auto=webp&s=baea36a17742c21387e47033c889ef8e316b5649",
    },
    {
      name: "item-3",
      url: "https://cdn.dribbble.com/users/2962548/screenshots/14043254/media/8e911e30c479cdda2bb75502cadf882d.png?resize=400x0",
    },
    {
      name: "item-4",
      url: "https://www.ebizneeds.com/blog/wp-content/uploads/2022/11/Frame-206.jpg",
    },
    {
      name: "item-5",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcoilMloAzXz2_iWW2e5BhTDHCn3QIn0b7GK-fWXB9FG_pRRJElTl_7xP-jk-dezPqH8&usqp=CAU",
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 5000);
    return () => {
      setIsOpen(!isOpen);
    };
  }, []);
  return (
    <div>
      <Container>
        <div className="px-[100px]">
          <motion.div animate={{ x: -100 }} transition={{ ease: "easeOut", duration: 2 }}>
            <p className="text-blue-600 font-semibold text-lg">product desig</p>
          </motion.div>
          <br />
          <motion.div animate={{ x: -100 }} transition={{ ease: "easeOut", duration: 2 }}>
            <h1>{title}</h1>
          </motion.div>
          <motion.div animate={{ x: -100 }} transition={{ ease: "easeOut", duration: 2 }}>
            <p>{description}</p>
          </motion.div>
        </div>
      </Container>
      <div className="h-20"></div>
      <motion.div
        animate={{ y: -50 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={styles["gallery-wrap"]}
      >
        {photos.map(({ name, url }, index) => (
          <div
            key={index}
            className={`${styles.item} ${styles[`${name}`]}`}
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};

GalleryComponent.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
};

export default GalleryComponent;
