import { Box, Container, CssBaseline, Grid2, Typography, Stack, TextField, Button, Chip, Card, Checkbox } from '@mui/material';
import { Autocomplete, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import QuestionOptions from '../components/QuestionOptions';
import BasicTable from '../components/Table';

const Ranking = () => {
    const categories = ['ادبیات', 'پایگاه داده', 'سیستم عامل', 'معماری نرم افزار', 'وب'];
  
    return (
      <Container>
  
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
            <QuestionOptions></QuestionOptions>
          </Box>
        </Card>
  
        <Typography align='right' my={5} variant='h3' fontWeight={'bold'}>سوالات مشابه</Typography>
        <TextField
                id="question-title"
                placeholder="عنوان مورد نظرتان را وارد کنید ..."
                variant="outlined"
                fullWidth
        />
        
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
  
      </Container>
    );
  }
  
  export default Ranking;