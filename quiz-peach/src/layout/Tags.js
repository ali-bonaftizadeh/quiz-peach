import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip, Card, Checkbox } from '@mui/material';
import { Autocomplete, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import BasicTable from '../components/Table';
import ButtonsBox from '../components/ButtonsBox';

const Tags = () => {
    const options = ["سینما", "ادبیات", "موسیقی", "تاریخ", "تکنولوژی", "اطلاعات عمومی", "ورزشی"];

    return (
        <Container>
            <Box sx={{ m: 5 }}></Box> {/* only for test */}
            <Grid2 container spacing={2}>
                <Grid2 container size={{ sm: 12, md: 3 }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <ButtonsBox title="برچسب های موجود" options={options} ></ButtonsBox>
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <TextField
                            id="tag-title"
                            placeholder="برچسب مورد نظرتان را وارد کنید ..."
                            variant="outlined"
                            fullWidth
                        />

                        <BasicTable titles={["برچسب", "تعداد سوالات"]} rows={[{
                            key: 't1',
                            columns: [
                                <Typography>سینما</Typography>,
                                <Typography>10</Typography>,
                            ]
                        },
                        {
                            key: 't2',
                            columns: [
                                <Typography>ادبیات</Typography>,
                                <Typography>5</Typography>,
                            ]
                        },
                        {
                            key: 't3',
                            columns: [
                                <Typography>موسیقی</Typography>,
                                <Typography>8</Typography>,
                            ]
                        },
                        {
                            key: 't4',
                            columns: [
                                <Typography>تاریخ</Typography>,
                                <Typography>7</Typography>,
                            ]
                        },
                        {
                            key: 't5',
                            columns: [
                                <Typography>تکنولوژی</Typography>,
                                <Typography>6</Typography>,
                            ]
                        },
                        {
                            key: 't6',
                            columns: [
                                <Typography>اطلاعات عمومی</Typography>,
                                <Typography>4</Typography>,
                            ]
                        },
                        {
                            key: 't7',
                            columns: [
                                <Typography>ورزشی</Typography>,
                                <Typography>9</Typography>,
                            ]
                        }

                        ]}></BasicTable>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Tags;