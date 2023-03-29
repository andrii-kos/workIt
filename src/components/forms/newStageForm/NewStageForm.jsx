import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { Box, Button, Grid, Typography } from '@mui/material';

import InterviewForm from './interviewForm/InterviewForm';
import OfferForm from './offerForm/OfferForm';
import RejectionForm from './rejectionForm/RejectionForm';
import ApplicationForm from './applicationForm/ApplicationForm';

import StepperField from '../formFields/StepperField';

import stageFormInitialValues from './formModel/stageFormInitialValues';
import stageFormValidationSchema from './formModel/stageFormValidationSchema';

import { postNewStage, updateStage } from '..//../stageControl/StageSlice';

import IntroForm from './introForm/IntroForm';

const NewStageForm = ({stage, handleCloseDialog}) => {
  const { vacancyId } = useParams();
  const [ activeStageType, setActiveStageType ] = useState(stage && stage.stageType);
  const [ activeStep, setActiveStep ] = useState(0);
  const [ activeValidationSchema, setActiveValidationSchema ] = useState((stageFormValidationSchema[0]))
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const selectValidationSchema = (activeStageType, activeStep, stageFormValidationSchema) => {
    if (activeStep === 0) {
      setActiveValidationSchema(stageFormValidationSchema[0])
    } else {
    switch (activeStageType) {
      case 'Interview':
        setActiveValidationSchema(stageFormValidationSchema[1])
        break
      case 'Offer': 
        setActiveValidationSchema(stageFormValidationSchema[2])
        break
      case 'Application': 
        setActiveValidationSchema(stageFormValidationSchema[3])
        break
      case 'Rejection': 
        setActiveValidationSchema(stageFormValidationSchema[4])
        break
      default:
        return null
    }
    }
  };

  useEffect(() => {
    selectValidationSchema(activeStageType, activeStep, stageFormValidationSchema)
  }, [activeStageType, activeStep, activeValidationSchema])

  const steps = [ 
    'Select Stage Type And Name', 
    'Fill In Stage Data ',
    'Review And Submin'
  ];

  const renderStepContent = (activeStep, activeStageType) => {
    switch(activeStep) {
      case 0: 
        return <IntroForm stage={stage} />
      case 1: 
        switch(activeStageType) {
          case 'Interview':
            return <InterviewForm />
          case 'Offer': 
            return <OfferForm />
          case 'Application': 
            return <ApplicationForm />
          case 'Rejection': 
            return <RejectionForm />
          default: 
            return <div>Not Found</div>
          }
      default: 
        return <div>Not Found</div>
    }
  };
  const submitForm = (actions, values) => {
    const date = new Date();
    const id = stage ? stage.id : v4();
    const getFilledValues = (values) => {
      return Object.fromEntries(
        Object.entries(values).filter(([key, value]) => { 
          if (value[0] === '') {
            return false
          } else if (key === 'questionsAndAnswers' && (value[0].question === '' || value[0].answer === '')) {
            return false
          } else if (value === '') {
            return false
          } else {
            return true
          }
        })
      )
    };

    if (stage) {
      dispatch(updateStage({id: stage.id, updatedStage: {id, date, ...getFilledValues(values)}}));
      handleCloseDialog();
    } else {
      dispatch(postNewStage({id: vacancyId, newStage: {id, date, ...getFilledValues(values)}}))
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevState) => prevState - 1);
    }
  };

  const handleSubmit = (values, actions) => {
    switch(activeStep) {
      case 0:
        actions.setTouched({});
        setActiveStageType(values.stageType);
        setActiveStep(activeStep + 1);
        break
      case 1:
        submitForm(actions, values);
        navigate(-1)
        break
      default:
        setActiveStep(activeStep + 1)
        break
    }
  };

  return (
    <Box px={{xs:5, sm:5, xl: 50}} py={5}>
      <Formik 
        initialValues={stage ? stage : stageFormInitialValues}
        validationSchema={activeValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid xl={12} container>
            {!stage &&
              <Grid item xl={12}>
                <Typography variant='h3' pb={5}>New Stage Form</Typography>
              </Grid>
            }
            <Grid item xl={12}>
              {renderStepContent(activeStep, activeStageType)}
            </Grid>
            <Grid sx={{display: 'flex', gap: 3}} item mt={1} xl={12}>
              <Button 
                onClick={handleBack} 
                disabled={activeStep === 0} 
                variant="contained" 
              >
                  Back
              </Button>
              <Button 
                variant="contained" 
                type="submit"
              >
                  Next
              </Button>
            </Grid>
            
          </Grid>
        </Form>
      </Formik>
      {!stage && 
        <Grid xl={12} my={5} container>
          <Grid item xl={12}>
            <StepperField activeStep={activeStep} steps={steps}/>
          </Grid>
        </Grid>
      }
    </Box>
  )
}

export default NewStageForm