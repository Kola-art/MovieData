import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};


export function CustomMultipleSelect({genres,genreValue, onChange}) {
  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth:'200px', maxWidth:'350px' }}>
          <InputLabel id="demo-multiple-checkbox-label">Choose Genre</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={genreValue}
            onChange={onChange}
            input={<OutlinedInput label="Choose Genre" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.name}>
                <Checkbox checked={genreValue.indexOf(genre.name) > -1} />
                <ListItemText primary={genre.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

CustomMultipleSelect.propTypes = {
  genres: PropTypes.array,
  genreValue: PropTypes.array,
  onChange: PropTypes.func,
};
   