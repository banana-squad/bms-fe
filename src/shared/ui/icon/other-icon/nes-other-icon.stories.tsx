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
  },
};

export const TrophyIcon: Story = {
  args: {
    type: 'trophy',
  },
};

export const CoinIcon: Story = {
  args: {
    type: 'coin',
  },
};

export const NesIcon: Story = {
  args: {
    type: 'nes',
  },
};

export const NesJpIcon: Story = {
  args: {
    type: 'nesJp',
  },
};

export const SnesIcon: Story = {
  args: {
    type: 'snes',
  },
};

export const SnesJpIcon: Story = {
  args: {
    type: 'snesJp',
  },
};

export const OctocatIcon: Story = {
  args: {
    type: 'octocat',
  },
};

export const SmartphoneIcon: Story = {
  args: {
    type: 'smartphone',
  },
};

export const PhoneIcon: Story = {
  args: {
    type: 'phone',
  },
};

export const MediumCloseIcon: Story = {
  args: {
    type: 'close',
    size: 'medium',
  },
};

export const SmallCloseIcon: Story = {
  args: {
    type: 'close',
    size: 'small',
  },
};
