const ButtonSimple = ({ text, textColor, border, display, func, w, loader, bg, hover, active }) => {
  return (
    <section className={`flex justify-${display} ${w}`}>
      <button
        type="button"
        style={{ color: textColor }}
        onClick={func}
        disabled={active}
        className={`${bg} py-2.5 px-20 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg border ${border} hover:${hover} focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all duration-300 ${
          active && "opacity-50 cursor-not-allowed"
        }`}
      >
        {loader ? "enviando..." : text}
      </button>
    </section>
  );
};

export default ButtonSimple;
