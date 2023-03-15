import { createTheme } from '@mui/material/styles';

const Montserrat =  "Montserrat";
const Lora = "Lora";

const theme = createTheme({
  palette: {
    primary: {
      light: '#EEF2E6',
      main: '#23B5D3',
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
      display: 'flex',
      fontWeight: 'bold',
      //fontStyle: 'italic',
      //fontWeight: 'bold',
      fontSize: '150%',
      textTransform: 'uppercase',
    },

    location: {
      fontStyle: 'italic'
    },
    salaryExpectation: {

      color: '#23B5D3',
    },
    stageType: {
      color: '#23B5D3',
      fontWeight: 'bold',
    },
    description: {
      display: 'flex',
      fontFamily: 'Lora',
      textAlign: 'justify',
      lineHeight: '1.4'
    },
    highlightedText: {
      fontWeight: 'bold',
      marginRight: '1em',
    }
  }
  
});

export default theme