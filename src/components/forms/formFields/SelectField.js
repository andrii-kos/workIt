import { useField } from 'formik';
import { 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  Radio, 
  FormControlLabel, 
  FormHelperText,
  Box
} from '@mui/material';

const SelectField = (props) => {
  const { label, data } = props;
  const [ field, meta ] = useField(props);
  const { touched, error }= meta;

  const _renderHelperText = () => {
    if (touched && error) {
      return error;
    }
    return ' '
  };

  const radioElementsRender = (data) => {
    return data.map((elem, indx) => {
      return (
        <FormControlLabel
          key={indx}
          {...field}
          {...props} 
          value={elem}
          control={<Radio />} 
          label={elem} />
      )
    })
  };

  return (
    <Box>
      <FormControl error={meta.touched && meta.error && true}>
        <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          value={field.value}
          row 
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
        >
          {radioElementsRender(data)}
        </RadioGroup>
          <FormHelperText>{_renderHelperText()}</FormHelperText>
      </FormControl>
    </Box>
    
  )
}
export default SelectField