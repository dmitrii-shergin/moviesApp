import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../components/Form';

function SignInPage() {
  const navigate = useNavigate();

  const handlerSignIn = (
    credentials: {
      email: string;
      password: string;
    },
    event: React.SyntheticEvent,
  ) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(() => navigate('/films'))
      .catch(() => console.log('Invalid user!'));
  };

  return <Form title='Sign In' handleSubmit={handlerSignIn} />;
}

export { SignInPage };
