import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchData, postData } from '../components/ApiService';
import BasicTable from '../components/Table';
import ButtonsBox from '../components/ButtonsBox';

const Tags = () => {
    const [tags, setTags] = useState([]); // To store tag names
    const [tableRows, setTableRows] = useState([]); // To store table data
    const [searchQuery, setSearchQuery] = useState(''); // For search input

    useEffect(() => {
        // Fetch tags and associated question counts
        const fetchTags = async () => {
            try {
                const response = await fetchData('/tag');
                setTags(response.map(tag => tag.name));
                setTableRows(
                    response.map(tag => ({
                        key: tag.id,
                        columns: [
                            <Typography key={tag.id}>{tag.name}</Typography>,
                            <Typography key={`${tag.id}-count`}>{tag.question_number || 0}</Typography>,
                        ],
                    }))
                );
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
        };

        fetchTags();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await fetchData('/tag', { name: searchQuery }); // Adjust endpoint if needed
            setTags(response.map(tag => tag.name)); // Update the options list
            setTableRows(
                response.map(tag => ({
                    key: tag.id,
                    columns: [
                        <Typography key={tag.id}>{tag.name}</Typography>,
                        <Typography key={`${tag.id}-count`}>{tag.questionCount || 0}</Typography>,
                    ],
                }))
            );
        } catch (error) {
            console.error('Error searching tags:', error);
        }
    };

    const handleNewTag = async () => {
        if (!searchQuery.trim()) {
            // Don't proceed if the text field is empty
            alert('لطفا نام برچسب را وارد کنید.');
            return;
        }

        try {
            // Call API to create new tag
            const response = await postData('/tag', JSON.stringify({ name: searchQuery }));

            // If the tag creation is successful, update the list of tags
            if (response && response.id) {
                // Optionally, add the new tag to the tags state directly
                setTags((prevTags) => [...prevTags, searchQuery]);

                // Update table rows (you can adjust the count or any other fields)
                setTableRows((prevRows) => [
                    ...prevRows,
                    {
                        key: response.id, // Assuming the response returns the new tag data
                        columns: [
                            <Typography key={response.id}>{response.name}</Typography>,
                            <Typography key={`${response.id}-count`}>{0}</Typography>, // Initialize count if needed
                        ],
                    },
                ]);

                // Clear the input field after creation
                setSearchQuery('');
            } else {
                alert('Failed to create tag. Please try again.');
            }
        } catch (error) {
            console.error('Error creating tag:', error);
        }
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
                برچسب ها
            </Typography>
            <Box sx={{ m: 5 }}></Box> {/* only for test */}
            <Grid2 container spacing={2}>
                <Grid2 container size={{ sm: 12, md: 3 }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <ButtonsBox title="برچسب های موجود" options={tags} ></ButtonsBox>
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Box flexDirection={'row'} display='flex' gap={2}>
                            <TextField
                                placeholder="جستجوی برچسب ..."
                                variant="outlined"
                                fullWidth
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} />
                            <Button
                                size='medium'
                                variant="contained"
                                onClick={handleSearch}>جستجو</Button>
                            <Button
                                size='medium'
                                color='success'
                                variant="contained"
                                onClick={handleNewTag}>جدید</Button>
                        </Box>
                        <BasicTable titles={["برچسب", "تعداد سوالات"]} rows={tableRows}></BasicTable>
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default Tags;