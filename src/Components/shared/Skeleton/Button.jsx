// SkeletonButton.js
import React from "react";

const SkeletonButton = React.memo(function SkeletonButton({
  width = "w-[250px]",
  height = "h-14",
}) {
  return (
    <article
      className={`animate-pulse ${width} ${height} bg-BlueNeurons/50 dark:bg-dark-BlueNeurons rounded-lg flex justify-center items-center`}
    >
      <section className="h-5 bg-BlueNeurons/60  dark:bg-gray-700 w-48"></section>
    </article>
  );
});

export default SkeletonButton;
