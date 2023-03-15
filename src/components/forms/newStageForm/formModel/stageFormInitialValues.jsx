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
    jobApplicationNotes,
    rejectionPersonName,
    rejectionReason,
    rejectionNotes,
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
  [jobApplicationNotes.name]: '',
  [rejectionPersonName.name]: '',
  [rejectionReason.name]: '',
  [rejectionNotes.name]: '',
}

export default vacancyFormInitialValues