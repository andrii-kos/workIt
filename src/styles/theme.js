
// light: '#EEEEEE',
// main: '#D6CDA4',
// dark: '#3D8361',
// contrastText: '#fff',
// contrastText: '#EEF2E6',
import { createTheme } from '@mui/material/styles';
const Montserrat =  "Montserrat bold";
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
    vacancyName: {
      fontFamily: Montserrat,
      color: 'fff',
      fontSize: '150%',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textDecoration: 'underline'
    },
    vacancyCompany: {
      color: 'fff',
      fontSize: '100%'
    }
  }
});

export default theme