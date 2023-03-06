import { createTheme } from '@mui/material/styles';

const Montserrat =  "Montserrat";
const Lora = "Lora";

const theme = createTheme({
  palette: {
    primary: {
      light: '#EEF2E6',
      main: '#3D8361',
      dark: '#D6CDA4',
      contrastText: '#EEEEEE',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: Montserrat,
    vacancyName: {
      fontWeight: 'bold',
      //fontStyle: 'italic',
      //fontWeight: 'bold',
      fontSize: '150%',
      textTransform: 'uppercase',
    },
    salaryExpectation: {
      display: 'block',
      textDecoration: 'underline #3D8361',
      fontWeight: 'bold',
    },
    stageType: {
      color: '#3D8361',
      fontWeight: 'bold',
    }
  }
  
});

export default theme