import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Function to check the username in cookies
    const checkUsername = () => {
      const storedUsername = Cookies.get('username');
      if (storedUsername !== username) {
        setUsername(storedUsername); // Update state if username changes
      }
    };

    // Check the cookie value periodically
    const interval = setInterval(checkUsername, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [username]);

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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
