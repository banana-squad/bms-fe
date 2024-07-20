import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesOtherIconVariants = cva(['nes-icon'], {
  variants: {
    type: {
      close: 'close',
      trophy: 'trophy',
      coin: 'coin',
      nes: 'nes-logo',
      nesJp: 'nes-jp-logo',
      snes: 'snes-logo',
      snesJp: 'snes-jp-logo',
      octocat: 'octocat animate',
      smartphone: 'nes-smartphone',
      phone: 'nes-phone',
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
