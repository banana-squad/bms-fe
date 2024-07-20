import { NesModal } from '@/shared/ui/modal/nes-modal/index';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/dialog/nes-modal',
  component: NesModal,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
      description: '다이얼로그의 스타일 변형',
    },
    dark: {
      control: 'boolean',
      description: '다이얼로그의 다크 모드',
    },
    rounded: {
      control: 'boolean',
      description: '다이얼로그의 둥근 모서리',
    },
    title: {
      control: 'text',
      description: '다이얼로그의 제목',
    },
    children: {
      control: 'text',
      description: '다이얼로그의 내용',
    },
  },
} satisfies Meta<typeof NesModal>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultDialog: Story = {
  args: {
    title: 'Dialog',
    children: 'Alert: this is a dialog.',
  },
};

export const DarkDialog: Story = {
  args: {
    title: 'Dark dialog',
    children: 'Alert: this is a dialog.',
    dark: true,
  },
};

export const RoundedDialog: Story = {
  args: {
    title: 'Rounded dialog',
    children: 'Alert: this is a dialog.',
    rounded: true,
  },
};

export const DarkRoundedDialog: Story = {
  args: {
    title: 'Dark and Rounded dialog',
    children: 'Alert: this is a dialog.',
    dark: true,
    rounded: true,
  },
};
