import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesAvatarVariants = cva(['nes-avatar'], {
  variants: {
    size: {
      small: 'is-small',
      medium: 'is-medium',
      large: 'is-large',
      default: '',
    },
    rounded: {
      true: 'is-rounded',
      false: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type NesAvatarVariants = VariantProps<typeof nesAvatarVariants>;
