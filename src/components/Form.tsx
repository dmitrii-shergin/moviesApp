import { useState } from 'react';
import { TextField, Typography, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  title: string;
  handleSubmit: (
    creddentials: {
      email: string;
      password: string;
    },
    event: React.SyntheticEvent,
  ) => void;
}

function Form({ title, handleSubmit }: FormProps) {
  const [inputCredentials, setInputCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCredentials({
      ...inputCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const closeFormHandler = () => {
    navigate(-1);
  };

  return (
    <Stack
      component='form'
      onSubmit={(event) => handleSubmit(inputCredentials, event)}
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
        value={inputCredentials.email}
        onChange={formHandler}
        name='email'
      />
      <TextField
        fullWidth
        placeholder='Password'
        variant='standard'
        value={inputCredentials.password}
        onChange={formHandler}
        name='password'
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
