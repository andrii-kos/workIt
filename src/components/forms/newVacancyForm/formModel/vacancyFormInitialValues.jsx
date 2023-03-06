import vacancyFormModel from './vacancyFormModel';

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
    stageName,
  }
} = vacancyFormModel;

const vacancyFormInitialValues = {
  [vacancyName.name]: '',
  [stageType.name]: '',
  [company.name]: '',
  [location.name]: '',
  [salaryExpectation.name]: '',
  [recruiterName.name]: '',
  [recruiterLinkedIn.name]: '',
  [vacancyDescription.name]: '',
  [coverLeterRecruiterMessage.name]: '',
  [stageName.name]: ''
}

export default vacancyFormInitialValues