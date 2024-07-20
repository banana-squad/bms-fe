import type { BaseButtonProps } from '@/shared/ui/button/nes-button';
import { NesButton } from '@/shared/ui/button/nes-button';
import type { StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/button/nes-button',
  component: NesButton,
  args: {
    variant: 'default',
    disabled: false,
    children: '버튼',
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'success', 'warning', 'error'] as BaseButtonProps['variant'][],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default story;

type Story = StoryObj<typeof story>;

export const DefaultButton: Story = {
  args: {
    children: 'Default Button',
  },
};

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const SuccessButton: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const WarningButton: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const ErrorButton: Story = {
  args: {
    variant: 'error',
    children: 'Error Button',
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
