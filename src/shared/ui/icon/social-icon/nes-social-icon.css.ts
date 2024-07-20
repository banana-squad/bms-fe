import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesSocialIconVariants = cva(['nes-icon'], {
  variants: {
    type: {
      facebook: 'facebook',
      github: 'github',
      gmail: 'gmail',
      google: 'google',
      instagram: 'instagram',
      linkedin: 'linkedin',
      medium: 'medium',
      reddit: 'reddit',
      twitch: 'twitch',
      twitter: 'twitter',
      whatsapp: 'whatsapp',
      youtube: 'youtube',
    },
    size: {
      small: 'is-small',
      medium: 'is-medium',
      large: 'is-large',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export type NesSocialIconVariants = VariantProps<typeof nesSocialIconVariants>;
