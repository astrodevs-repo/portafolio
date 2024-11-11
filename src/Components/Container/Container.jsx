const Container = ({ children }) => {
  return (
    <section className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-32  3xl:px-[400px]  py-10 sm:py-16 h-full  gap-5 sm:gap-10">
      {children}
    </section>
  );
};

export default Container;
