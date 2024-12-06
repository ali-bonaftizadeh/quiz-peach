import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip } from '@mui/material';
import FiltersBox from '../components/FiltersBox';
import ToggleBox from '../components/ToggleBox';
import BasicTable from '../components/Table';
import SummaryBox from '../components/SummaryBox';
import Similars from '../components/Similars';
import QuestionView from '../components/QuestionView';
import Editor from '../components/MarkdownEditor';

const Home = () => {
    return (
        <Container>
            <CssBaseline />
            <Typography
                variant="h2"
                component="h2"
                align="center"
                gutterBottom
                sx={{ mt: 4, mb: 4 }}
            >
                یک نمونه سوال
            </Typography>
            <Box sx={{ m: 5 }}></Box> {/* only for test */}
            <Grid2 container spacing={2}>
                <Grid2 container size={{ sm: 12, md: 3 }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <SummaryBox title="قرابت معکوس"></SummaryBox>
                        <Similars title="از همین طراح">
                            <Typography>here is a test</Typography>
                        </Similars>
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                        <QuestionView
                            question="متن زیر با کدام بیت قرابت معنایی دارد؟
«او بنده خود را عاشق خود کند، آنگاه بر بنده عاشق باشد.» "
                            options={[
                                ' غرور حسنت اجازت مگرنداد ای گل  /  که پرسشی نکنی عندلیب شیدا را',
                                'حسنت به اتفاق ملاحت جهان گرفت  /  آری به اتفاق جهان می‌توان گرفت',
                                'در ازل پرتو حسنت ز تجلی دم زد / عشق پیدا شد و آتش به همه عالم زد',
                                ' غرور حسنت اجازت مگرنداد ای گل  /  که پرسشی نکنی عندلیب شیدا را',
                            ]}
                        ></QuestionView>
                </Grid2>
            </Grid2>
        </Container>

    );
}

export default Home;
