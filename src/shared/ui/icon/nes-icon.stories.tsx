import type { NesIconProps } from '@/shared/ui/icon/nes-icon';
import { NesIcon } from '@/shared/ui/icon/nes-icon';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/icon/nes-icon',
  component: NesIcon,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['nes', 'nes-jp', 'snes', 'snes-jp', 'nes-octocat', 'nes-smartphone', 'nes-phone'] as NesIconProps['type'][],
      description: '아이콘 타입',
    },
  },
} satisfies Meta<typeof NesIcon>;

export default story;

type Story = StoryObj<typeof story>;

export const NesLogo: Story = {
  args: {
    type: 'nes',
  },
};

export const NesJpLogo: Story = {
  args: {
    type: 'nes-jp',
  },
};

export const SnesLogo: Story = {
  args: {
    type: 'snes',
  },
};

export const SnesJpLogo: Story = {
  args: {
    type: 'snes-jp',
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

export const MarioIcon: Story = {
  args: {
    type: 'mario',
  },
};

export const AshIcon: Story = {
  args: {
    type: 'ash',
  },
};

export const PokeballIcon: Story = {
  args: {
    type: 'pokeball',
  },
};

export const BulbasaurIcon: Story = {
  args: {
    type: 'bulbasaur',
  },
};

export const CharmanderIcon: Story = {
  args: {
    type: 'charmander',
  },
};

export const SquirtleIcon: Story = {
  args: {
    type: 'squirtle',
  },
};

export const KirbyIcon: Story = {
  args: {
    type: 'kirby',
  },
};
