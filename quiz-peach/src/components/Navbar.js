import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          برنامه سوالات
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            خانه
          </Button>
          <Button color="inherit" component={Link} to="/create-question">
            ساخت سوال
          </Button>
          <Button color="inherit" component={Link} to="/options">
            گزینه‌ها
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
