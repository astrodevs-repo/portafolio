import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [language, setLanguage] = useState(navigator.language.split("-")[0]);

  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        const response = await fetch("/data.json");
        const allData = await response.json();
        if (allData[language]) {
          setData(allData[language]);
        } else {
          setData(allData["en"]);
        }
      } catch (error) {
        console.log("Error loading language data:", error);
        setData(null);
      }
    };

    loadLanguageData();
  }, [language]);
  useEffect(() => {
    console.log(language);
  }, [language]);

  const changeLanguage = async (newLanguage) => {
    try {
      setLanguage(newLanguage);
      const response = await fetch("/data.json");
      const allData = await response.json();
      const selectedData = allData[newLanguage];
      setData(selectedData);
    } catch (error) {
      console.log("Error loading language data:", error);
    }
  };

  return (
    <LangContext.Provider value={{ data, language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};
