import type { NesInputProps } from '@/shared/ui/input/nes-input';
import { NesInput } from '@/shared/ui/input/nes-input';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/input/nes-input',
  component: NesInput,
  args: {
    inline: false,
    disabled: false,
    children: '텍스트',
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'warning', 'error'] as NesInputProps['variant'][],
      control: { type: 'inline-radio' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof NesInput>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultInput: Story = {
  args: {},
};

export const SuccessInput: Story = {
  args: {
    variant: 'success',
  },
};

export const WarningInput: Story = {
  args: {
    variant: 'warning',
  },
};

export const ErrorInput: Story = {
  args: {
    variant: 'error',
  },
};

export const InlineInput: Story = {
  args: {
    inline: true,
  },
};

export const DisabledInput: Story = {
  args: {
    disabled: true,
  },
};

export const LabelInput: Story = {
  args: {
    label: 'label',
  },
};
