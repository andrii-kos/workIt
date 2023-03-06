import NewVacancyForm from "../forms/newVacancyForm/NewVacancyForm";
import Header from "../header/Header";

const NewVacancyFormPage = () => {
  return (
    <main>
      <Header newVacancyButton={false} />
      <NewVacancyForm />
    </main>
  )
}

export default NewVacancyFormPage