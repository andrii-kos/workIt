const vacancyFormModel =  {
  formId: 'vacancyForm',
  formField: {
    stageName: {
      name: 'stageName',
      label: 'Stage Name',
      requiredErrorMsg: 'Stage Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    stageType: {
      name: 'stageType',
      label: 'Stage Type',
      requiredErrorMsg: 'Stage Type Is Required',
    },
    location: {
      name: 'location',
      label: 'Location',
      requiredErrorMsg: 'Location Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    interviewerNames: {
      name: 'interviewerNames',
      label: 'Interviewer Names',
      requiredErrorMsg: 'Interviewer Names Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    question: {
      name: 'question',
      label: 'Interview Question',
      requiredErrorMsg: 'Question is required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    answer: {
      name: 'answer',
      label: 'Interview Answer',
      requiredErrorMsg: 'Answer is required',
      minErrorMsg: 'Must be at least 2 characters',
    },
    notes: {
      name: 'notes',
      label: 'Notes',
      requiredErrorMsg: 'Stage Name Is Required',
      minErrorMsg: 'Must be at least 2 characters',
    }
  }
}

export default vacancyFormModel