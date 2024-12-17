import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button } from '@mui/material';
import BasicTable from '../components/Table';
import { useEffect, useState } from 'react';
import { fetchData } from '../components/ApiService';

const Ranking = () => {
    const [searchQuery, setSearchQuery] = useState(''); // For search input
    const [rankingData, setRankingData] = useState([]); // For storing user ranking data

    // Function to fetch user rankings
    const fetchRankingData = async (query = '') => {
        try {
            // Adjust the API endpoint based on your actual API
            const response = await fetchData('/user?name=' + query);
            // Assuming API accepts search query
            if (response && Array.isArray(response)) {
                setRankingData(response); // Update the state with the fetched data
            } else {
                console.error('Invalid response format:', response);
            }
        } catch (error) {
            console.error('Error fetching ranking data:', error);
        }
    };

    // Fetch ranking data on component mount or when the searchQuery changes
    useEffect(() => {
        fetchRankingData(searchQuery);
    }, [searchQuery]);

    const handleSearch = () => {
        fetchRankingData(searchQuery);  // Trigger search with the current query
    };

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
                <Grid2 size={{ sm: 12, md: 12 }} spacing={2}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Box flexDirection={'row'} display='flex' gap={2}>
                            <TextField
                                placeholder="جستجوی کاربر ..."
                                variant="outlined"
                                fullWidth
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                }}
                            />
                            <Button variant="contained" onClick={handleSearch}>جستجو</Button>
                        </Box>

                        <BasicTable
                            titles={["رتبه", "نام کاربر", "تعداد سوالات درست"]}
                            rows={rankingData.map((user) => ({
                                key: `user-${user.id}`,
                                columns: [
                                    <Typography key={`rank-${user.rank}`}>{user.rank}</Typography>,
                                    <Typography key={`name-${user.id}`}>{user.name}</Typography>,
                                    <Typography key={`score-${user.id}`}>{user.score || 0}</Typography>,
                                ]
                            }))
                            }></BasicTable>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Ranking;