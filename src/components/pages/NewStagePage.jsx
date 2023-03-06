import NewStageForm from "../forms/newStageForm/NewStageForm"
import Header from "../header/Header";
const MainPage = () => {
  return (
    <main>
      <Header newVacancyButton={false} />
      <NewStageForm />
    </main>
  )
}

export default MainPage