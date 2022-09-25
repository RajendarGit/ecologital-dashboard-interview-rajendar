import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SideBar } from "./Components/SideBar";
import { Offers } from "./Pages/Offers";


function App() {

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#039be5',
      sub: '#70738f',
      dark: '#000000',
      darkSub: '#333333',
      light: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Oswald, sans-serif',
      fontSize: 'clamp(2rem, 5vw, 3rem)',
    },
    h2: {
      fontFamily: 'Oswald, sans-serif',
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    },
    h3: {
      fontFamily: 'Oswald, sans-serif',
      fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
    },
    h4: {
      fontSize: 'clamp(1rem, 5vw, 1.3rem)',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box sx={{display: 'flex'}}>
        <SideBar/>
        <Offers />
      </Box>
    </ThemeProvider>
  );
}

export default App;
