import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../../context/useLang";
const LangDropdown = () => {
  const { language, changeLanguage } = useLang(); // Destructure the context value

  return (
    <div className="flex justify-center px-3">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <button
          type="button"
          className="inline-flex items-center font-medium justify-center gap-2 px-4 py-2 text-sm text-white dark:text-white rounded-lg cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <img
            src={`/navbar/${language}.svg`}
            alt="language"
            className="max-w-5 object-contain min-h-5"
          />
          {language === "en" ? "English" : language === "es" ? "Español" : "Language"}
        </button>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-BlueNeurons transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-16 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  const { changeLanguage } = useLang();

  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className="inline-flex items-center w-full font-medium justify-start gap-2 px-4 py-5 text-sm text-blackCeniza dark:text-white rounded-xs cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <img src="/navbar/en.svg" alt="English" className="max-w-5 " />
        English
      </button>
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        className="inline-flex items-center w-full font-medium justify-start gap-2 px-4 py-5 text-sm text-blackCeniza dark:text-white rounded-xs cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <img src="/navbar/es.svg" alt="Spanish" className="max-w-5 " />
        Español
      </button>
    </div>
  );
};

export default LangDropdown;
