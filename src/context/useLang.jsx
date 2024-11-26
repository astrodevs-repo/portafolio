import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [language, setLanguage] = useState(navigator.language.split("-")[0]);

  useEffect(() => {
    const loadLanguageData = async () => {
      try {
        console.log("Loading language data...");
        const response = await fetch("/data.json");
        const allData = await response.json(); // Ensure proper use of `json()`

        console.log("Language data fetched:", allData); // Log the entire fetched data

        // If `allData[language]` exists, update the state
        if (allData[language]) {
          setData(allData[language]);
          console.log("Selected language data:", allData[language]);
        } else {
          // Default to English if the specific language data is missing
          setData(allData["en"]);
          console.log("Language not found, defaulting to English");
        }
      } catch (error) {
        console.log("Error loading language data:", error);
        setData(null); // You might want to set data to null in case of an error
      }
    };

    loadLanguageData();
  }, [language]);

  // Separate useEffect to watch `data` and log after it has updated
  useEffect(() => {
    console.log("Data has been updated:", data);
  }, [data]);

  const changeLanguage = async (newLanguage) => {
    try {
      console.log(newLanguage);
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
