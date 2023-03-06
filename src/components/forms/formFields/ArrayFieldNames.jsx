import InputField from "./InputField";
import AddIcon from "@mui/icons-material/Add";
import { Box, Grid, IconButton, Stack, Chip } from '@mui/material';
import { FieldArray } from "formik";

const ArrayFieldNames = (props) => {
  const { interviewerNames } = props;

  const handleDeleteName = (e, remove, index, names) => {
    if (names.length > 1) {
      remove(index)
    }
  };

  const  handleAddName = (e, push, form) => {
    if (form.errors.hasOwnProperty('interviewerNames')) {
      form.setFieldTouched(`interviewerNames[${form.values.interviewerNames.length - 1}]`, true)
      return null
    } else {
      push('')
    }
  };

  const renderInterviewerNames = (names, remove) => {
    return (
      <Stack direction="row" spacing={1}>
        {names.map((name, index) => {
          if (index === names.length - 1) {
            return null
          } else {
            return (
              <Chip 
                variant="outlined"
                key={index} 
                onDelete={(e) => handleDeleteName(e, remove, index, names)} label={name}
              />
            )
          }
        }
        )}
      </Stack>
    )
  };

  return (
    <FieldArray 
      name="interviewerNames"
      render={({form: {values: {interviewerNames: names}}, form, push, remove}) => (
      <>
        <Grid mt={2}>
          {renderInterviewerNames(names, remove, names)}
        </Grid>
        {names.map((interviewerName, index) => (
          <Box mt={1} key={index}>
            {(index === names.length - 1 || names.length === 0) && (
            <Grid  container xl={12} spacing={2}>
              <Grid item xl={11}>
                <InputField 
                  name={`interviewerNames[${index}]`} 
                  label={interviewerNames.label} 
                />
              </Grid>
              <Grid mt={1} item xl={1}>
                <IconButton 
                  aria-label="Add new Name"
                  type="button" 
                  onClick={(e) => handleAddName(e, push, form)}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
            )}
          </Box>
        ))}
      </>
      )}
    />
  )
}

export default ArrayFieldNames