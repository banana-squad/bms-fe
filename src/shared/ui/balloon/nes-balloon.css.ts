import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesBalloonVariants = cva(['nes-balloon'], {
  variants: {
    align: {
      left: 'from-left',
      right: 'from-right',
      default: '',
    },
    dark: {
      true: 'is-dark',
      false: '',
    },
  },
  defaultVariants: {
    align: 'default',
  },
});

export type NesBalloonVariants = VariantProps<typeof nesBalloonVariants>;
