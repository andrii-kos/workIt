import './FormSummary.scss'

import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const SummaryForm = () => {
  const {state: {form, path}} = useLocation()
  return (
    <div className='summary-container'>
      <div className="summary">
        <p>The Form was submitted sussessfull</p>
        <Link to={path}><p>Add new {form}</p></Link>
        <Link to={'/'}><p>Get Back to Main Page</p></Link>
      </div>
    </div>
  )
}

export default SummaryForm