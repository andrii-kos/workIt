import './NewStageForm.scss';
import InterviewForm from './/interviewForm/InterviewForm';
import { Formik, Form } from 'formik';
import stageFormInitialValues from './/formModel/stageFormInitialValues';
import stageFormValidationSchema from './/formModel/stageFormValidationSchema';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postNewStage } from '..//../vacanciesCards/VacancySlice';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { Box, Button, Stepper, Step, StepLabel, Grid, Typography } from '@mui/material';
import IntroForm from './introForm/IntroForm';

const NewStageForm = () => {
  const { vacancyId } = useParams();
  const [ questionAnswer, setQuestionsAnswer ] = useState([]);
  const [ activeStageType, setActiveStageType ] = useState();
  const [ activeStep, setActiveStep ] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const steps = [ 
    'Select Stage Type And Name', 
    'Fill In Stage Data ',
    'Review And Submin'
  ];

  const renderStepContent = (step, props) => {
    switch(step) {
      case 0: {
        return <IntroForm />
      }
      case 1: 
        switch(activeStageType) {
          case 'Interview':
            return <InterviewForm  setQuestionsAnswer={setQuestionsAnswer} questionAnswer={questionAnswer} />
          case 'Offer': 
            return <div>Offer</div>
          case 'Application': 
            return <div>Application</div>
          default: 
            return <div>Not Found</div>
          }
      case 2: 
        return <div>Summary</div>
      default: 
        return <div>Not Found</div>
    }
  };
  const submitForm = (actions, values) => {
    const date = new Date();
    const id = v4();
    const newStage = {
      id, 
      date, 
      location: values.location,
      questionAnswer: [...questionAnswer, [values.question, values.answer]],
      notes: values.notes,
      stageType: values.StageType,
      stageName: values.stageName,
      interviewerNames: values.interviewerNames
    }
    dispatch(postNewStage({id: vacancyId, newStage: {...newStage}}))
    actions.resetForm()

  }

  const handleBack = () => activeStep > 0 ? setActiveStep((prevState) => prevState - 1) : null

  const handleSubmit = (values, actions) => {
    switch(activeStep) {
      case 0:
        setActiveStageType(values.stageType)
        setActiveStep(activeStep + 1)
        actions.setTouched({});
        break
      case 2:
        submitForm(actions, values)
        navigate('/')
        break
      default:
        setActiveStep(activeStep + 1)
        actions.setTouched({});
        break
    }
  };

  return (
    <Box p={{xs:5, sm:5, xl: 10}}>
    <Grid container justifyContent="center">
      <Grid xl={6}>
        <Typography variant='h3' pb={5}>New Stage Form</Typography>
      </Grid>
      <Grid container justifyContent="center" xl={12}>
        <Grid xl={6}>
          <Formik 
              initialValues={stageFormInitialValues}
              validationSchema={stageFormValidationSchema[activeStep]}
              onSubmit={handleSubmit}
            >
              {(props)  => (
                <Form>
                  {renderStepContent(activeStep, props)}
                  <Button onClick={handleBack} disabled={activeStep === 0} variant='contained' sx={{marginTop: 1}}>Back</Button>
                  <Button variant='contained' sx={{marginTop: 1, marginLeft: 3}} type="submit">Next</Button>
                </Form>
          )}
            </Formik>
        </Grid>
      </Grid>
      <Grid xl={12} my={5} container justifyContent="center">
        <Grid  xl={6}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}

export default NewStageForm