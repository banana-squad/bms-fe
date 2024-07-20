import { NesRadio } from '@/shared/ui/radio/nes-radio';
import { NesRadioGroup } from '@/shared/ui/radio/nes-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const story = {
  title: 'shared/ui/radio/nes-radio',
  component: NesRadioGroup,
  render(args) {
    const [value, setValue] = useState<string>(args.value);

    const handleChange = (value: string) => {
      setValue(value);
      console.log('### handleChange', value);
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
    onChange: ()=> {},
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
