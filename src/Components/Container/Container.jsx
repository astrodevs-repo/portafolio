const Container = ({ children }) => {
  return (
    <section className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-32 w-full py-16 h-full flex flex-col gap-10">
      {children}
    </section>
  );
};

export default Container;
