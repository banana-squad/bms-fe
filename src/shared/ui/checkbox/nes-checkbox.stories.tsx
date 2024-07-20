import { NesCheckbox } from '@/shared/ui/checkbox/nes-checkbox';
import { NesCheckboxGroup } from '@/shared/ui/checkbox/nes-checkbox-group';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const story = {
  title: 'shared/ui/checkbox/nes-checkbox',
  component: NesCheckboxGroup,
  args: {
    name: 'nes-checkbox',
    dark: false,
    disabled: false,
    label: '',
    values: [],
    onChange: () => {},
  },
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    values: {
      type: {
        name: 'array',
        value: { name: 'string' },
      },
      control: { type: 'object' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    dark: {
      control: { type: 'boolean' },
    },
    onChange: {
      action: 'changed',
    },
  },
  render(args) {
    const [checkedValues, setCheckedValues] = useState(args.values);

    const handleChange = (values: string[]) => {
      setCheckedValues(values);
      console.log('### handleChange', values);
    };

    return (
      <NesCheckboxGroup {...args} values={checkedValues} onChange={handleChange}>
        <NesCheckbox value="1">1</NesCheckbox>
        <NesCheckbox value="2">2</NesCheckbox>
        <NesCheckbox value="3">3</NesCheckbox>
        <NesCheckbox value="4">4</NesCheckbox>
      </NesCheckboxGroup>
    );
  },
} satisfies Meta<typeof NesCheckboxGroup>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultCheckbox: Story = {
  args: {
    label: 'Default checkbox',
  },
};

export const DarkCheckbox: Story = {
  args: {
    dark: true,
    label: 'Dark',
  },
};
