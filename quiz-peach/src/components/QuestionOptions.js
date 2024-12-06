'use client'

import { useState } from 'react'
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    Box,
    Typography,
    createTheme,
    ThemeProvider
} from '@mui/material'
import { styled } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
})

// Create RTL theme
const theme = createTheme({
    direction: 'rtl',
})

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
})

class Answer {
    text
    isCorrect
}

export default function QuestionOptions() {
    const [answers, setAnswers] = useState([
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false }
    ])

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers]
        newAnswers[index].text = value
        setAnswers(newAnswers)
    }

    const handleCorrectAnswerChange = (index) => {
        const newAnswers = answers.map((answer, i) => ({
            ...answer,
            isCorrect: i === index
        }))
        setAnswers(newAnswers)
    }

    const handleReset = () => {
        setAnswers(answers.map(answer => ({ text: '', isCorrect: false })))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Created question with answers:', answers)
        // Here you would typically send the data to your backend
    }

    return (
        <Box mt={5}>
            <Typography variant="body1">
                گزینه‌ها (گزینه صحیح را انتخاب نمایید)

            </Typography>
            <RadioGroup>
                {answers.map((answer, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1}}>
                        <FormControlLabel
                            value={index.toString()}
                            control={
                                <Radio
                                    checked={answer.isCorrect}
                                    onChange={() => handleCorrectAnswerChange(index)}
                                    color="primary"
                                />
                            }
                            label=""
                        />
                        <TextField
                            fullWidth
                            value={answer.text}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                            variant="outlined"
                            placeholder={`گزینه ${index + 1}`}
                        />
                    </Box>
                ))}
            </RadioGroup>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                >
                    ساخت سوال جدید
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleReset}
                >
                    بازنشانی تمام فیلدها
                </Button>
            </Box>
        </Box>
    )
}