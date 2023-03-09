import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from 'countries-list';

const CountryAutocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const options = Object.values(countries.countries);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(event, value) => setInputValue(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="País"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default CountryAutocomplete;