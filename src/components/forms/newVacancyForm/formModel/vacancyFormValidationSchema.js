import * as Yup from 'yup';
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

const vacancyFormValidationSchema = Yup.object({
    [vacancyName.name]: Yup.string()
      .min(2, vacancyName.minErrorMsg)
      .required(vacancyName.requiredErrorMsg),
    [stageType.name]: Yup.string()
      .required(stageType.requiredErrorMsg),
    [company.name]: Yup.string()
      .min(2, company.minErrorMsg)
      .required(company.requiredErrorMsg),
    [location.name]: Yup.string()
      .min(2, location.minErrorMsg)
      .required(location.requiredErrorMsg),
    [salaryExpectation.name]: Yup.number()
      .typeError(salaryExpectation.numberErrorMsg)
      .required(salaryExpectation.requiredErrorMsg),
    [recruiterName.name]: Yup.string()
      .min(2, recruiterName.minErrorMsg)
      .required(recruiterName.requiredErrorMsg),
    [recruiterLinkedIn.name]: Yup.string()
      .matches(/^[\D]/, 'Must Be Text'),
    [stageName.name]: Yup.string()
      .required(stageName.requiredErrorMsg),
    [vacancyDescription.name]: Yup.string()
      .required(vacancyDescription.requiredErrorMsg)
      .min(2, vacancyDescription.minErrorMsg),
    [coverLeterRecruiterMessage.name]: Yup.string()
      .required(coverLeterRecruiterMessage.requiredErrorMsg)
      .min(2, coverLeterRecruiterMessage.minErrorMsg),
  })

  export default vacancyFormValidationSchema