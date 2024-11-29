import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button } from '@mui/material';
import FiltersBox from './components/FiltersBox'
import ToggleBox from './components/ToggleBox';
import BasicTable from './components/Table'
import Label from './components/Label'
import { column } from 'stylis';
import RTL from './layout/RTL'
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RTL>

      <CssBaseline />
      <div className="App">
        <Container>
          <Box sx={{ m: 5 }}></Box> {/* only for test*/}

          <Grid2 container spacing={2}>
            <Grid2 container size={{ sm: 12, md: 3 }}>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <ToggleBox title="سوالات من"></ToggleBox>
                <ToggleBox title="نشان‌شده‌ها"></ToggleBox>
                <FiltersBox title="درجه سختی" options={["ساده", "دشوار", "متوسط"]}></FiltersBox>
                <FiltersBox title="وضعیت حل" options={["حل‌شده", "حل‌نشده", "حل اشتباه"]}></FiltersBox>
              </Stack>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}>
                <TextField label="جستجوی سوال ..." variant="outlined" fullWidth/>
                <Button variant="contained">سوال جدید</Button>
                <Button variant="outlined">ساخت سوال جدید</Button>
              </Stack>
              <BasicTable titles={["عنوان سوال", "سختی", "دسته‌بندی"]} rows={[ {
                key: 'temp',
                columns: [
                  <Typography>قرابت معکوس</Typography>,
                  <Typography>دشوار</Typography>,
                  <Label value="ادبیات"></Label>                    
                ]
              },
              {
                key: 't2',
                columns: [
                  <Typography>قرابت معکوس</Typography>,
                  <Typography>دشوار</Typography>,
                  <Label value="ادبیات"></Label>   
                ]
              }
                
              ]}></BasicTable>
              </Stack>
              
            </Grid2>
          </Grid2>
        </Container>

      </div>
      </RTL>

    </ThemeProvider>
  );
}

export default App;
