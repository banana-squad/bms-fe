import type { NesSocialIconProps } from '@/shared/ui/icon/social-icon/nes-social-icon';
import { NesSocialIcon } from '@/shared/ui/icon/social-icon/nes-social-icon';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/icon/nes-social-icon',
  component: NesSocialIcon,
  args: {
    size: 'large',
  },
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['twitter', 'facebook', 'instagram', 'github', 'google', 'gmail', 'medium', 'linkedin', 'twitch', 'youtube', 'reddit', 'whatsapp'] as NesSocialIconProps['type'][],
      description: '소셜 아이콘 타입',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
      description: '아이콘 크기',
    },
  },
} satisfies Meta<typeof NesSocialIcon>;

export default story;

type Story = StoryObj<typeof story>;

export const TwitterIcon: Story = {
  args: {
    type: 'twitter',
    size: 'large',
  },
};

export const FacebookIcon: Story = {
  args: {
    type: 'facebook',
    size: 'large',
  },
};

export const InstagramIcon: Story = {
  args: {
    type: 'instagram',
    size: 'large',
  },
};

export const GithubIcon: Story = {
  args: {
    type: 'github',
    size: 'large',
  },
};

export const GoogleIcon: Story = {
  args: {
    type: 'google',
    size: 'large',
  },
};

export const GmailIcon: Story = {
  args: {
    type: 'gmail',
    size: 'large',
  },
};

export const MediumIcon: Story = {
  args: {
    type: 'medium',
    size: 'large',
  },
};

export const LinkedinIcon: Story = {
  args: {
    type: 'linkedin',
    size: 'large',
  },
};

export const TwitchIcon: Story = {
  args: {
    type: 'twitch',
    size: 'large',
  },
};

export const YoutubeIcon: Story = {
  args: {
    type: 'youtube',
    size: 'large',
  },
};

export const RedditIcon: Story = {
  args: {
    type: 'reddit',
    size: 'large',
  },
};

export const WhatsappIcon: Story = {
  args: {
    type: 'whatsapp',
    size: 'large',
  },
};

export const SmallYoutubeIcon: Story = {
  args: {
    type: 'youtube',
    size: 'small',
  },
};

export const MediumYoutubeIcon: Story = {
  args: {
    type: 'youtube',
    size: 'medium',
  },
};
