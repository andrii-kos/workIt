import vacancyFormModel from './vacancyFormModel';

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

const vacancyFormInitialValues = {
  [vacancyName.name]: '',
  [vacancyURL.name]: '',
  [workingModel.name]: '',
  [companyName.name]: '',
  [location.name]: '',
  [businessModel.name]: '',
  [salaryExpectation.name]: '',
  [hiringManager.name]: '',
  [vacancyDescription.name]: '',
}

export default vacancyFormInitialValues