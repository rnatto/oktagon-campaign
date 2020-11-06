import { Box, Button, Typography, Link } from '@material-ui/core';
import React from 'react';

// import { Container } from './styles';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box maxWidth={600}>
      <Box px={1} py={2}>
        <Typography variant="h3" component="span">
          Dashboard
        </Typography>
        <Box my={4}>
          <Typography variant="h4" color="secondary">
            Hello!
        </Typography>
          <Typography variant="h4" color="secondary">
            My name is Renato and welcome to my Oktagon challenge!
        </Typography>
        </Box>
        <Box my={4}>
          <Typography variant="h5" color="secondary">
            I decided to use Material UI here to improve my productivity.
          </Typography>
        </Box>
        <Box my={4}>
          <Typography variant="h5" color="secondary">
            Send me tips so I can improve my skills as a developer.
          </Typography>
        </Box>
        <Link href="mailto:renatobarbosacandido@gmail.com">
          Email: renatobarbosacandido@gmail.com
        </Link>
        <Box textAlign="center" mt={4}>
          <Button component={RouterLink} to="/campaign" color="secondary" variant="contained" size="large">Go to campaign</Button>
        </Box>

      </Box>
    </Box>
  )
}

export default Home;