import { NesIcon } from '@/shared/ui/icon/nes-icon';
import React from 'react';
import { NesBadge } from '@/shared/ui/badge/nes-badge';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/badge/NesBadge',
  component: NesBadge,
  args: {
    variant: 'default',
    split: false,
    icon: false,
    dark: false,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'success', 'warning', 'error'],
    },
    dark: {
      control: { type: 'boolean' },
    },
    split: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof NesBadge>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultBadge: Story = {
  args: {
    children: 'Default badge',
  },
};

export const DarkBadge: Story = {
  args: {
    dark: true,
    children: 'Dark Badge',
  },
};

export const PrimaryBadge: Story = {
  args: {
    variant: 'primary',
    children: 'Primary badge',
  },
};

export const SuccessBadge: Story = {
  args: {
    variant: 'success',
    children: 'success badge',
  },
};

export const WarningBadge: Story = {
  args: {
    variant: 'warning',
    children: 'warning badge',
  },
};

export const ErrorBadge: Story = {
  args: {
    variant: 'error',
    children: 'Error badge',
  },
};

export const SplitBadge: Story = {
  args: {
    split: true,
    children: (
      <>
        <span className="is-dark">npm</span>
        <span className="is-primary">1.1.0</span>
      </>
    ),
  },
};

export const IconBadge: Story = {
  args: {
    icon: true,
    children: (
      <>
        <span className="is-warning">
          <NesIcon type="star" size="small" />
        </span>
        <span className="is-primary">Icon badge</span>
      </>
    ),
  },
};
