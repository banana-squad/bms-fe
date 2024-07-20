import { NesIcon } from '@/shared/ui/icon/nes-icon';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/icon/NesIcon',
  component: NesIcon,
  args: {
    size: 'large',
    state: 'full',
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['heart', 'star', 'like'],
      description: '아이콘 타입',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '아이콘 크기',
    },
    state: {
      control: 'select',
      options: ['full', 'half', 'transparent', 'empty'],
      description: '아이콘 상태',
    },
  },
} satisfies Meta<typeof NesIcon>;

export default story;

type Story = StoryObj<typeof story>;

export const HeartIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'full',
  },
};

export const HalfHeartIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'half',
  },
};

export const TransparentHeartIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'transparent',
  },
};

export const EmptyHeartIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'empty',
  },
};

export const StarIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'full',
  },
};

export const HalfStarIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'half',
  },
};

export const TransparentStarIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'transparent',
  },
};

export const EmptyStarIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'empty',
  },
};

export const LikeIcon: Story = {
  args: {
    type: 'like',
    size: 'large',
    state: 'full',
  },
};

export const EmptyLikeIcon: Story = {
  args: {
    type: 'like',
    size: 'large',
    state: 'empty',
  },
};

export const SmallHeartIcon: Story = {
  args: {
    type: 'heart',
    size: 'small',
    state: 'full',
  },
};

export const MediumHeartIcon: Story = {
  args: {
    type: 'heart',
    size: 'medium',
    state: 'full',
  },
};
