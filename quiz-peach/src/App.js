import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip, getContrastRatio } from '@mui/material';
import FiltersBox from './components/FiltersBox'
import ToggleBox from './components/ToggleBox';
import BasicTable from './components/Table'
import SummaryBox from './components/SummaryBox';
import Similars from './components/Similars';
import QuestionView from './components/QuestionView';
import Editor from './components/MarkdownEditor';
import CreateQuestion from './layout/CreateQuestion';
import { dark } from '@mui/material/styles/createPalette';

let theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn'
  },
  palette: {
    mode: 'light',
    borderColor: {
      main: '#e2e8f0',
      light: '#e2e8f0',
      dark: '#e2e8f0',
      contrastText: getContrastRatio('#e2e8f0', '#fff') > 4.5 ? '#fff' : '#111',
    },
  }
})

theme = createTheme(theme, {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `0.1rem solid ${theme.palette.borderColor.main}`,
          borderRadius: '0.6rem'
        }
      }
    }
  }
});

function App() {
  document.body.setAttribute("dir", "rtl");
  
  return (
    // <ThemeProvider theme={paleteTheme}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Container>
          
          <Box sx={{ m: 5 }}></Box> {/* only for test*/}
          <CreateQuestion></CreateQuestion>

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

		  <Editor></Editor>


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
      // </ThemeProvider>
  );
}

export default App;
