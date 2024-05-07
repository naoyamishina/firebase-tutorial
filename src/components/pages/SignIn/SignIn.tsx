'use client';
import { Stack } from '@mantine/core';
import { SignInWithEmailAndPasswordForm } from '@/components/forms/auth/SignInWithEmailAndPassword';

export const SignIn = () => {
  return (
    <Stack maw={500} mx='auto' py='lg'>
      <SignInWithEmailAndPasswordForm />
    </Stack>
  );
};
