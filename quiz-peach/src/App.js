import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // New navbar component
import CreateQuestion from './layout/CreateQuestion';
import QuestionOptions from './layout/QuestionOptions';

function App() {
  document.body.setAttribute("dir", "rtl");

  const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: 'Vazirmatn',
    },
    palette: {
      mode: 'dark', // Defaulting to dark mode; toggle logic can be added
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar /> {/* Add Navbar */}
        <Container>
          <Routes>
            <Route path="/" element={<h1>صفحه اصلی</h1>} />
            <Route path="/create-question" element={<CreateQuestion />} />
            <Route path="/options" element={<QuestionOptions />} />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;