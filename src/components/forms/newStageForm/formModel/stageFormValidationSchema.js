import * as Yup from 'yup';
import vacancyFormModel from './stageFormModel';

const {
  formField: {
    stageName,
    stageType,
    location,
    interviewerNames,
    question,
    answer,
    notes
  }
} = vacancyFormModel;

const vacancyFormValidationSchema = [
  Yup.object().shape({
    [stageName.name]: Yup.string()
      .min(2, stageName.minErrorMsg)
      .required(stageName.requiredErrorMsg),
    [stageType.name]: Yup.string()
      .required(stageType.requiredErrorMsg)}),
  Yup.object().shape({
    [location.name]: Yup.string()
      .min(2, location.minErrorMsg)
      .required(location.requiredErrorMsg),
    [interviewerNames.name]: Yup.string()
      .min(2, interviewerNames.minErrorMsg)
      .required(interviewerNames.requiredErrorMsg),
    [question.name]: Yup.string()
      .required(question.requiredErrorMsg)
      .min(2, question.minErrorMsg),
    [answer.name]: Yup.string()
      .required(answer.requiredErrorMsg)
      .min(2, answer.minErrorMsg),
    [notes.name]: Yup.string()
  })
  ]
  

  export default vacancyFormValidationSchema