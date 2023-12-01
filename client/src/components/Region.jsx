import { City, Country, State } from "country-state-city";
import { useEffect, useState, useContext } from "react";
import RegionSelector from "./regionSelector";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataContext } from "../context/dataContext";

const Region = () => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();



  const { country, setCountry, state, setState, city, setCity } = useContext(DataContext)

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin:"2vh"
        }}
      >
        <Typography>Country</Typography>
        <RegionSelector
          data={countryData}
          selected={country}
          setSelected={setCountry}
        />
      </Box>
      {state && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin:"2vh"
          }}
        >
          <Typography>State</Typography>
          <RegionSelector
            data={stateData}
            selected={state}
            setSelected={setState}
          />
        </Box>
      )}
      {city && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin:"2vh"
          }}
        >
          <Typography>City</Typography>
          <RegionSelector
            data={cityData}
            selected={city}
            setSelected={setCity}
          />
        </Box>
      )}
    </Box>
  );
};

export default Region;
