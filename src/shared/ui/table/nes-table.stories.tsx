import { NesTable } from '@/shared/ui/table/nes-table';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/table/NesTable',
  component: NesTable,
  args: {
    headers: [
      'Header 1',
      'Header 2',
      'Header 3',
      'Header 4',
    ],
    data: [
      [
        'Thou hast had a good morning',
        'Thou hast had a good afternoon',
        'Thou hast had a good evening',
        'Thou hast had a good night',
      ],
      [
        'Thou hast had a good morning',
        'Thou hast had a good afternoon',
        'Thou hast had a good evening',
        'Thou hast had a good night',
      ],
    ],
    bordered: false,
    centered: false,
    dark: false,
  },
  argTypes: {
    headers: {
      type: {
        name: 'array',
        value: { name: 'string' },
      },
      control: { type: 'object' },
    },
    data: {
      type: {
        name: 'array',
        value: { name: 'string' },
      },
      control: { type: 'object' },
    },
    bordered: {
      control: { type: 'boolean' },
    },
    centered: {
      control: { type: 'boolean' },
    },
    dark: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof NesTable>;

export default story;

type Story = StoryObj<typeof story>;

export const BorderedTable: Story = {
  args: {
    bordered: true,
  },
};

export const BorderedCenteredTable: Story = {
  args: {
    bordered: true,
    centered: true,
  },
};

export const DarkTable: Story = {
  args: {
    dark: true,
  },
};

export const BorderedDarkTable: Story = {
  args: {
    bordered: true,
    dark: true,
  },
};

export const BorderedCenteredDarkTable: Story = {
  args: {
    bordered: true,
    dark: true,
    centered: true,
  },
};
