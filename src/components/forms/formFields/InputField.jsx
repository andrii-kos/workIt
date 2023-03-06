import { useField } from 'formik';
import { TextField, Box } from '@mui/material';

const InputField = (props) => {
  const [field, meta] = useField(props);
  const { touched, error }= meta;

  function _renderHelperText() {
    if (touched && error) {
      return error;
    }
    return ' '
  };

  return (
    <Box>
      <TextField 
        fullWidth
        size="medium"
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