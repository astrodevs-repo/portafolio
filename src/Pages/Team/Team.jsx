import Container from "../../Components/Container/Container";

import style from "./style.module.scss";

import { IoMdClose } from "react-icons/io";
import GalleryComponent from "../../Components/shared/gallery/GalleryProject";
import { useState } from "react";

const Team = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section>
      {/* <div
        id="drawer-swipe"
        className={`fixed h-screen z-40 w-full overflow-y-auto bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800 transition-transform bottom-0 left-0 right-0 drawer ${
          style.drawer
        } ${isOpen ? style.open : style.closed}`}
        tabIndex="-1"
        aria-labelledby="drawer-swipe-label"
      > */}
      {/* <div
          onClick={handleClose}
          className="w-full flex justify-end py-10 px-10 cursor-pointer hover:text-red-500"
        >
          <IoMdClose />
        </div> */}
      <GalleryComponent title={"nombre"} description={"description"} />
      <Container>
        {" "}
        <div className="grid grid-cols-1 gap-4 pb-[500px]  ">
          <div className={` flex flex-col justify-start gap-10 pt-40`}>
            <div className="grid grid-cols-2 gap-5">
              <div className="text-gray-400">
                client <br />
                <span className="font-bold text-black">{"nombre"} </span>
              </div>
              {/* {Object.entries(client).map(([property, value], index) => (
                  <div key={index} className="text-gray-400">
                    {property} <br />
                    <span className="font-bold text-black">{value} </span>
                  </div>
                ))} */}
            </div>
            <div>
              <h1 className="text-2xl m-0">Tools & Technologies</h1>

              <div className="flex flex-wrap gap-2">
                {" "}
                {/* {Object.entries(tools).map(([property], index) => (
                    <div key={index}>
                      <span className="font-normal">{property} </span>,
                    </div>
                  ))} */}
              </div>
            </div>
          </div>

          <div className={` flex flex-col gap-5`}>
            {/* {Object.entries(project).map(([property, value], index) => (
                <section id={property} key={index}>
                  <div className={` ${style.text}`}>
                    <h1 className="m-0 text-lg py-5">{property}</h1>
                    <p>{value}</p>
                  </div>
                </section>
              ))} */}
          </div>
        </div>
      </Container>
      {/* </div> */}
    </section>
  );
};

export default Team;
