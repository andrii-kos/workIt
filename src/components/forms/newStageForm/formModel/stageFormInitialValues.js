import vacancyFormModel from './stageFormModel';

const {
  formField: {
    stageName,
    stageType,
    location,
    interviewerNames,
    question,
    answer,
    notes,

  }
} = vacancyFormModel;

const vacancyFormInitialValues = {
  [stageName.name]: '',
  [stageType.name]: '',
  [location.name]: '',
  [interviewerNames.name]: '',
  [question.name]: '',
  [answer.name]: '',
  [notes.name]: ''
}

export default vacancyFormInitialValues