import Header from '../header/Header'
import VacanciesCards from '../vacanciesCards/VacanciesCards';

const MainPage = () => {
  return (
    <main>
      <Header newVacancyButton={true}/>
      <VacanciesCards />
    </main>
  )
}

export default MainPage