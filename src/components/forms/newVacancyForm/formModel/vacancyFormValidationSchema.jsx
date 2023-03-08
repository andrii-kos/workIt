import * as Yup from 'yup';
import vacancyFormModel from './vacancyFormModel';

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

const vacancyFormValidationSchema = Yup.object({
    [vacancyName.name]: Yup.string()
      .min(4, vacancyName.minErrorMsg)
      .required(vacancyName.requiredErrorMsg),
    [vacancyURL.name]: Yup.string()
      .min(4, vacancyURL.minErrorMsg)
      .required(vacancyURL.requiredErrorMsg),
    [workingModel.name]: Yup.string()
      .required(workingModel.requiredErrorMsg),
    [company.name]: Yup.string()
      .min(4, company.minErrorMsg)
      .required(company.requiredErrorMsg),
    [location.name]: Yup.string()
      .min(4, location.minErrorMsg)
      .required(location.requiredErrorMsg),
    [businessModel.name]: Yup.string()
      .required(businessModel.requiredErrorMsg),
    [salaryExpectation.name]: Yup.number()
      .typeError(salaryExpectation.numberErrorMsg)
      .required(salaryExpectation.requiredErrorMsg),
    [hiringManager.name]: Yup.string()
      .min(4, hiringManager.minErrorMsg)
      .required(hiringManager.requiredErrorMsg),
    [vacancyDescription.name]: Yup.string()
      .required(vacancyDescription.requiredErrorMsg)
      .min(4, vacancyDescription.minErrorMsg),
    [vacancyPriority.name]: Yup.number()
      .required(vacancyDescription.requiredErrorMsg)
  })

  export default vacancyFormValidationSchema