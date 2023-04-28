import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({data, setData}) => {
  const handleChange = (event) => {
    setData({...data, loanTerm: event.target.value});
  }
  
  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loanTerm}
          label="Tenure"
          onChange={handleChange}
        >
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={25}>Twenty five</MenuItem>
        </Select>
      </FormControl>
  )
}

export default TenureSelect
