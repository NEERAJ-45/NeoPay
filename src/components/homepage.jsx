import React from 'react';
import { AppBar, Toolbar,Container,Box, Typography, Button } from '@mui/material';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      {/* <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Pautm</Typography>
          <Button color="inherit" sx={{ marginLeft: 'auto' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Welcome to <span className="text-green-400  p-2 rounded">NeoPay</span>

          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Your one-stop solution for all your payment needs.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
