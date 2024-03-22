import { Box, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function FilmsPage() {
  return (
    <Box>
      {useAuth().isAuth ? (
        <Typography variant='h1'>FIIILMS</Typography>
      ) : (
        <Navigate to='/signIn' />
      )}
    </Box>
  );
}

export { FilmsPage };
