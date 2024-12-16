import { Card, RadioGroup, FormControl, FormControlLabel, Radio, Typography, Stack, Button, Box } from '@mui/material'
import { postData } from './ApiService'
import { useState } from 'react';


const QuestionView = ({ questionData }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [disableSubmit, setSubmitDisable] = useState(false);

    // Handler for radio button change
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    console.log("question Data")
    console.log(questionData)
    const options = [questionData.option1, questionData.option2, questionData.option3, questionData.option4];

    const submitAnswer = async () => {
        try {
            console.log(selectedValue)
            const response = await postData('/question/answer', JSON.stringify({
                question_id: questionData.id,
                option: selectedValue
            }))
            setSubmitDisable(true);
            alert(response.correct ? "پاسخ صحیح بود." : "پاسخ شما غلط بود.")
        } catch (error) {
            console.error('Failed to solve question:', error);
            alert('خطا در پاسخ به سوال.');
        }
    }

    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'right',
            padding: 3
        }}>
            <Stack>
                <Typography mb={2}>{questionData.question}</Typography>
                <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <RadioGroup
                        value={selectedValue} // Set the value to the selected state
                        onChange={handleChange} // Handle change events
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        {
                            options.map((option, index) => (
                                <FormControlLabel
                                    value={index + 1}
                                    control={<Radio />}
                                    label={
                                        <Typography>{option}</Typography>
                                    }
                                />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
                <Box display="flex">
                    <Button disabled={disableSubmit || questionData.answered} variant="contained" disableElevation onClick={submitAnswer}>ثبت پاسخ</Button>
                </Box>
            </Stack>

        </Card >
    )
}


export default QuestionView;