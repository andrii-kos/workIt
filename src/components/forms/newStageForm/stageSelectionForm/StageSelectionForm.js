import InputField from "../../formFields/InputField";
import './StageSelectionForm.scss';

const StageSelectionForm = ({formField}) => {
  const {formField: {stageName}} = formField
  return (
    <div className="container">
      <h2>New Stage Form</h2>
      <div className="stageName"> 
        <InputField name={stageName.name} label={stageName.label} />
      </div>
    </div>
  )
}

export default StageSelectionForm