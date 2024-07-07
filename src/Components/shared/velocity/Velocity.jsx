import { motion } from "framer-motion";
import sql from "/public/OurSkills/sql.svg";
import boostrap from "/public/OurSkills/Boopstrap.svg";
import node from "/public/OurSkills/node.svg";
import angular from "/public/OurSkills/angular.svg";
import html from "/public/OurSkills/html.svg";
import java from "/public/OurSkills/java.svg";
import js from "/public/OurSkills/js.svg";
import ts from "/public/OurSkills/ts.svg";
import mongodb from "/public/OurSkills/mongodb.svg";
import mysql from "/public/OurSkills/mysql.svg";
import pb from "/public/OurSkills/pb.svg";
import php from "/public/OurSkills/php.svg";
import python from "/public/OurSkills/python.svg";
import r from "/public/OurSkills/r.svg";

const MovingText = ({ left, right }) => {
  return (
    <section className={`relative h-fit py-5 overflow-hidden w-full px-20 `}>
      <motion.div
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: 99999,
          fontSize: "24px",
          color: "black",
          fontWeight: "bold",
        }}
        initial={{ x: right }}
        animate={{ x: left }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-[100%] flex gap-20"
      >
        {items.map((item, index) => (
          <div className="min-w-fit flex items-center gap-5" key={index}>
            <img src={item.svg} alt="" className="w-20 " />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
const items = [
  {
    svg: sql,
  },
  {
    svg: boostrap,
  },
  {
    svg: node,
  },
  {
    svg: angular,
  },
  {
    svg: html,
  },
  {
    svg: java,
  },
  {
    svg: js,
  },
  {
    svg: ts,
  },
  {
    svg: mongodb,
  },
  {
    svg: mysql,
  },
  {
    svg: pb,
  },
  {
    svg: php,
  },
  {
    svg: python,
  },
  {
    svg: r,
  },
  {
    svg: sql,
  },
  {
    svg: boostrap,
  },
  {
    svg: node,
  },
  {
    svg: angular,
  },
  {
    svg: html,
  },
  {
    svg: java,
  },
  {
    svg: js,
  },
  {
    svg: ts,
  },
  {
    svg: mongodb,
  },
  {
    svg: mysql,
  },
  {
    svg: pb,
  },
  {
    svg: php,
  },
  {
    svg: python,
  },
  {
    svg: r,
  },
  {
    svg: sql,
  },
  {
    svg: boostrap,
  },
  {
    svg: node,
  },
  {
    svg: angular,
  },
  {
    svg: html,
  },
  {
    svg: java,
  },
  {
    svg: js,
  },
  {
    svg: ts,
  },
  {
    svg: mongodb,
  },
  {
    svg: mysql,
  },
  {
    svg: pb,
  },
  {
    svg: php,
  },
  {
    svg: python,
  },
  {
    svg: r,
  },
  {
    svg: sql,
  },
  {
    svg: boostrap,
  },
  {
    svg: node,
  },
  {
    svg: angular,
  },
  {
    svg: html,
  },
  {
    svg: java,
  },
  {
    svg: js,
  },
  {
    svg: ts,
  },
  {
    svg: mongodb,
  },
  {
    svg: mysql,
  },
  {
    svg: pb,
  },
  {
    svg: php,
  },
  {
    svg: python,
  },
  {
    svg: r,
  },
  {
    svg: sql,
  },
  {
    svg: boostrap,
  },
  {
    svg: node,
  },
  {
    svg: angular,
  },
  {
    svg: html,
  },
  {
    svg: java,
  },
  {
    svg: js,
  },
  {
    svg: ts,
  },
  {
    svg: mongodb,
  },
  {
    svg: mysql,
  },
  {
    svg: pb,
  },
  {
    svg: php,
  },
  {
    svg: python,
  },
  {
    svg: r,
  },
  {
    svg: sql,
  },
  {
    svg: boostrap,
  },
  {
    svg: node,
  },
  {
    svg: angular,
  },
  {
    svg: html,
  },
  {
    svg: java,
  },
  {
    svg: js,
  },
  {
    svg: ts,
  },
  {
    svg: mongodb,
  },
  {
    svg: mysql,
  },
  {
    svg: pb,
  },
  {
    svg: php,
  },
  {
    svg: python,
  },
  {
    svg: r,
  },
];

export default MovingText;
