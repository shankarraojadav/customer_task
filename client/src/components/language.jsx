import { useState } from "react";
import Select from "react-select";
import iso6391 from "iso-639-1";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

const LanguageSelector = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(DataContext);

  const languageOptions = iso6391.getAllNames().map((name, index) => ({
    value: iso6391.getCode(name),
    label: name,
    key: index,
  }));

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  return (
    <Select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      options={languageOptions}
      placeholder="Select a language"
    />
  );
};

export default LanguageSelector;
