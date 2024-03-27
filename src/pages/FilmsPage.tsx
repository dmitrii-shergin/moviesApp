import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

function FilmsPage() {
  const user = useUser();
  const [pending, setPending] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (user.email) {
      setPending(false);
    } else {
      timer = setTimeout(() => {
        navigate('/signIn');
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <Box>
      {pending ? <>Loading</> : <Typography variant='h1'>FIIILMS</Typography>}
    </Box>
  );
}

export { FilmsPage };
