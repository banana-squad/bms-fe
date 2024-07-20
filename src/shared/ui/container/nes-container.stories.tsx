import { NesContainer } from '@/shared/ui/container/nes-container';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/container/nes-container',
  component: NesContainer,
  args: {
    dark: false,
    rounded: false,
    centered: false,
    title: '',
    children: 'Good morning. Thou hast had a good night\'s sleep, I hope.',
  },
  argTypes: {
    dark: {
      control: 'boolean',
      description: '컨테이너의 다크 모드',
    },
    rounded: {
      control: 'boolean',
      description: '컨테이너의 둥근 모서리',
    },
    title: {
      control: 'text',
      description: '컨테이너의 타이틀',
    },
    children: {
      control: 'text',
      description: '컨테이너의 내용',
    },
  },
} satisfies Meta<typeof NesContainer>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultContainer: Story = {
  args: {
  },
};

export const CenteredContainer: Story = {
  args: {
    centered: true,
  },
};

export const RoundedContainer: Story = {
  args: {
    rounded: true,
  },
};

export const WithTitleContainer: Story = {
  args: {
    title: 'With title container',
  },
};

export const WithTitleCenteredContainer: Story = {
  args: {
    title: 'With title centered container',
    centered: true,
  },
};

export const WithTitleCenteredRoundedContainer: Story = {
  args: {
    title: 'With title rounded container',
    centered: true,
    rounded: true,
  },
};

export const DarkContainer: Story = {
  args: {
    dark: true,
  },
};

export const CenteredDarkContainer: Story = {
  args: {
    dark: true,
    centered: true,
  },
};

export const RoundedDarkContainer: Story = {
  args: {
    dark: true,
    rounded: true,
  },
};

export const WithTitleDarkContainer: Story = {
  args: {
    dark: true,
    title: 'With title container',
  },
};

export const WithTitleCenteredDarkContainer: Story = {
  args: {
    dark: true,
    title: 'With title centered container',
    centered: true,
  },
};

export const WithTitleCenteredRoundedDarkContainer: Story = {
  args: {
    dark: true,
    title: 'With title rounded container',
    centered: true,
    rounded: true,
  },
};
