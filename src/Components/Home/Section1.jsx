import "./SectionScroll.scss";
import Carousel from "../shared/ScrollText";

const SectionScroll = ({ data }) => {
  return (
    <section
      id={data.href}
      className="h-screen sm:h-full md:h-[600px] lg:h-[700px] flex  w-full justify-center items-center px-1 "
      style={{ backgroundColor: data.Bg, textColor: data.textColor }}
    >
      <div className="w-[20%] h-full relative hidden sm:flex md:flex lg:flex ">
        <h1 className="text-white sm:text-[60px] md:text-[80px] lg:text-[100px] opacity-20 mb-10 w-full  text-start px-10 -rotate-90 bottom-10 absolute tracking-widest ">
          {data.header}
        </h1>
      </div>
      <div className="w-[80%]  ">
        <h1 className="text-white flex sm:flex md:hidden lg:hidden opacity-50">{data.header}</h1>
        <Carousel items={data} />
      </div>
    </section>
  );
};

export default SectionScroll;
