const Container = ({ children }) => {
  return (
    <section className="px-5 sm:px-5 md:px-10 lg:px-20 xl:px-40 w-full py-16 h-full flex flex-col gap-10">
      {children}
    </section>
  );
};

export default Container;
