import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';


export const Bottombar = () => {

  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const BottomWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
    borderBottom: '1px solid',
    borderColor: grey[300],
  }))

  return (
    <BottomWrapper>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Button variant='contained'>Add</Button>
        </Box>
    </BottomWrapper>
  )
}
