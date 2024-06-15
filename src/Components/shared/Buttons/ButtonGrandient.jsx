const ButtonGrandient = ({ text, id }) => {
  return (
    <a href={id}>
      {" "}
      <button
        type="button"
        className="text-gray-900  focus:ring-4 focus:outline-none bg-Chicle hover:bg-[#28ae9e] hover:text-white transition-all ease-in-out font-medium rounded-lg text-sm px-5 py-3 text-center"
      >
        {text}
      </button>
    </a>
  );
};

export default ButtonGrandient;
