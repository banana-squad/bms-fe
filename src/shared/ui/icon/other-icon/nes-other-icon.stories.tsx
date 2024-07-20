import { NesOtherIcon } from '@/shared/ui/icon/other-icon/nes-other-icon';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/icon/nes-other-icon',
  component: NesOtherIcon,
  argTypes: {
    type: {
      control: 'select',
      options: ['close', 'trophy', 'coin'],
      description: '아이콘 타입',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '아이콘 크기',
    },
  },
} satisfies Meta<typeof NesOtherIcon>;

export default story;

type Story = StoryObj<typeof story>;

export const CloseIcon: Story = {
  args: {
    type: 'close',
    size: 'large',
  },
};

export const TrophyIcon: Story = {
  args: {
    type: 'trophy',
    size: 'large',
  },
};

export const CoinIcon: Story = {
  args: {
    type: 'coin',
    size: 'large',
  },
};
