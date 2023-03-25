import { Formik, Form } from 'formik';
import vacancyFormModel from './formModel/vacancyFormModel';
import vacancyFormInitialValues from './formModel/vacancyFormInitialValues';
import vacancyFormValidationSchema from './formModel/vacancyFormValidationSchema';
import InputField from '..//formFields/InputField';
import ToggleField from '../formFields/ToggleField';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { postNewVacancy, updateVacancy } from '../../vacanciesCards/VacancySlice';
import { v4 } from 'uuid';
import { Typography, Box, Grid, Fab } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NewVacancyForm = ({initialValues, handleCloseDialog}) => {
  const navigate = useNavigate()
  const {
    formField: {
      vacancyName,
      vacancyURL,
      workingModel,
      companyName,
      location,
      businessModel,
      salaryExpectation,
      hiringManager,
      vacancyDescription,
    }
  } = vacancyFormModel;
  const temporyId = useMemo(() => v4(), [])
  const id = initialValues ? initialValues.id : temporyId;
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    const date = new Date();
    if (initialValues) {
      console.log(values)
      dispatch(updateVacancy({
        id,
        updatedVacancy: {...values, id, date}, 
      })).then(() => handleCloseDialog())
    } else {
      dispatch(postNewVacancy({
        ...values, 
        id: id,
        date
      })).then(() => navigate('/'))
      actions.resetForm()
    }
    
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
      initialValues={initialValues ? initialValues : vacancyFormInitialValues}
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
            <InputField name={companyName.name} label={companyName.label} />
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
          <Grid item xs={12} sm={6} xl={6}>
            <InputField name={vacancyDescription.name} label={vacancyDescription.label} />
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