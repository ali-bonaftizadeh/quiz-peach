import Editor from '../components/MarkdownEditor';
import './App.css';
import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip, Card } from '@mui/material';

const CreateQuestion = () => {
  return (
    <Container>
    <Box sx={{ m: 20 }}></Box>

    <Card display="flex" flexDirection="column" sx={{ textAlign: 'right' }} gap={4} padding={3}>
      <Box className="box" padding={3} borderRadius={2}>
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
      </Box>
    </Card>

  </Container>
  );
}

export default CreateQuestion;
