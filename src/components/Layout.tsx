import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';

function Layout() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export { Layout };
