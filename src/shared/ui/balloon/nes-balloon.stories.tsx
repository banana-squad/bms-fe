import { NesBalloon } from '@/shared/ui/balloon/nes-balloon';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/balloon/nes-balloon',
  component: NesBalloon,
  args: {
    dark: false,
    align: 'default',
  },
} satisfies Meta<typeof NesBalloon>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultBalloon: Story = {
  args: {
    children: 'Default Balloon',
  },
};

export const DarkBalloon: Story = {
  args: {
    dark: true,
    children: 'Dark Balloon',
  },
};

export const RightBalloon: Story = {
  args: {
    align: 'right',
    children: 'Right balloon',
  },
};

export const DarkRightBalloon: Story = {
  args: {
    dark: true,
    align: 'right',
    children: 'Dark right balloon',
  },
};

export const LeftBalloon: Story = {
  args: {
    align: 'left',
    children: 'Left balloon',
  },
};

export const DarkLeftBalloon: Story = {
  args: {
    dark: true,
    align: 'left',
    children: 'Dark left balloon',
  },
};
