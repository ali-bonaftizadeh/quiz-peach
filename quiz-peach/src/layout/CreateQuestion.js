import { Box, Container, Grid2, Typography, TextField, Chip, Card, Checkbox, Button } from '@mui/material';
import { Radio, RadioGroup, Autocomplete, MenuItem, FormControl, FormControlLabel, Select, InputLabel } from '@mui/material';
import { useState } from 'react'
import BasicTable from '../components/Table';


const CreateQuestion = () => {
  const categories = ['ادبیات', 'پایگاه داده', 'سیستم عامل', 'معماری نرم افزار', 'وب'];
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
    <Container>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mt: 4, mb: 4 }}
      >
        ساخت سوال
      </Typography>
      <Card display="flex" flexDirection="column" sx={{ textAlign: 'right' }} padding={3}>
        <Box padding={3} spacing={3}>
          <FormControl fullWidth margin="normal">
            <Typography variant="body1">عنوان سوال</Typography>
            <TextField
              id="question-title"
              placeholder="عنوان مورد نظرتان را وارد کنید ..."
              variant="outlined"
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <Typography variant="body1">متن سوال</Typography>
            <TextField
              id="question-text"
              placeholder="صورت سوال را در این بخش بنویسید ..."
              variant="outlined"
              multiline
              rows={8}
              fullWidth
            />
          </FormControl>

          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Typography variant="body1">دسته‌بندی</Typography>
              <Autocomplete
                options={categories}
                renderInput={(params) => (
                  <TextField {...params} placeholder="یک دسته‌بندی را وارد نمایید" fullWidth />
                )}
              />
            </Grid2>
            <Grid2 size={6}>

              <Typography variant="body1">سطح سختی</Typography>

              <FormControl fullWidth>
                <Select labelId="difficulty-level-label" id="difficulty-level">
                  <MenuItem value="easy">آسان</MenuItem>
                  <MenuItem value="medium">متوسط</MenuItem>
                  <MenuItem value="hard">دشوار</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
          </Grid2>
          <Box mt={5}>
            <Typography variant="body1">
              گزینه‌ها (گزینه صحیح را انتخاب نمایید)

            </Typography>
            <RadioGroup>
              {answers.map((answer, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
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
          </Box>
          <Typography align='right' my={5} variant='h5' fontWeight={'bold'}>سوالات مشابه</Typography>
          <Box>
            <Box flexDirection={'row'} display='flex' gap={2}>
              <TextField
                placeholder="جستجوی عنوان سوال ..."
                variant="outlined"
                fullWidth
              />
              <Button variant="contained">جستجو</Button>
            </Box>

            <BasicTable titles={["", "عنوان سوال", "سختی", "دسته‌بندی"]} rows={[{
              key: 'temp',
              columns: [
                <Checkbox />,
                <Typography>قرابت معکوس</Typography>,
                <Typography>دشوار</Typography>,
                <Chip label="ادبیات"></Chip>
              ]
            },
            {
              key: 't2',
              columns: [
                <Checkbox />,
                <Typography>قرابت معکوس</Typography>,
                <Typography>دشوار</Typography>,
                <Chip label="ادبیات"></Chip>
              ]
            }

            ]}></BasicTable>
          </Box>
          <Box my={5} sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
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
      </Card>

    </Container>
  );
}

export default CreateQuestion;
