import {Formik, Form } from 'formik';
import vacancyFormModel from './formModel/vacancyFormModel';
import vacancyFormInitialValues from './formModel/vacancyFormInitialValues';
import vacancyFormValidationSchema from './formModel/vacancyFormValidationSchema';
import InputField from '..//formFields/InputField';
import SelectField from '..//formFields/SelectField';
import { useDispatch, useSelector } from 'react-redux';
import { postNewVacanty } from '../../vacanciesCards/VacancySlice';
import { v4 } from 'uuid';
import { Typography, Box, Button, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NewVacancyForm = () => {
  const navigate = useNavigate()
  const stageTypes = useSelector(state => state.vacancies.stageTypes)
  const {
    formField: {
      vacancyName,
      stageType,
      company,
      location,
      salaryExpectation,
      recruiterName,
      recruiterLinkedIn,
      vacancyDescription,
      coverLeterRecruiterMessage,
      stageName
    }
  } = vacancyFormModel;

  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    const date = new Date();
    const id = v4();
    const stages = [
      {
        stageName: values.stageName, 
        id, 
        date, 
        stageType: values.stageType
      }
    ];

    dispatch(postNewVacanty({
      ...values, 
      id: v4(),
      stages: stages, 
      currentStageId: id,
      date
    })).then(() => navigate('/'))
    actions.resetForm()
  }

  return (
  <Box p={{xs:5, sm:5, xl: 10}}>
    <Formik
      initialValues={vacancyFormInitialValues}
      validationSchema={vacancyFormValidationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Typography py={2} variant="h3">New Vacancy Form</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} xl={4}>
            <InputField name={vacancyName.name} label={vacancyName.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <InputField name={company.name} label={company.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <InputField name={location.name} label={location.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <InputField name={salaryExpectation.name} label={salaryExpectation.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <InputField name={recruiterName.name} label={recruiterName.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <InputField name={recruiterLinkedIn.name} label={recruiterLinkedIn.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={8}>
            <InputField name={stageName.name} label={stageName.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SelectField data={stageTypes} name={stageType.name} label={stageType.label}/>
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <InputField multiline name={vacancyDescription.name} label={vacancyDescription.label} />
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <InputField multiline name={coverLeterRecruiterMessage.name} label={coverLeterRecruiterMessage.label} />
          </Grid>
          <Grid item xs={12} sm={12} xl={12}>
            <Button variant="contained" type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  </Box>
      
  )
}

export default NewVacancyForm