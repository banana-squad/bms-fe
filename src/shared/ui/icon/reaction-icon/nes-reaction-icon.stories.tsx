import type { NesReactionIconProps } from '@/shared/ui/icon/reaction-icon/nes-reaction-icon';
import { NesReactionIcon } from '@/shared/ui/icon/reaction-icon/nes-reaction-icon';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/icon/nes-reaction-icon',
  component: NesReactionIcon,
  args: {
    size: 'large',
    state: 'full',
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['heart', 'star', 'like'] as NesReactionIconProps['type'][],
      description: '아이콘 타입',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'] as NesReactionIconProps['size'][],
      description: '아이콘 크기',
    },
    state: {
      control: 'select',
      options: ['full', 'half', 'transparent', 'empty'] as NesReactionIconProps['state'][],
      description: '아이콘 상태',
    },
  },
} satisfies Meta<typeof NesReactionIcon>;

export default story;

type Story = StoryObj<typeof story>;

export const HeartReactionIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'full',
  },
};

export const HalfHeartReactionIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'half',
  },
};

export const TransparentHeartReactionIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'transparent',
  },
};

export const EmptyHeartReactionIcon: Story = {
  args: {
    type: 'heart',
    size: 'large',
    state: 'empty',
  },
};

export const StarReactionIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'full',
  },
};

export const HalfStarReactionIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'half',
  },
};

export const TransparentStarReactionIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'transparent',
  },
};

export const EmptyStarReactionIcon: Story = {
  args: {
    type: 'star',
    size: 'large',
    state: 'empty',
  },
};

export const LikeReactionIcon: Story = {
  args: {
    type: 'like',
    size: 'large',
    state: 'full',
  },
};

export const EmptyLikeReactionIcon: Story = {
  args: {
    type: 'like',
    size: 'large',
    state: 'empty',
  },
};

export const SmallHeartReactionIcon: Story = {
  args: {
    type: 'heart',
    size: 'small',
    state: 'full',
  },
};

export const MediumHeartReactionIcon: Story = {
  args: {
    type: 'heart',
    size: 'medium',
    state: 'full',
  },
};
