import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip } from '@mui/material';
import FiltersBox from './components/FiltersBox'
import ToggleBox from './components/ToggleBox';
import BasicTable from './components/Table'
import { column } from 'stylis';
import SummaryBox from './components/SummaryBox';
import Similars from './components/Similars';
import QuestionView from './components/QuestionView';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn'
  }
});

function App() {
  document.body.setAttribute("dir", "rtl");
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Container>
          <Box sx={{ m: 5 }}></Box> {/* only for test*/}

          <Grid2 container spacing={2}>
            <Grid2 container size={{ sm: 12, md: 3 }}>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <SummaryBox title="قرابت معکوس"></SummaryBox>
                <Similars title="از همین طراح">
                  <Typography>here is a test</Typography>
                </Similars>
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

              <QuestionView question="متن زیر با کدام بیت قرابت معنایی دارد؟
«او بنده خود را عاشق خود کند، آنگاه بر بنده عاشق باشد.» " options={[
                " غرور حسنت اجازت مگرنداد ای گل  /  که پرسشی نکنی عندلیب شیدا را",
                "حسنت به اتفاق ملاحت جهان گرفت  /  آری به اتفاق جهان می‌توان گرفت",
                "در ازل پرتو حسنت ز تجلی دم زد / عشق پیدا شد و آتش به همه عالم زد",
                " غرور حسنت اجازت مگرنداد ای گل  /  که پرسشی نکنی عندلیب شیدا را"
              ]}></QuestionView>
              <BasicTable titles={["عنوان سوال", "سختی", "دسته‌بندی"]} rows={[ {
                key: 'temp',
                columns: [
                  <Typography>قرابت معکوس</Typography>,
                  <Typography>دشوار</Typography>,
                  <Chip label="ادبیات"></Chip>                    
                ]
              },
              {
                key: 't2',
                columns: [
                  <Typography>قرابت معکوس</Typography>,
                  <Typography>دشوار</Typography>,
                  <Chip label="ادبیات"></Chip>   
                ]
              }
                
              ]}></BasicTable>
              </Stack>
              
            </Grid2>
          </Grid2>
        </Container>

      </div>
    </ThemeProvider>
  );
}

export default App;
