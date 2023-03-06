import { useField } from "formik";
import { useEffect } from "react";
import { ToggleButtonGroup, ToggleButton, FormLabel, Box } from "@mui/material";

const ToggleField = (props) => {
  const { data, label } = props;
  const [ field, , helpers ] = useField(props);
 
  useEffect(() => {
    helpers.setValue(data[0])
  }, []);
  
  const handleChange = (e) => {
    helpers.setValue(e.target.value)
  };

  const renderToggleElements = (data) => {
    return data.map((elem, index) => {
      return <ToggleButton {...field} key={index} value={elem}>{elem}</ToggleButton>
    })
  };

  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <ToggleButtonGroup
        color="primary"
        fullWidth
        sx={{marginTop: 1, marginBottom: 3}}
        value={helpers.value}
        exclusive
        label={label}
        onChange={handleChange}
        aria-label="Platform"
        {...field}
        {...props}
      >
        {renderToggleElements(data)}
      </ToggleButtonGroup>
    </Box>
    
  )
};

export default ToggleField