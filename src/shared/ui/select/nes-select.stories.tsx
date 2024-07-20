import type { NesSelectProps } from '@/shared/ui/select/nes-select';
import { NesSelect } from '@/shared/ui/select/nes-select';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/select/nes-elect',
  component: NesSelect,
  args: {
    id: 'nes-select',
    label: '',
    variant: 'default',
    options: [
      { value: '0', label: 'To be' },
      { value: '1', label: 'Not to be' },
    ],
    defaultOption: {
      value: '',
      label: 'Select an option',
    },
    dark: false,
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'success', 'warning', 'error'] as NesSelectProps['variant'][],
    },
    dark: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof NesSelect>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultSelect: Story = {
  args: {
    label: 'Default select',
  },
};

export const SuccessSelect: Story = {
  args: {
    label: 'Success select',
    variant: 'success',
  },
};

export const WarningSelect: Story = {
  args: {
    label: 'Warning select',
    variant: 'warning',
  },
};

export const ErrorSelect: Story = {
  args: {
    label: 'Error select',
    variant: 'error',
  },
};

export const DarkSelect: Story = {
  args: {
    label: 'Dark select',
    dark: true,
  },
};
