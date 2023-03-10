import vacancyFormModel from './stageFormModel';

const {
  formField: {
    stageName,
    stageType,
    interviewType,
    interviewDate,
    location,
    interviewerNames,
    questionsAndAnswers,
    notes,
    employmentType,
    jobStartDate,
    proposedCompensation,
    jobBenefits,
    jobApplicationCoverLeter,
  }
} = vacancyFormModel;

const vacancyFormInitialValues = {
  [stageName.name]: '',
  [stageType.name]: '',
  [interviewType.name]: '',
  [location.name]: '',
  [interviewerNames.name]: [''],
  [interviewDate.name]: '',
  [questionsAndAnswers.name]: [{question: '', answer: ''}],
  [notes.name]: '',
  [employmentType.name]: '',
  [jobStartDate.name]: '',
  [proposedCompensation.name]: '',
  [jobBenefits.name]: '',
  [jobApplicationCoverLeter.name]: '',
}

export default vacancyFormInitialValues