import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  Check as CheckIcon,
  ExpandMore as ChevronUpDownIcon,
} from "@mui/icons-material";

function RegionSelector({ data, selected, setSelected }) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        value={selected}
        onChange={(event, newValue) => setSelected(newValue)}
        options={data || []}  // Ensure that data is defined or provide an empty array
        getOptionLabel={(person) => person.name}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            onChange={(event) => setQuery(event.target.value)}
          />
        )}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Box display="flex" alignItems="center">
              <span
                style={{
                  block: "truncate",
                  fontWeight: selected ? "bold" : "normal",
                }}
              >
                {option.name}
              </span>
              {selected && (
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    left: 0,
                    pl: 1,
                    color: selected ? "white" : "teal",
                  }}
                >
                  <CheckIcon />
                </Box>
              )}
            </Box>
          </li>
        )}
      />
    </div>
  );
}

export default RegionSelector;
