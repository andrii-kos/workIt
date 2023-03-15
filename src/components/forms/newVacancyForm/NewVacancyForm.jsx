import { Formik, Form } from 'formik';
import NewStageForm from '../newStageForm/NewStageForm';
import vacancyFormModel from './formModel/vacancyFormModel';
import vacancyFormInitialValues from './formModel/vacancyFormInitialValues';
import vacancyFormValidationSchema from './formModel/vacancyFormValidationSchema';
import InputField from '..//formFields/InputField';
import ToggleField from '../formFields/ToggleField';
import { SliderField } from '..//formFields/SliderField';
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewVacanty } from '../../vacanciesCards/VacancySlice';
import { v4 } from 'uuid';
import { Typography, Box, Grid, Fab } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const NewVacancyForm = () => {
  const navigate = useNavigate()
  // const stageTypes = useSelector(state => state.vacancies.stageTypes)
  const {
    formField: {
      vacancyName,
      vacancyURL,
      workingModel,
      company,
      location,
      businessModel,
      salaryExpectation,
      hiringManager,
      vacancyDescription,
      vacancyPriority,
    }
  } = vacancyFormModel;
  const id = useMemo(() => v4(), []);
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    const date = new Date();
    // const stages = [
    //   {
    //     stageName: values.stageName, 
    //     id, 
    //     date, 
    //     stageType: values.stageType
    //   }
    // ];

    dispatch(postNewVacanty({
      ...values, 
      id: id,
      stages: [], 
      //currentStageId: id,
      date
    })).then(() => navigate('/'))
    actions.resetForm()
  };

  const workingModelItems = [
    'On-site',
    'Remote',
    'Hybrid'
  ];

  const businessModelItems = [
    'Outsourcing',
    'Outstaffing',
    'Product'
  ];

  return (
  <Box mx={{xs:5, sm:5, xl: 30}}>
    <Formik
      initialValues={vacancyFormInitialValues}
      validationSchema={vacancyFormValidationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Typography py={5} variant="h3">New Vacancy Form</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={vacancyName.name} label={vacancyName.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={vacancyURL.name} label={vacancyURL.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={company.name} label={company.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={location.name} label={location.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <ToggleField data={workingModelItems} name={workingModel.name} label={workingModel.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <ToggleField data={businessModelItems} name={businessModel.name} label={businessModel.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={salaryExpectation.name} label={salaryExpectation.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={hiringManager.name} label={hiringManager.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <InputField name={vacancyDescription.name} label={vacancyDescription.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={3}>
            <SliderField name={vacancyPriority.name} label={vacancyPriority.label} />
          </Grid>
          <Grid item xs={12} sm={12} xl={12}>
            <Fab
            sx={{marginRight: 2}}
              variant="extended" 
              size="large" 
              color="primary" 
              type="submit"
            >
              Submit
            </Fab>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  </Box>
  )
}

export default NewVacancyForm