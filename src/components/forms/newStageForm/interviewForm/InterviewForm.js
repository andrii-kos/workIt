import InputField from '../../formFields/InputField';
import { FieldArray } from 'formik';
import { Box, Grid, Button } from '@mui/material';
import stageFormModel from '..//.//formModel/stageFormModel';

const InterviewForm = ({...props}, questionAnswer, setQuestionsAnswer) => {
  const {
    formField: {
      location,
      interviewerNames,
      question,
      answer,
      notes
    }
  } = stageFormModel;
  

  const handleSubmitQuestionAnswer = (e,props) => {
    e.preventDefault()
    setQuestionsAnswer(prevState => [...prevState, [props.values.question, props.values.answer]])
    props.values.question = ''
    props.values.answer = ''
    props.touched.question = '';
    props.touched.answer = '';
  };
  const questionAnswerElements = (questions) => {
    if (questions.length > 0) {
      return questions.map((elem, ind) => {
        return (
          <ul key={ind} className='form__question-answer-list'>
            <li>Question: {elem[0]}</li>
            <li>Answer: {elem[1]}</li>
          </ul>
        )
      })
    }
  }

const validateQA = (value, label, state, touched) => {
  let err;
  if (!value) {
    err = `${label} is required`
  } else if (value.length < 2  && state.length === 0) {
    err = 'Must be at least 2 characters'
  } else if (value.length < 2 && value.length > 0 && touched) {
    err = 'Must be at least 2 characters'
  }
  return err
}

  return (
      <Box>
        <Grid container spacing={3}>
          <Grid item xl={6}>
            <InputField name={location.name} label={location.label} />
          </Grid>
          <Grid item xl={6}>
            <InputField name={interviewerNames.name} label={interviewerNames.label} />
          </Grid>
          <Grid xl={12}>
            {questionAnswerElements(questionAnswer)}
          </Grid>
        </Grid>
        <FieldArray name='items'>
          {({ move, swap, push, insert, unshift, pop, form }) => {
            return (
        <Grid container spacing={3}>
           <Grid item xl={6}>
              <InputField 
                multiline
                name={question.name} 
                label={question.label} />
              </Grid>
            <Grid item xl={6}>
              <InputField 
                multiline
                name={answer.name} 
                label={answer.label} />
            </Grid>
            <Grid item xl={12}>
          <Button
            variant="outlined"
            onClick={(e) => insert()}
            className='form__new-question'>
            Add New Question
          </Button>
          </Grid>
            </Grid>)}}
          </FieldArray>
        <Grid item xl={12}>
          <InputField multiline name={notes.name} label={notes.label} />
        </Grid>
      </Box>
  )
}

export default InterviewForm