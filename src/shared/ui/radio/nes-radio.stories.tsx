import { NesRadio } from '@/shared/ui/radio/nes-radio';
import { NesRadioGroup } from '@/shared/ui/radio/nes-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

const story = {
  title: 'shared/ui/radio/nes-radio',
  component: NesRadioGroup,
  render(args) {
    const [value, setValue] = useState(() => args.value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      console.log('### handleChange', e.target.value);
    };

    return (
      <NesRadioGroup {...args} value={value} onChange={handleChange}>
        <NesRadio value="1">1</NesRadio>
        <NesRadio value="2">2</NesRadio>
      </NesRadioGroup>
    );
  },
  args: {
    label: '라디오',
    name: 'radio',
    dark: false,
    disabled: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    dark: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof NesRadioGroup>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultRadio: Story = {
  args: {
    value: '1',
  },
};

export const DarkRadio: Story = {
  args: {
    dark: true,
    value: '1',
  },
};
