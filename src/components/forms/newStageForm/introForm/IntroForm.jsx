import InputField from "../../formFields/InputField";
import SelectField from "../../formFields/SelectField";
import { useSelector } from 'react-redux';
import { Box } from "@mui/system";
import stageFormModel from "../formModel/stageFormModel";

const IntroForm = () => {
  const stageTypes = useSelector(state => state.vacancies.stageTypes)
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
      />
      <InputField 
        name={stageName.name} 
        label={stageName.label} 
      />
    </Box>
  )
}

export default IntroForm