import { Box, Container, CssBaseline, Grid2, Typography, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchData } from '../components/ApiService';
import SummaryBox from '../components/SummaryBox';
import Similars from '../components/Similars';
import QuestionView from '../components/QuestionView';
import { useLocation } from 'react-router-dom';

const QustionPage = () => {
    
    const location = useLocation();
    const data = location.state ? location.state.data : null; // Retrieve the passed data
    const [questionData, setQuestionData] = useState(null); // State to store the question data
    const questionId = (data && data.id) ? data.id : 1; // Example question ID, you can set this dynamically based on routing or context
    // Fetch question details from the API
    useEffect(() => {
        const fetchQuestionDetails = async () => {
            try {
                const data = await fetchData(`/question/${questionId}/details`);
                setQuestionData(data); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching question details:', error);
            }
        };

        fetchQuestionDetails();
    }, [questionId]); // Dependency array ensures the effect runs only once when the component mounts

    // If the data is not loaded, show a loading message
    if (!questionData) {
        return <Typography variant="h6" align="center">متاسفانه سوال تصادفی یافت نشد.</Typography>;
    }

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
                        <SummaryBox title={questionData.name} category={questionData.Tag.name} level={questionData.level}></SummaryBox>
                        <Similars title="از همین طراح">
                            <Typography>Here are similar questions.</Typography>
                        </Similars>
                    </Stack>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 9 }} spacing={2}>
                    <QuestionView
                        question={questionData.question}
                        options={[
                            questionData.option1,
                            questionData.option2,
                            questionData.option3,
                            questionData.option4,
                        ]}
                    ></QuestionView>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default QustionPage;
