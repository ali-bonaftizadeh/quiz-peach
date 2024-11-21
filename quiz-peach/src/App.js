import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline, Grid2, Typography } from '@mui/material';
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
        <Container>
          <ToggleBox title="سوالات من"></ToggleBox>
          <Box sx={{ m: 5 }}></Box> {/* only for test*/}
          <FiltersBox title="درجه سختی" options={["ساده", "دشوار", "متوسط"]}></FiltersBox>

          <Grid2 container spacing={2}>
            <Grid2 size={{sm:12, md:3}}>
              {/* Right Narrow Sidebar */}
            </Grid2>
            <Grid2 size={{sm:12, md:9}}>
              {/* Main Content Div */}
            </Grid2>
          </Grid2>
        </Container>

      </div>
    </ThemeProvider>
  );
}

export default App;
