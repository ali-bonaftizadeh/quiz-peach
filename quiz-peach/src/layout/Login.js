import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card } from '@mui/material';
import ButtonsBox from '../components/ButtonsBox';
import { postData } from '../components/ApiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {


  let navigate = useNavigate(); 
  const routeChange = (path) => { 
    navigate(path);
  }

  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const options = [
    { id: 'login', label: 'ورود' },
    { id: 'signup', label: 'ثبت‌نام' },
    { id: 'logout', label: 'خروج' },
  ];

  const handleOptionClick = (id) => setActiveTab(id);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const response = await postData('/user/login', { email, password });
      localStorage.setItem("token", response?.token);
      setMessage('ورود موفقیت‌آمیز'); // Login successful message
      routeChange("/");
    } catch (err) {
      setError('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, confirmPassword } = formData;
      if (password !== confirmPassword) {
        setError('رمز عبور با تکرار آن مطابقت ندارد');
        return;
      }

      const response = await postData('/user/register', { name, email, password });
      setMessage('ثبت‌نام با موفقیت انجام شد.');
    } catch (err) {
      setError('خطایی در ثبت‌نام رخ داد. لطفا از تکراری نبودن نام کاربری اطمینان حاصل کنید.');
    }
  };

  return (
    <Container>
      <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mt: 4, mb: 4 }}>
        {activeTab === 'login'
          ? 'ورود به حساب کاربری'
          : activeTab === 'signup'
          ? 'ثبت‌نام'
          : 'خروج از حساب کاربری'}
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
            onSubmit={handleLoginSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 3,
            }}
          >
            <Typography variant="body1">ایمیل</Typography>
            <TextField
              id="email"
              placeholder="ایمیل خود را وارد کنید"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />

            <Typography variant="body1">رمز عبور</Typography>
            <TextField
              id="password"
              placeholder="رمز عبور خود را وارد کنید"
              variant="outlined"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              ورود
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            {message && <Typography color="primary">{message}</Typography>}
          </Box>
        )}

        {/* Sign-Up Form */}
        {activeTab === 'signup' && (
          <Box
            component="form"
            onSubmit={handleSignUpSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 3,
            }}
          >
            <Typography variant="body1">نام کامل</Typography>
            <TextField
              id="name"
              placeholder="نام کامل خود را وارد کنید"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />

            <Typography variant="body1">ایمیل</Typography>
            <TextField
              id="email"
              placeholder="ایمیل خود را وارد کنید"
              variant="outlined"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />

            <Typography variant="body1">رمز عبور</Typography>
            <TextField
              id="password"
              placeholder="رمز عبور خود را وارد کنید"
              variant="outlined"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />

            <Typography variant="body1">تایید رمز عبور</Typography>
            <TextField
              id="confirmPassword"
              placeholder="رمز عبور خود را مجددا وارد کنید"
              variant="outlined"
              type="password"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <Button variant="contained" color="success" type="submit" fullWidth>
              ثبت‌نام
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            {message && <Typography color="primary">{message}</Typography>}
          </Box>
        )}

        {/* Logout Message */}
        {activeTab === 'logout' && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              شما با موفقیت از حساب خود خارج شده‌اید.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setActiveTab('login')}
            >
              بازگشت به ورود
            </Button>
          </Box>
        )}
      </Card>
    </Container>
  );
};

export default Login;
