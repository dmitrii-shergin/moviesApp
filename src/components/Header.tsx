import { getAuth, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAppDispatch } from '../store/store';
import { removeUser } from '../store/slices/userSlice';
import { useUser } from '../hooks/useUser';

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useUser();
  const auth = getAuth();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/signUp');
      })
      .catch((error): void => {
        console.log(error);
      });
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
        {user.email ? (
          <Button onClick={logOut}>
            <Link to='/'>Log out from {user.email}</Link>
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
