import { Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect } from "react";
import { useField } from "formik";

const DatePickerField = (props) => {
  const [ field, meta, helpers ] = useField(props);

  useEffect(() => {
    helpers.setValue(dayjs())
  }, []);
  
  const handleChange = (newValue) => {
    helpers.setValue(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          inputFormat="DD-MM-YYYY"
          value={field.value}
          onChange={(e) => handleChange(e)}
          renderInput={(params) => <TextField {...field} {...props} fullWidth {...params} />}
          
        />
      </Stack>
    </LocalizationProvider>
  )
}

export default DatePickerField