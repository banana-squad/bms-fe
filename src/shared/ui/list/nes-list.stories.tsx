import type { NesListProps } from '@/shared/ui/list/nes-list';
import { NesList } from '@/shared/ui/list/nes-list';
import { NesListItem } from '@/shared/ui/list/nes-list-item';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/list/BaseList',
  component: NesList,
  args: {
    type: 'circle',
  },
  argTypes: {
    type: {
      options: ['circle', 'disc'] as NesListProps['type'][],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof NesList>;

export default story;

type Story = StoryObj<typeof story>;

export const DiscList: Story = {
  args: {
    type: 'disc',
  },
  render(args) {
    return (
      <NesList type={args.type}>
        <NesListItem>Good morning.</NesListItem>
        <NesListItem>Thou hast had a good night's sleep, I hope.</NesListItem>
        <NesListItem>Thou hast had a good afternoon</NesListItem>
        <NesListItem>Good night.</NesListItem>
      </NesList>
    );
  },
};

export const CircleList: Story = {
  args: {
    type: 'circle',
  },
  render(args) {
    return (
      <NesList type={args.type}>
        <NesListItem>Good morning.</NesListItem>
        <NesListItem>Thou hast had a good night's sleep, I hope.</NesListItem>
        <NesListItem>Thou hast had a good afternoon</NesListItem>
        <NesListItem>Good night.</NesListItem>
      </NesList>
    );
  },
};
