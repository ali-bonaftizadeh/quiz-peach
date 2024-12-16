import { Box, Container, Grid2, Typography, TextField, Chip, Card, Checkbox, Button } from '@mui/material';
import { Radio, RadioGroup, Autocomplete, MenuItem, FormControl, FormControlLabel, Select, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchData, postData } from '../components/ApiService';
import BasicTable from '../components/Table';


const CreateQuestion = () => {
  const [categories, setCategories] = useState([]);
  const [questionData, setQuestionData] = useState({
    name: '',
    question: '',
    level: '',
    tag_name: '',
    answers: [
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
    ],
    related_ids: [],
  });
  const [questions, setQuestions] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [selectedIds, setSelectedIds] = useState([]); // Track selected question IDs

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetchData('/tag');
        setCategories(response.map(tag => tag.name));
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...questionData.answers];
    newAnswers[index].text = value;
    setQuestionData({ ...questionData, answers: newAnswers });
  };

  const handleCorrectAnswerChange = (index) => {
    const newAnswers = questionData.answers.map((answer, i) => ({
      ...answer,
      isCorrect: i === index,
    }));
    setQuestionData({ ...questionData, answers: newAnswers });
  };

  const handleInputChange = (field, value) => {
    setQuestionData({ ...questionData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const correctOptionIndex = questionData.answers.findIndex(answer => answer.isCorrect);
    if (correctOptionIndex === -1) {
      return alert('Please select a correct answer.');
    }

    const payload = {
      name: questionData.name,
      question: questionData.question,
      level: questionData.level,
      tag_name: questionData.tag_name,
      option1: questionData.answers[0].text,
      option2: questionData.answers[1].text,
      option3: questionData.answers[2].text,
      option4: questionData.answers[3].text,
      correct_option: correctOptionIndex + 1,
      related_ids: selectedIds, // Include selected question IDs
    };

    try {
      const response = await postData('/question', JSON.stringify(payload));
      alert('سوال جدید با موفقیت اضافه شد.');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Failed to create question:', error);
      alert('خطا در ایجاد سوال.');
    }
  };

  const handleReset = () => {
    setQuestionData({
      name: '',
      question: '',
      level: '',
      tag_name: '',
      answers: [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ],
      related_ids: [],
    });
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetchData(`/question?name=${filterName}`);
      setQuestions(response);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  };

  const handleSearch = () => {
    fetchQuestions();
  };

  const rows = questions.map((question) => ({
    key: question.id,
    columns: [
      <Checkbox
        checked={selectedIds.includes(question.id)}
        onChange={() => handleCheckboxChange(question.id)}
      />,
      <Typography>{question.name}</Typography>,
      <Typography>{question.level}</Typography>,
      <Chip label={question.tag_name} />,
    ],
  }));


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
              value={questionData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="عنوان مورد نظرتان را وارد کنید ..."
              variant="outlined"
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <Typography variant="body1">متن سوال</Typography>
            <TextField
              id="question-text"
              value={questionData.question}
              onChange={(e) => handleInputChange('question', e.target.value)}
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
              value={questionData.tag_name}
              onChange={(e, newValue) => handleInputChange('tag_name', newValue)}
              renderInput={(params) => (
                <TextField {...params} placeholder="یک دسته‌بندی را وارد نمایید" fullWidth />
              )}
            />
            </Grid2>
            <Grid2 size={6}>

            <Typography variant="body1">سطح سختی</Typography>

            <FormControl fullWidth>
              <Select
                value={questionData.level}
                onChange={(e) => handleInputChange('level', e.target.value)}
                id="difficulty-level"
                labelId="difficulty-level-label"
              >
                <MenuItem value="1">آسان</MenuItem>
                <MenuItem value="2">متوسط</MenuItem>
                <MenuItem value="3">دشوار</MenuItem>
              </Select>
            </FormControl>
            </Grid2>
          </Grid2>
          <Box mt={5}>
            <Typography variant="body1">
              گزینه‌ها (گزینه صحیح را انتخاب نمایید)

        </Typography>
            <RadioGroup>
              {questionData.answers.map((answer, index) => (
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
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
              <Button variant="contained" onClick={fetchQuestions}>جستجو</Button>
        </Box>

            <BasicTable titles={["", "عنوان سوال", "سختی", "دسته‌بندی"]} rows={rows}></BasicTable>
          </Box>
          <Box my={5} sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            ساخت سوال جدید
          </Button>
            <Button variant="contained" color="error" onClick={handleReset}>
              بازنشانی تمام فیلدها
          </Button>
          </Box>

        </Box>
      </Card>

    </Container>
  );
}

export default CreateQuestion;
