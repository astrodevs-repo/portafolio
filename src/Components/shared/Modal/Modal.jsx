import { useState } from "react";

const Modal = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        type="button"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {title}
        </span>
      </button>
      {isOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 overflow-y-auto overflow-x-hidden  flex justify-center items-center h-screen"
          style={{ backgroundImage: "linear-gradient(264.41deg, #31add5 -7.99%, #5c76ff 78.23%)" }}
        >
          <div className="relative w-full max-w-md">
            <div className="bg-white rounded-lg shadow p-4 md:p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                  type="button"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4 md:p-5">{children}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Modal;
