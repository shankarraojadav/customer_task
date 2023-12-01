import { createContext, useState } from "react";
import { Country } from "country-state-city";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const countryData = Country.getAllCountries();
  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  console.log("countr", city);

  return (
    <DataContext.Provider
      value={{ country, setCountry, state, setState, city, setCity, selectedLanguage, setSelectedLanguage, openEditModal, setOpenEditModal }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
