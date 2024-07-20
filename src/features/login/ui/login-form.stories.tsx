import { LoginForm } from '@/features/login/ui/login-form';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'features/login/ui/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultLoginForm: Story = {};
