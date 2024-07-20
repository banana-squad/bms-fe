import { NesAvatar } from '@/shared/ui/avatar/nes-avatar';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/avatar/nes-avatar',
  component: NesAvatar,
  args: {
    size: 'default',
    rounded: false,
    src: '/banana.png',
    alt: '',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small', 'medium', 'large'],
      description: '아바타의 크기',
    },
    rounded: {
      control: 'boolean',
      description: '아바타의 둥근 모서리 여부',
    },
    src: {
      control: 'text',
      description: '아바타의 이미지 소스 URL',
    },
    alt: {
      control: 'text',
      description: '아바타의 대체 텍스트',
    },
  },
} satisfies Meta<typeof NesAvatar>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultAvatar: Story = {
  args: {
    size: 'default',
    rounded: false,
  },
};

export const SmallAvatar: Story = {
  args: {
    size: 'small',
    rounded: false,
  },
};

export const MediumAvatar: Story = {
  args: {
    size: 'medium',
    rounded: false,
  },
};

export const LargeAvatar: Story = {
  args: {
    size: 'large',
    rounded: false,
  },
};

export const RoundedAvatar: Story = {
  args: {
    size: 'default',
    rounded: true,
  },
};

export const RoundedSmallAvatar: Story = {
  args: {
    size: 'small',
    rounded: true,
  },
};

export const RoundedMediumAvatar: Story = {
  args: {
    size: 'medium',
    rounded: true,
  },
};

export const RoundedLargeAvatar: Story = {
  args: {
    size: 'large',
    rounded: true,
  },
};
