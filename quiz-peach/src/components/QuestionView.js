import { Card, RadioGroup, FormControl, FormControlLabel, Radio, Typography, Stack, Button, Box } from '@mui/material'

const QuestionView = ({ question, options }) => {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'right',
            padding: 3
        }}>
            <Stack>
                <Typography mb={2}>{question}</Typography>
                <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        {
                            options.map((option, index) => (
                                <FormControlLabel
                                    value={index}
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
                    <Button variant="contained" disableElevation>ثبت پاسخ</Button>
                </Box>
            </Stack>

        </Card >
    )
}


export default QuestionView;