import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesOtherIconVariants = cva(['nes-icon'], {
  variants: {
    type: {
      close: 'close',
      trophy: 'trophy',
      coin: 'coin',
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

export type NesOtherIconVariants = VariantProps<typeof nesOtherIconVariants>;
