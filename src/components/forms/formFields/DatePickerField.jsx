import { Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useField } from "formik";

const DatePickerField = (props) => {
  const { label } = props;
  const [ field, meta, helpers ] = useField(props);
  const { touched, error } = meta;
  
  const handleChange = (newValue) => {
    helpers.setValue(newValue)
  };

  function _renderHelperText() {
    if (touched && error) {
      return error;
    }
    return ' '
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          value={field.value}
          label={label}
          onError={meta.touched && meta.error && true}
          onChange={(e) => handleChange(e)}
          renderInput={(params) => 
            <TextField 
              {...field} 
              {...props} 
              {...params} 
              error={meta.touched && meta.error && true} 
              helperText={_renderHelperText()} 
              fullWidth  
            />}
          
        />
      </Stack>
    </LocalizationProvider>
  )
}

export default DatePickerField