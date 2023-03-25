import InputField from "../../formFields/InputField";
import SelectField from "../../formFields/SelectField";
import { Box } from "@mui/system";
import stageFormModel from "../formModel/stageFormModel";

const IntroForm = ({stage}) => {
  const stageTypes = ['Application', 'Interview', 'Offer', 'Rejection'];
  const {
    formField: {
      stageName,
      stageType
    }
  } = stageFormModel;

  return (
    <Box>
      <SelectField 
        data={stageTypes} 
        name={stageType.name} 
        label={stageType.label} 
        disabled={Boolean(stage)}
      />
      <InputField 
        name={stageName.name} 
        label={stageName.label} 
      />
    </Box>
  )
}

export default IntroForm