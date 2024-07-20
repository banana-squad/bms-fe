import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesTextVariants = cva(['nes-text'], {
  variants: {
    variant: {
      primary: 'is-primary',
      success: 'is-success',
      warning: 'is-warning',
      error: 'is-error',
      default: '',
    },
    disabled: {
      true: 'is-disabled',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type NesTextVariants = VariantProps<typeof nesTextVariants>;
