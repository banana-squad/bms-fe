import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesRadioVariants = cva(['nes-radio'], {
  variants: {
    dark: {
      true: 'is-dark',
      false: '',
    },
  },
});

export type NesRadioVariants = VariantProps<typeof nesRadioVariants>;
