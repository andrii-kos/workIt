import './Header.scss';
import {Link} from 'react-router-dom'

const Header = ({newVacancyButton}) => {
  return (
    <header>
      <div className='headerContainer'>
        <h1>VACANCY LIST</h1>
        {newVacancyButton ? <Link to="newVacancy"><button>ADD NEW VACANCY</button></Link> : null}
      </div>
    </header>
    
  )
}
export default Header