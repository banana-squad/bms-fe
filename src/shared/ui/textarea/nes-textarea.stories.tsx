import React, { useState } from 'react';
import { NesTextarea } from '@/shared/ui/textarea/nes-textarea';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/textarea/nes-textarea',
  component: NesTextarea,
  args: {
    value: '',
    label: '',
    onChange: () => {
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
  render(args) {
    const [value, setValue] = useState(args.value);

    const handleChange = (value: string) => {
      setValue(value);
      args.onChange(value);
    };

    return <NesTextarea {...args} value={value} onChange={handleChange} />;
  },
} satisfies Meta<typeof NesTextarea>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultTextarea: Story = {
  args: {
    label: 'DefaultTextarea',
  },
};
