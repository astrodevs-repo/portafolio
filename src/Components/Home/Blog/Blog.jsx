import React from "react";
import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";
import { Link } from "react-router-dom";
import { itemsBlog } from "../../../data/Home";
import Container from "../../Container/Container";
import Title from "../../shared/Title";
import { motion } from "framer-motion";

const Blog = React.memo(function Blog({ index }) {
  return (
    <Container>
      <section id={index} className="flex flex-col gap-10 pt-20 pb-0 sm:pb-20 ">
        <Title
          text={"Blog y Artículos"}
          textColor={"text-blackCeniza"}
          extra={"font-Baskerville "}
        />
        <SubTitle
          text={"Descubre nuestra perspectiva innovadora sobre tecnología y soluciones"}
          textColor={"text-blackCeniza"}
          extra={"w-3/4"}
        />
      </section>
      <motion.div className="scroller">
        {itemsBlog.map(({ title, img, id, content }, idx) => (
          <article className="w-1/2 sm:w-1/3 mr-2" key={idx}>
            <Link to={`blog/${id}`}>
              <img
                src={img}
                alt={title}
                width={100}
                height={100}
                className="object-cover rounded-md max-w-96 w-full"
              />
            </Link>
            <section className="flex flex-col gap-2 pt-5">
              <SubTitle text={title.substring(0, 20) + "..."} extra={"font-medium text-start "} />
              <Text
                content={content.sections[0].content.substring(0, 50) + "..."}
                extra={"text-start"}
              />
            </section>
          </article>
        ))}
      </motion.div>
    </Container>
  );
});

export default Blog;
