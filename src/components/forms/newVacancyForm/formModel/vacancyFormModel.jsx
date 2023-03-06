const vacancyFormModel =  {
  formId: 'vacancyForm',
  formField: {
    vacancyName: {
      name: 'vacancyName',
      label: 'Vacancy Name',
      requiredErrorMsg: 'Vacancy Name is Required',
      minErrorMsg: 'Must be at least 2 characters'
    },
    stageType: {
      name: 'stageType',
      label: 'Stage Type',
      requiredErrorMsg: 'Stage Type Is Required'
    },
    company: {
      name: 'companyName',
      label: 'Company Name',
      requiredErrorMsg: 'Company Name Is Required',
      minErrorMsg: 'Must be at least 2 characters'
    },
    location: {
      name: 'location',
      label: 'Location',
      requiredErrorMsg: 'Location Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    salaryExpectation: {
      name: 'salaryExpectation',
      label: 'Salary Expectetion',
      requiredErrorMsg: 'Salary Expectetion Is Required',
      numberErrorMsg: 'Salary must be a number',
    },
    recruiterName: {
      name: 'recruiterName',
      label: 'Recruiter Name',
      requiredErrorMsg: 'Recruiter Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    recruiterLinkedIn: {
      name: 'recruiterLinkedIn',
      label: 'Recruiter LinkedIn',
      requiredErrorMsg: ''
    },
    vacancyDescription: {
      name: 'vacancyDescription',
      label: 'Vacancy Description',
      requiredErrorMsg: 'Vacancy Description Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    coverLeterRecruiterMessage: {
      name: 'coverLeterRecruiterMessage',
      label: 'Cover Leter Message',
      requiredErrorMsg: 'Cover Leter Message Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    stageName: {
      name: 'stageName',
      label: 'Stage Name',
      requiredErrorMsg: 'Stage Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
  }
}

export default vacancyFormModel