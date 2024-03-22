import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { useAuth } from '../hooks/useAuth';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/slices/userSlice';

function SignInPage() {
  const navigate = useNavigate();
  const user = useAuth();
  const dispatch = useAppDispatch();

  const handlerSignIn = (
    email: string,
    password: string,
    event: React.SyntheticEvent,
  ) => {
    event.preventDefault();
    if (email === user.email && password === user.password) {
      dispatch(setUser({ ...user, isAuth: true }));
      navigate('/films');
    }
  };

  return <Form title='Sign In' handleSubmit={handlerSignIn} />;
}

export { SignInPage };
