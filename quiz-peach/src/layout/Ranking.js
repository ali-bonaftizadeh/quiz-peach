import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip, Card, Checkbox } from '@mui/material';
import { Autocomplete, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import BasicTable from '../components/Table';
import FiltersBox from '../components/FiltersBox';

const Ranking = () => {
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
                جدول امتیازات
            </Typography>
            <Box sx={{ m: 5 }}></Box> {/* only for test */}
            <Grid2 container spacing={2}>
                <Grid2 container size={{ sm: 12, md: 3 }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <FiltersBox
                            title="بازه زمانی"
                            options={['امروز', 'هفته گذشته', 'ماه گذشته', 'همیشه']}
                        ></FiltersBox>
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Stack sx={{ width: '100%' }} direction={'row'} spacing={2}>
                            <TextField
                                label="جستجوی کاربر ..."
                                variant="outlined"
                                fullWidth
                            />
                            <Button variant="contained">جستجو</Button>
                        </Stack>

                        <BasicTable titles={["رتبه", "نام کاربر", "تعداد سوالات درست"]} rows={[{
                            key: 't1',
                            columns: [
                                <Typography>5</Typography>,
                                <Typography>بازیکن فعلی</Typography>,
                                <Typography>0</Typography>,
                            ]
                        },
                        {
                            key: 't2',
                            columns: [
                                <Typography>1</Typography>,
                                <Typography>سجاد سلطانیان</Typography>,
                                <Typography>4</Typography>,
                            ]
                        },
                        {
                            key: 't3',
                            columns: [
                                <Typography>2</Typography>,
                                <Typography>علی بنافتی زاده</Typography>,
                                <Typography>3</Typography>,
                            ]
                        },
                        {
                            key: 't4',
                            columns: [
                                <Typography>3</Typography>,
                                <Typography>بزرگمهر ضیاء</Typography>,
                                <Typography>2</Typography>,
                            ]
                        },
                        {
                            key: 't5',
                            columns: [
                                <Typography>4</Typography>,
                                <Typography>صادق کریمی</Typography>,
                                <Typography>1</Typography>,
                            ]
                        }
                        ]}></BasicTable>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Ranking;