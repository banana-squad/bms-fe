import { LoginForm } from '@/features/login/ui/login-form';
import { createFileRoute } from '@tanstack/react-router';
import type { FunctionComponent } from 'react';

export const Login: FunctionComponent = () => (
  <LoginForm />
);

export const Route = createFileRoute('/login/')({
  component: Login,
});
