import { motion } from "framer-motion";
import React from "react";

const LazyImage = React.memo(function ContentLazyImage({
  src,
  alt,
  style,
  className,
  width,
  height,
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      style={style}
      className={className}
      loading="lazy"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      width={width}
      height={height}
    />
  );
});

export default LazyImage;
