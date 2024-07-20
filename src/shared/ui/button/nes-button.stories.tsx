import type { BaseButtonProps } from '@/shared/ui/button/nes-button';
import { NesButton } from '@/shared/ui/button/nes-button';
import type { StoryObj } from '@storybook/react';

const story = {
  title: 'shared/button/base-button',
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
