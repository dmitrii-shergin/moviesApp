import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        px: 6,
        mt: 'auto',
        border: '1px black solid',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Container maxWidth='sm'>
        <Typography align='center'>Footer</Typography>
      </Container>
    </Box>
  );
}

export { Footer };
