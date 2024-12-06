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
                خانه
            </Typography>
            <Box sx={{ m: 5 }}></Box> {/* only for test */}
            <Grid2 container spacing={2}>
                <Grid2 container size={{ sm: 12, md: 3 }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <ToggleBox title="سوالات من"></ToggleBox>
                        <ToggleBox title="نشان‌شده‌ها"></ToggleBox>
                        <FiltersBox
                            title="درجه سختی"
                            options={['ساده', 'دشوار', 'متوسط']}
                        ></FiltersBox>
                        <FiltersBox
                            title="وضعیت حل"
                            options={['حل‌شده', 'حل‌نشده', 'حل اشتباه']}
                        ></FiltersBox>
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}>
                            <TextField
                                label="جستجوی سوال ..."
                                variant="outlined"
                                fullWidth
                            />
                            <Button variant="contained">سوال جدید</Button>
                            <Button variant="outlined">ساخت سوال جدید</Button>
                        </Stack>

                        <BasicTable
                            titles={['عنوان سوال', 'سختی', 'دسته‌بندی']}
                            rows={[
                                {
                                    key: 'temp',
                                    columns: [
                                        <Typography>قرابت معکوس</Typography>,
                                        <Typography>دشوار</Typography>,
                                        <Chip label="ادبیات"></Chip>,
                                    ],
                                },
                                {
                                    key: 't2',
                                    columns: [
                                        <Typography>قرابت معکوس</Typography>,
                                        <Typography>دشوار</Typography>,
                                        <Chip label="ادبیات"></Chip>,
                                    ],
                                },
                            ]}
                        ></BasicTable>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>

    );
}

export default Home;
