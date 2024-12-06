import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import CreateQuestion from './layout/CreateQuestion';
import Tags from './layout/Tags';
import Ranking from './layout/Ranking';
import Home from './layout/Home';
import QuestionPage from './layout/QuestionPage';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  document.body.setAttribute("dir", "rtl");
  const [darkTheme, setDarkTheme] = useState(false);

  let theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: 'Vazirmatn',
    },
    palette: {
      mode: darkTheme ? 'dark' : 'light',
      borderColor: {
        main: darkTheme ? '#2e2e2e' : '#e2e8f0',
      },
    },
  });

  theme = createTheme(theme, {
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: `0.1rem solid ${theme.palette.borderColor.main}`,
            borderRadius: '0.6rem',
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            margin: '0',
            marginBottom: '0.4rem',
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: '0.8rem 0.8rem 0.4rem',
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          disableGutters: true,
          size: 'small',
        },
        styleOverrides: {
          root: {
            padding: '0',
            paddingLeft: '.5rem',
            color: `${theme.palette.borderColor.main}`,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Add the Navbar */}
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-question" element={<CreateQuestion />} />
          <Route path="/tag" element={<Tags />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
