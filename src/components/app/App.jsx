import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NewVacancyFormPage from '../pages/NewVacancyFormPage';
import NewStagePage from '../pages/NewStagePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/newVacancy' element={<NewVacancyFormPage />}/>
            <Route path='/newStage/:vacancyId' element={<NewStagePage />}/>
          </Routes>
        </div>
      </Router >
    </ThemeProvider>
  );
}

export default App;
