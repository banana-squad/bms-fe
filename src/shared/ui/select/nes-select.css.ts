import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesSelectVariants = cva(['nes-select'], {
  variants: {
    variant: {
      default: '',
      success: 'is-success',
      warning: 'is-warning',
      error: 'is-error',
    },
    dark: {
      true: 'is-dark',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type NesSelectVariants = VariantProps<typeof nesSelectVariants>;
