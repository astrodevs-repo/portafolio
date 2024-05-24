const Container = ({ children }) => {
  return (
    <section className="px-5 sm:px-5 md:px-10 lg:px-40 xl:px-60 w-full py-16 h-full flex flex-col gap-10">
      {children}
    </section>
  );
};

export default Container;
