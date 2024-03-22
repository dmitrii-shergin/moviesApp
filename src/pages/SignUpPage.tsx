import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/slices/userSlice';

function SignUpPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerSignUp = (
    email: string,
    password: string,
    event: React.SyntheticEvent,
  ) => {
    event.preventDefault();
    const id = '2';
    const newUser = {
      email,
      password,
      id,
      isAuth: false,
    };
    dispatch(setUser(newUser));
    navigate('/signIn');
  };

  return <Form title='Sign Up' handleSubmit={handlerSignUp} />;
}

export { SignUpPage };
