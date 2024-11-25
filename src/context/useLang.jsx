import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [language, setLanguage] = useState(navigator.language.split("-")[0]);

  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        const response = await fetch("/data.json");
        const allData = await response.json();

        const selectedData = allData[language] || allData["en"];

        setData(selectedData);
      } catch (error) {
        console.log("Error loading language data:", error);
        setData(null);
      }
    };

    loadLanguageData();
  }, [language]);

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};
