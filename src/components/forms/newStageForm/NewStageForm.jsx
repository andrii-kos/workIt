import InterviewForm from './interviewForm/InterviewForm';
import OfferForm from './offerForm/OfferForm';
import RejectionForm from './rejectionForm/RejectionForm';
import ApplicationForm from './applicationForm/ApplicationForm';
import StepperField from '../formFields/StepperField';
import { Formik, Form } from 'formik';
import stageFormInitialValues from './formModel/stageFormInitialValues';
import stageFormValidationSchema from './formModel/stageFormValidationSchema';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postNewStage } from '../../vacanciesCards/VacancySlice';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { Box, Button, Grid, Typography } from '@mui/material';
import IntroForm from './introForm/IntroForm';

const NewStageForm = () => {
  const { vacancyId } = useParams();
  const [ activeStageType, setActiveStageType ] = useState();
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
        return <IntroForm />
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
      case 2: 
        return <div>Summary</div>
      default: 
        return <div>Not Found</div>
    }
  };
  const submitForm = (actions, values) => {
    const date = new Date();
    const id = v4();
    const getNewStageObject = (activeStageType, values) => {
      switch (activeStageType) {
        case 'Interview':
          return {
            id, 
            date, 
            stageName: values.stageName,
            stageType: values.stageType,
            location: values.location,
            questionsAndAnswers: values.questionsAndAnswers,
            notes: values.notes,
            interviewType: values.interviewType,
            interviewerNames: values.interviewerNames
          }
        case 'Offer': 
          return {
            id, 
            date, 
            stageName: values.stageName,
            stageType: values.stageType,
            jobPostion: values.jobPostion,
            jobDescription: values.jobDescription,
            employmentType: values.employmentType,
            jobStartDate: values.jobStartDate,
            proposedCompensation: values.proposedCompensation,
            jobBenefits: values.jobBenefits,
            companyName: values.companyName,
          }
          case 'Application': 
            return {
              id, 
              date, 
              stageName: values.stageName,
              stageType: values.stageType,
              jobPostion: values.jobPostion,
              jobDescription: values.jobDescription,
              employmentType: values.employmentType,
              jobStartDate: values.jobStartDate,
              proposedCompensation: values.proposedCompensation,
              jobBenefits: values.jobBenefits,
              jobApplicationCoverLeter: values.jobApplicationCoverLeter,
            }
          default:
            return null
      }
    };

    dispatch(postNewStage({id: vacancyId, newStage: {...getNewStageObject(activeStageType, values)}}))
    actions.resetForm()
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevState) => prevState - 1)
    }
  };

  const handleSubmit = (values, actions) => {
    switch(activeStep) {
      case 0:
        actions.setTouched({})
        setActiveStageType(values.stageType)
        setActiveStep(activeStep + 1)
        break
      case 2:
        submitForm(actions, values)
        navigate('/')
        break
      default:
        setActiveStep(activeStep + 1)
        break
    }
  };

  return (
    <Box px={{xs:5, sm:5, xl: 50}} py={5}>
      <Formik 
        initialValues={stageFormInitialValues}
        validationSchema={activeValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid xl={12} container>
            <Grid item xl={12}>
              <Typography variant='h3' pb={5}>New Stage Form</Typography>
            </Grid>
            <Grid item xl={12}>
              {renderStepContent(activeStep, activeStageType  )}
            </Grid>
            <Grid item mt={3} xl={12}>
              <Button 
                onClick={handleBack} 
                disabled={activeStep === 0} 
                variant="contained" 
                sx={{marginTop: 1}}>
                  Back
              </Button>
              <Button 
                variant="contained" 
                sx={{marginTop: 1, marginLeft: 3}} 
                type="submit">
                  Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <Grid xl={12} my={5} container>
        <Grid item xl={12}>
          <StepperField activeStep={activeStep} steps={steps}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default NewStageForm