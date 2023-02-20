import './VacancyCard.scss';

import StageControl from '../stageControl/StageControl';

const VacancyCard = (props) => {
  const {
    vacancyName,
    id,
    company,
    location,
    salaryExpectation,
    recruiterName,
    recruiterLinkedIn,
    vacancyDescription
  } = props;
  return (
    <div className='card'>
      <div className='card__vacName'>{vacancyName}</div>
      <div className='card__company'>{company}</div>
      <div className='card__cityName'>{location}</div>
      <div className='card__recName'>
        <a href={recruiterLinkedIn}>{recruiterName}</a>
      </div>
      <div className='card__expSalary'>{salaryExpectation}$</div>
      <StageControl id={id}/>
      <div className='card__desctiprion'>
        {vacancyDescription}
      </div>
    </div>
  )
}

export default VacancyCard