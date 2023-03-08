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

const vacancyFormInitialValues = {
  [vacancyName.name]: '',
  [vacancyURL.name]: '',
  [workingModel.name]: '',
  [company.name]: '',
  [location.name]: '',
  [businessModel.name]: '',
  [salaryExpectation.name]: '',
  [hiringManager.name]: '',
  [vacancyDescription.name]: '',
  [vacancyPriority.name]: 0,
}

export default vacancyFormInitialValues