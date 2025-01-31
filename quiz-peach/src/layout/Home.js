import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip } from '@mui/material';
import FiltersBox from '../components/FiltersBox';
import ToggleBox from '../components/ToggleBox';
import BasicTable from '../components/Table';
import { useState, useEffect } from 'react';
import { fetchData } from '../components/ApiService';
import { useNavigate } from 'react-router-dom';
import { useGlobalFunctions } from '../GlobalContext';

const Home = () => {

    const { getDifficultyLevel } = useGlobalFunctions();

    let navigate = useNavigate();
    const routeChange = (path, data) => () => {
        navigate(path, {
            state: {
                data: data
            }
        });
    }

    const [questions, setQuestions] = useState([]);
    const [feeds, setFeeds] = useState([]);
    const [filters, setFilters] = useState({
        level: '',
        answeredStatus: '',
    });

    useEffect(() => {
        // Fetch questions data when filters change
        const fetchQuestions = async () => {
            try {
                const data = await fetchData('/question', filters);
                setQuestions(data);
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        };

        fetchQuestions();
    }, [filters]); // Dependency array ensures re-fetch when filters change


    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                const data = await fetchData('/question/followed/questions');
                setFeeds(data);
            } catch (error) {
                console.error('Failed to fetch feeds:', error);
            }
        };

        fetchFeeds();
    }, []); // Dependency array ensures re-fetch when filters change

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const formatRows = (rows) => {
        return rows.map((question) => ({
            key: question.id,
            columns: [
                <Typography
                    onClick={routeChange('/question', { id: question.id })}
                    sx={{ cursor: 'pointer' }}
                >
                    {question.name}
                </Typography>,
                <Typography>
                    {getDifficultyLevel(question.level)?.getText?.() || 'Unknown Difficulty'}
                </Typography>,
                <Chip label={question.tag || 'No tag'} />,
            ],
        }));
    };

    return (
        <Container>
            <CssBaseline />
            <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mt: 4, mb: 4 }}>
                خانه
            </Typography>
            <Box sx={{ m: 5 }}></Box> {/* only for test */}
            <Grid2 container spacing={2}>
                <Grid2 container size={{ sm: 12, md: 3 }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <ToggleBox title="سوالات من" />
                        <ToggleBox title="نشان‌شده‌ها" />
                        <FiltersBox
                            title="درجه سختی"
                            options={['ساده', 'دشوار', 'متوسط']}
                            onChange={(value) => handleFilterChange('level', value)}
                        />
                        <FiltersBox
                            title="وضعیت حل"
                            options={['حل‌شده', 'حل‌نشده']}
                            onChange={(value) => handleFilterChange('answeredStatus', value)}
                        />
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Box flexDirection={'row'} display='flex' gap={2}>
                            <TextField placeholder="جستجوی سوال ..." variant="outlined" fullWidth />
                            <Button size='medium' variant="outlined" onClick={routeChange("question")}>سوال تصادفی</Button>
                            <Button size='medium' color='success' variant="contained" onClick={routeChange("create-question")}>جدید</Button>
                        </Box>

                        <BasicTable
                            titles={['عنوان سوال', 'سختی', 'دسته‌بندی']}
                            rows={formatRows(questions)}
                        />

                        <Typography variant="h3" component="h2" align="right" gutterBottom sx={{ mt: 4, mb: 4 }}>
                            فیــــد
                        </Typography>
                        <BasicTable
                            titles={['عنوان سوال', 'سختی', 'دسته‌بندی']}
                            rows={formatRows(feeds)}
                        />
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Home;
