import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
// import PropTypes from 'prop-types';
import { Form, Input, ButtonCreator, RadioButtonsGroup } from '../components/UI';


const schema = yup.object().shape({
  FirstName: yup.string()
    .required('Hey you forget about first name'),
  LastName: yup.string()
    .required('Hey you forget about last name'),
  Email: yup.string().email('You should write correct email')
    .required('Hey you forget about email'),
  password: yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
  repassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords are different')
    .required('Repeat Password please'),
  UserName: yup.string()
    .required('Hey you forget about user name'),
}).required();

function SignUp() {

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const submitClick = (data) => {
    console.log(data);
    reset();
  };
  return(
    <Container maxWidth='xs'>
      <Typography component="h2" variant="h5" sx={{textAlign: 'center'}}>
       Registration form
      </Typography>
      <Form onSubmit={handleSubmit(submitClick)}>
        <Input {...register('FirstName')} id='firstName'
          type='text' label='First Name' error={!!errors.FirstName}
          helperText={errors?.FirstName?.message}
        />
        <Input {...register('LastName')} id='lastName' 
          type='text' label='Last Name' error={!!errors.LastName}
          helperText={errors?.LastName?.message}
        />
        <RadioButtonsGroup {...register('Gender')} id='Gender'/>
        <Input {...register('Email')}  id='email'
          type='email' label='Email' error={!!errors.Email}
          helperText={errors?.Email?.message}
        />
        <Input {...register('password')} id='password'
          type='password' label='Password' error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Input {...register('repassword')} id='repassword'
          type='password' label='Repeat password ' error={!!errors.repassword}
          helperText={errors?.repassword?.message}
        />
        <Input {...register('UserName')} id='UserName' 
          type='text' label='User Name' error={!!errors.UserName}
          helperText={errors?.UserName?.message}
        />
        <Typography component="div" textAlign="center" marginTop="15px">
          <ButtonCreator type='submit'>Register</ButtonCreator>
        </Typography>
      </Form>
    </Container>
  );

}

export default SignUp;