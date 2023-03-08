import { useField } from 'formik';
import { Rating, Box, Typography } from "@mui/material"

const RatingField = (props) => {
  const { label } = props;
  const [ field, meta ] = useField(props);
  const { touched, error } = meta;

  function _renderHelperText() {
    if (touched && error) {
      return error;
    }
    return ' '
  };

  return (
    <Box alignItems={'start'}>
      <Typography >{label}</Typography>
      <Rating
        {...field}
        {...props}
        value={Number(field.value)}
      />
      {touched && error 
        ? (
        <Typography component={'div'} variant="caption" color="error">
          {_renderHelperText()}
        </Typography>)
        : null
      }
    </Box>
  )
}

export default RatingField