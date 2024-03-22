import { Link, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { useAppDispatch } from '../store/store';
import { removeUser } from '../store/slices/userSlice';

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAuth();

  const logOut = () => {
    dispatch(removeUser());
    navigate('/signUp');
  };

  return (
    <Box
      sx={{
        py: 3,
        px: 6,
        border: '1px black solid',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Button>
          <Link to='/films'>Films</Link>
        </Button>
        <Button>
          <Link to='/'>Home</Link>
        </Button>
      </Box>
      <Box>
        {user.isAuth ? (
          <Button onClick={logOut}>
            <Link to='/'>Log out</Link>
          </Button>
        ) : (
          <>
            <Button>
              <Link to='/signIn'>Sign In</Link>
            </Button>
            <Button>
              <Link to='/signUp'>Sign Up</Link>
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}

export { Header };
