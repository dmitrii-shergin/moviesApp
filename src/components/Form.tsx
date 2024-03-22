import { useState } from 'react';
import { TextField, Typography, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  title: string;
  handleSubmit: (
    email: string,
    password: string,
    event: React.SyntheticEvent,
  ) => void;
}

function Form({ title, handleSubmit }: FormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const closeFormHandler = () => {
    navigate(-1);
  };

  return (
    <Stack
      component='form'
      onSubmit={(event) => handleSubmit(email, password, event)}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'white',
        p: 6,
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography variant='h5'>{title}</Typography>
      <Button
        onClick={closeFormHandler}
        sx={{ position: 'fixed', right: 0, top: 0 }}
      >
        Close
      </Button>
      <TextField
        fullWidth
        placeholder='Username'
        variant='standard'
        value={email}
        onChange={emailHandler}
      />
      <TextField
        fullWidth
        placeholder='Password'
        variant='standard'
        value={password}
        onChange={passwordHandler}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='info'
        size='large'
      >
        {title}
      </Button>
    </Stack>
  );
}

export { Form };
