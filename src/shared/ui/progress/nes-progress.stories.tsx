import { NesProgress } from '@/shared/ui/progress/nes-progress';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/progress/NesProgress',
  component: NesProgress,
  args: {
    value: 0,
    max: 100,
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    max: {
      control: { type: 'range', min: 0, max: 100 },
    },
  },
} satisfies Meta<typeof NesProgress>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultProgress: Story = {
  args: {
    value: 90,
  },
};

export const PrimaryProgress: Story = {
  args: {
    variant: 'primary',
    value: 80,
  },
};

export const SuccessProgress: Story = {
  args: {
    variant: 'success',
    value: 50,
  },
};

export const WarningProgress: Story = {
  args: {
    variant: 'warning',
    value: 30,
  },
};

export const ErrorProgress: Story = {
  args: {
    variant: 'error',
    value: 10,
  },
};

export const PatternProgress: Story = {
  args: {
    variant: 'pattern',
    value: 50,
  },
};
