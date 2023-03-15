import * as Yup from 'yup';
import vacancyFormModel from './stageFormModel';

const {
  formField: {
    stageName,
    stageType,
    location,
    interviewerNames,
    interviewDate,
    questionsAndAnswers,
    notes,
    employmentType,
    jobStartDate,
    proposedCompensation,
    jobBenefits,
    jobApplicationCoverLeter,
    rejectionPersonName,
    rejectionReason,
  }
} = vacancyFormModel;

const vacancyFormValidationSchema = [
  Yup.object().shape({ //intro
    [stageName.name]: Yup.string()
      .min(4, stageName.minErrorMsg)
      .required(stageName.requiredErrorMsg),
    [stageType.name]: Yup.string()
      .required(stageType.requiredErrorMsg)
  }),
  Yup.object().shape({ //interivew
    [interviewDate.name]: Yup.date()
      .required(interviewDate.requiredErrorMsg),
    [location.name]: Yup.string()
      .min(4, location.minErrorMsg)
      .required(location.requiredErrorMsg),
    [interviewerNames.name]: Yup.array()
      .test(
        'interviewerNames',
        function (value) {
          const { path, createError } = this;
          if (value[0] === undefined) {
            return createError({
              path: `${path}[0]`,
              message: interviewerNames.requiredErrorMsg
            });
          } else if (value.length >= 2 || value[value.length - 1].length > 0) {
            return true
          }
        }
      ),
    [questionsAndAnswers.name]: Yup.array()
      .of(
        Yup.object().shape({
          question: Yup.string()
            .min(4, questionsAndAnswers.minErrorMsgQuestion)
            .required(questionsAndAnswers.requiredErrorMsgQuestion),
          answer: Yup.string()
            .min(4, questionsAndAnswers.minErrorMsgAnswer)
            .required(questionsAndAnswers.requiredErrorMsgAnswer)
        })
      ),
    [notes.name]: Yup.string()
  }),
  Yup.object().shape({ //offer
    [employmentType.name]: Yup.string()
      .min(4, employmentType.minErrorMsg)
      .required(employmentType.requiredErrorMsg),
    [jobStartDate.name]: Yup.date()
      .required(jobStartDate.requiredErrorMsg),
    [proposedCompensation.name]: Yup.number(proposedCompensation.numberErorMsg)
      .required(proposedCompensation.requiredErrorMsg),
    [jobBenefits.name]: Yup.string()
      .min(4, jobBenefits.minErrorMsg)
      .required(jobBenefits.requiredErrorMsg),
  }),
  Yup.object().shape({ //appliction
    [employmentType.name]: Yup.string()
      .min(4, employmentType.minErrorMsg)
      .required(employmentType.requiredErrorMsg),
    [proposedCompensation.name]: Yup.number(proposedCompensation.numberErorMsg)
      .required(proposedCompensation.requiredErrorMsg),
    [jobBenefits.name]: Yup.string(),
    [jobApplicationCoverLeter.name]: Yup.string()
      .min(4, jobApplicationCoverLeter.minErrorMsg)
      .required(jobApplicationCoverLeter.requiredErrorMsg),
    }),
    Yup.object().shape({ //rejection
      [rejectionPersonName.name]: Yup.string()
        .min(4, rejectionPersonName.minErrorMsg)
        .required(rejectionPersonName.requiredErrorMsg),
      [rejectionReason.name]: Yup.string()
        .min(4, rejectionReason.minErrorMsg)
        .required(rejectionReason.requiredErrorMsg),
      })
  ]
  

  export default vacancyFormValidationSchema