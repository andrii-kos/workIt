import './Header.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)(
  () => `
    text-decoration: none;
  `
)

const Header = ({newVacancyButton}) => {
  return (
    <header>
      <div className='headerContainer'>
      <StyledLink to="/"><h1>VACANCY LIST</h1></StyledLink>
        {newVacancyButton ? <Link to="newVacancy"><button>ADD NEW VACANCY</button></Link> : null}
      </div>
    </header>
    
  )
}
export default Header