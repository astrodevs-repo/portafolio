import { motion } from "framer-motion";

const TextEffect = () => {
  const firstPhrase = "Una firma integral de ";
  const secondPhrase = "soluciones digitales.";

  const calculateTotalDelay = (phrase) => {
    return phrase.length * 0.05;
  };

  const firstPhraseDelay = calculateTotalDelay(firstPhrase);

  return (
    <section className="flex flex-wrap justify-center px-12 sm:px-0 text-blackCeniza dark:text-white">
      {[firstPhrase].map((phrase, phraseIndex) => (
        <div key={phraseIndex} className="flex flex-wrap justify-center">
          {phrase.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-2xl sm:text-3xl font-Baskerville text-center"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      ))}
      {[secondPhrase].map((phrase, phraseIndex) => (
        <div key={phraseIndex} className="flex flex-wrap justify-center">
          {phrase.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: firstPhraseDelay + index * 0.05 }}
              className="text-2xl sm:text-3xl font-Baskerville  text-center"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TextEffect;
