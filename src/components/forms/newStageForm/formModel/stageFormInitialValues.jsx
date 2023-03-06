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
    jobPosition,
    jobDescription,
    employmentType,
    jobStartDate,
    proposedCompensation,
    jobBenefits,
    jobApplicationCoverLeter,
    companyName,

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
  [jobPosition.name]: '',
  [jobDescription.name]: '',
  [employmentType.name]: '',
  [jobStartDate.name]: '',
  [proposedCompensation.name]: '',
  [jobBenefits.name]: '',
  [jobApplicationCoverLeter.name]: '',
  [companyName.name]: '',
}

export default vacancyFormInitialValues