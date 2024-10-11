// SkeletonButton.js
import React from "react";

const SkeletonText = React.memo(function SkeletonText({ width, height }) {
  return (
    <section
      className={`h-5 bg-BlueNeurons/60  dark:bg-gray-700 w-48 ${width} ${height}`}
    ></section>
  );
});

export default SkeletonText;
