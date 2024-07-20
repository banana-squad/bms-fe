import { NesText } from '@/shared/ui/text/nes-text';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/text/NesText',
  component: NesText,
  args: {
    variant: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'success', 'warning', 'error', 'disabled'],
      description: '텍스트의 스타일 변형',
    },
    children: {
      control: { type: 'text' },
      description: '텍스트 내용',
    },
  },
} satisfies Meta<typeof NesText>;

export default story;

type Story = StoryObj<typeof story>;

export const PrimaryText: Story = {
  args: {
    variant: 'primary',
    children: 'Primary text',
  },
};

export const SuccessText: Story = {
  args: {
    variant: 'success',
    children: 'Success text',
  },
};

export const WarningText: Story = {
  args: {
    variant: 'warning',
    children: 'Warning text',
  },
};

export const ErrorText: Story = {
  args: {
    variant: 'error',
    children: 'Error text',
  },
};

export const DisabledText: Story = {
  args: {
    disabled: true,
    children: 'Disabled text',
  },
};
