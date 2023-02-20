import { useField } from 'formik';
import { TextField, Box } from '@mui/material';

const InputField = (props) => {
  const [field, meta] = useField(props);
  
  function _renderHelperText() {
    const { touched, error }= meta;
    if (touched && error) {
      return error;
    }
    return ' '
  };

  return (
    <Box>
      <TextField 
        fullWidth
        type="text"
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        {...field}
        {...props}
      />
    </Box>
    
  )
}
export default InputField