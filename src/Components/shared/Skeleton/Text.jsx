import React from "react";

const SkeletonText = React.memo(function SkeletonText({ width, height, extra, row }) {
  if (row) {
    return (
      <section className="w-full flex flex-col gap-2">
        {Array.from({ length: row }).map((_, index) => (
          <section
            key={index}
            className={`h-5 bg-BlueNeurons/60 dark:bg-gray-700 w-48 ${width} ${height} ${extra} rounded-lg`}
          ></section>
        ))}
      </section>
    );
  }

  return (
    <section
      className={`h-5 bg-BlueNeurons/60  dark:bg-gray-700 w-48 ${width} ${height}  ${extra} rounded-lg`}
    ></section>
  );
});

export default SkeletonText;
