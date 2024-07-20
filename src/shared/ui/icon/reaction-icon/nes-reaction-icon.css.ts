import { NesReactionIconProps } from '@/shared/ui/icon/reaction-icon/nes-reaction-icon';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesReactionIconVariants = cva(['nes-icon'], {
  variants: {
    type: {
      heart: 'heart',
      star: 'star',
      like: 'like',
    },
    size: {
      small: 'is-small',
      medium: 'is-medium',
      large: 'is-large',
    },
    state: {
      full: '',
      half: 'is-half',
      transparent: 'is-transparent',
      empty: 'is-empty',
    },
  },
  defaultVariants: {
    size: 'large',
    state: 'full',
  },
});

export type NesReactionIconVariants = VariantProps<typeof nesReactionIconVariants>;
