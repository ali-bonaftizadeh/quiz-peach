import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card } from '@mui/material';
import ButtonsBox from '../components/ButtonsBox'; // Ensure correct path

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const options = [
    { id: 'login', label: 'ورود' },
    { id: 'signup', label: 'ثبت‌نام' },
  ];

  const handleOptionClick = (id) => setActiveTab(id);

  return (
    <Container>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mt: 4, mb: 4 }}
      >
        {activeTab === 'login' ? 'ورود به حساب کاربری' : 'ثبت‌نام'}
      </Typography>
      <Card sx={{ textAlign: 'right', padding: 3 }}>
        {/* Dynamic Title */}
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
          انتخاب عملیات
        </Typography>

        {/* ButtonsBox for switching tabs */}
        <ButtonsBox
          options={options.map((o) => o.label)}
          onClick={(option) => {
            const clickedTab = options.find((o) => o.label === option);
            if (clickedTab) handleOptionClick(clickedTab.id);
          }}
        />

        {/* Login Form */}
        {activeTab === 'login' && (
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 3,
            }}
          >
            <Typography variant="body1">ایمیل</Typography>
            <TextField
              id="login-email"
              placeholder="ایمیل خود را وارد کنید"
              variant="outlined"
              fullWidth
            />

            <Typography variant="body1">رمز عبور</Typography>
            <TextField
              id="login-password"
              placeholder="رمز عبور خود را وارد کنید"
              variant="outlined"
              type="password"
              fullWidth
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              ورود
            </Button>
          </Box>
        )}

        {/* Sign-Up Form */}
        {activeTab === 'signup' && (
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 3,
            }}
          >
            <Typography variant="body1">نام کامل</Typography>
            <TextField
              id="signup-name"
              placeholder="نام کامل خود را وارد کنید"
              variant="outlined"
              fullWidth
            />

            <Typography variant="body1">ایمیل</Typography>
            <TextField
              id="signup-email"
              placeholder="ایمیل خود را وارد کنید"
              variant="outlined"
              type="email"
              fullWidth
            />

            <Typography variant="body1">رمز عبور</Typography>
            <TextField
              id="signup-password"
              placeholder="رمز عبور خود را وارد کنید"
              variant="outlined"
              type="password"
              fullWidth
            />

            <Typography variant="body1">تایید رمز عبور</Typography>
            <TextField
              id="signup-confirm-password"
              placeholder="رمز عبور خود را مجددا وارد کنید"
              variant="outlined"
              type="password"
              fullWidth
            />

            <Button variant="contained" color="success" type="submit" fullWidth>
              ثبت‌نام
            </Button>
          </Box>
        )}
      </Card>
    </Container>
  );
};

export default Login;
