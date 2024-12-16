import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Retrieve the username from cookies
    const storedUsername = Cookies.get('username');
    console.log(storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          کوئیز پیج
        </Typography>
        <Box>
          {/* Conditionally render the username */}
          {username && (
            <Button color="inherit">
              {username} عزیز، خوش آمدید
            </Button>
          )}
          <Button color="inherit" component={Link} to="/login">
            ورود به حساب کاربری
          </Button>
          <Button color="inherit" component={Link} to="/">
            خانه
          </Button>
          <Button color="inherit" component={Link} to="/create-question">
            ساخت سوال
          </Button>
          <Button color="inherit" component={Link} to="/tag">
            برچسب ها
          </Button>
          <Button color="inherit" component={Link} to="/ranking">
            جدول امتیازات
          </Button>
          <Button color="inherit" component={Link} to="/question">
            نمونه سوال
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
