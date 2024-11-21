import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import FiltersBox from './components/FiltersBox'
import ToggleBox from './components/ToggleBox';

const theme = createTheme({
  typography: {
    fontFamily: 'Vazirmatn'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ToggleBox title="سوالات من"></ToggleBox>
        <Box sx={{m:5}}></Box> {/* only for test*/}
        <FiltersBox title="درجه سختی" options={["ساده", "دشوار", "متوسط"]}></FiltersBox>
      </div>
    </ThemeProvider>
  );
}

export default App;
