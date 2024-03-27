import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../components/Form';

function SignUpPage() {
  const navigate = useNavigate();

  const handlerSignUp = (
    credentials: {
      email: string;
      password: string;
    },
    event: React.SyntheticEvent,
  ) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password,
    )
      .then(() => navigate('/films'))
      .catch(console.error);
  };

  return <Form title='Sign Up' handleSubmit={handlerSignUp} />;
}

export { SignUpPage };
