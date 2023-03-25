const vacancyFormModel =  {
  formId: 'vacancyForm',
  formField: {
    vacancyName: {
      name: 'vacancyName',
      label: 'Vacancy Name',
      requiredErrorMsg: 'Vacancy Name is Required',
      minErrorMsg: 'Must be at least 4 characters'
    },
    vacancyURL: {
      name: 'vacancyURL',
      label: 'Vacancy URL',
      requiredErrorMsg: 'Vacancy URL is Required',
      urlErrorMsg: 'Vacancy URL Must be url'
    },
    workingModel: {
      name: 'workingModel',
      label: 'Working Model',
      requiredErrorMsg: 'Working Model Is Required',
    },
    companyName: {
      name: 'companyName',
      label: 'Company Name',
      requiredErrorMsg: 'Company Name Is Required',
      minErrorMsg: 'Must be at least 4 characters'
    },
    businessModel: {
      name: 'businessModel',
      label: 'Business Model',
      requiredErrorMsg: 'Business Model Is Required',
    },
    location: {
      name: 'location',
      label: 'Location',
      requiredErrorMsg: 'Location Name Is Required',
      minErrorMsg: 'Must be at least 4 characters',
    },
    salaryExpectation: {
      name: 'salaryExpectation',
      label: 'Salary Expectetion',
      requiredErrorMsg: 'Salary Expectetion Is Required',
      numberErrorMsg: 'Salary must be a number',
    },
    hiringManager: {
      name: 'hiringManager',
      label: 'Hiring Manager',
      requiredErrorMsg: 'Hiring Manager Is Required',
      minErrorMsg: 'Hiring Managerr Must be at least 4 characters',
    },
    vacancyDescription: {
      name: 'vacancyDescription',
      label: 'Vacancy Description',
      requiredErrorMsg: 'Vacancy Description Is Required',
      minErrorMsg: 'Must be at least 4 characters',
    }
  }
}

export default vacancyFormModel