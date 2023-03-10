const vacancyFormModel =  {
  formId: 'vacancyForm',
  formField: {
    stageName: {
      name: 'stageName',
      label: 'Stage Name',
      requiredErrorMsg: 'Stage Name Is Required',
      minErrorMsg: 'Must be at least 4 characters',
    },
    stageType: {
      name: 'stageType',
      label: 'Stage Type',
      requiredErrorMsg: 'Stage Type Is Required',
    },
    interviewType: {
      name: 'interviewType',
      label: 'Interview Type',
    },
    interviewDate: {
      name: 'interviewDate',
      label: 'Interview Date',
      requiredErrorMsg: 'Interview Date Is Required',
    },
    location: {
      name: 'location',
      label: 'Location',
      requiredErrorMsg: 'Location Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    interviewerNames: {
      name: 'interviewerNames',
      label: 'Interviewer Name',
      requiredErrorMsg: 'Interviewer Name Is Required',
      minErrorMsg: 'Interviewer Name Must be at least 4 characters',
    },
    questionsAndAnswers: {
      name: 'questionsAndAnswers',
      label: 'Interview Question',
      requiredErrorMsgQuestion: 'Question Name Is Required',
      minErrorMsgQuestion: 'Question Must be at least 4 characters',
      requiredErrorMsgAnswer: 'Answer Name Is Required',
      minErrorMsgAnswer: 'Answer Must be at least 4 characters',
    },
    notes: {
      name: 'notes',
      label: 'Notes',
      requiredErrorMsg: 'Stage Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    jobPosition: {
      name: 'jobPosition',
      label: 'Job Postion',
      requiredErrorMsg: 'Job Position Is Required',
      minErrorMsg: 'Job Position Must be at least 4 characters',
    },
    jobDescription: {
      name: 'jobDescription',
      label: 'Job Description',
      requiredErrorMsg: 'Job Description Is Required',
      minErrorMsg: 'Job Description Must be at least 4 characters',
    },
    employmentType: {
      name: 'employmentType',
      label: 'Employment Type',
      requiredErrorMsg: 'Employment Type Is Required',
      minErrorMsg: 'Employment Type Must be at least 4 characters',
    },
    jobStartDate: {
      name: 'jobStartDate',
      label: 'Start Date',
      requiredErrorMsg: 'Start Date Is Required',
    },
    proposedCompensation: {
      name: 'proposedCompensation',
      label: 'Proposed Compensation',
      requiredErrorMsg: 'Proposed Compensation Is Required',
      numberErorMsg: 'Proposed Compensation Must be a number'
    },
    jobBenefits: {
      name: 'jobBenefits',
      label: 'Job Benefits',
    },
    jobApplicationCoverLeter: {
      name: 'jobApplicationCoverLeter',
      label: 'Cover Leter',
      requiredErrorMsg: 'Cover Leter Is Required',
      minErrorMsg: 'Cover Leter Must be at least 4 characters',
    },
    companyName: {
      name: 'companyName',
      label: 'Company Name',
      requiredErrorMsg: 'Company Name Is Required',
      minErrorMsg: 'Company Name Must be at least 4 characters',
    },
    rejectionPersonName: {
      name: 'rejectionPersonName',
      label: 'Rejection Person Name',
      requiredErrorMsg: 'Rejection Person Name Is Required',
      minErrorMsg: 'Rejection Person Must be at least 4 characters',
    },
    rejectionReason: {
      name: 'rejectionReason',
      label: 'Rejection Reason',
      requiredErrorMsg: 'Rejection Reason Is Required',
      minErrorMsg: 'Rejection Reason Must be at least 4 characters',
    },
    rejectionNotes: {
      name: 'rejectionNotes',
      label: 'Rejection Notes',
      minErrorMsg: 'Rejection Notes Must be at least 4 characters',
    }
  }
}

export default vacancyFormModel