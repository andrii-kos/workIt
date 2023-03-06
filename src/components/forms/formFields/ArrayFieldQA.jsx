import { FieldArray } from "formik";
import InputField from "./InputField";
import { Grid, Button, IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ArrayFieldQA = () => {
  return (
    <FieldArray 
      name="questionsAndAnswers"
      render={({form: {values: {questionsAndAnswers}}, push, remove}) => (
        <>
          {questionsAndAnswers.map((questionAndAnswer, index) => (
            <Grid mt={.5} container xl={12}  key={index} spacing={2}>
              <Grid item xs={12} sm={12} xl={6}>
                <InputField 
                  multiline
                  name={`questionsAndAnswers[${index}].question`}
                  label="Question"
                />
              </Grid>
              <Grid xs={11} sm={11} item xl={5}>
                <InputField 
                  multiline
                  name={`questionsAndAnswers[${index}].answer`} 
                  label="Answer"
                />
              </Grid>
              <Grid sx={{padding: '0'}} mt={1} item xl={1}>
                <IconButton type="button" onClick={() => remove(index)}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Grid mt={1} xs={12} sm={12} item xl={12}>
            <Button
              type="button"
              variant="outlined"
              onClick={() => push({question: '', answer: ''})}
            >
              Add New Question
            </Button>
          </Grid>
        </>
      )}
    />
  )
}

export default ArrayFieldQA