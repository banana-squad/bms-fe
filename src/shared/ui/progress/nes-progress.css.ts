import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesProgressVariants = cva(['nes-progress'], {
  variants: {
    variant: {
      primary: 'is-primary',
      success: 'is-success',
      warning: 'is-warning',
      error: 'is-error',
      pattern: 'is-pattern',
    },
  },
});

export type NesProgressVariants = VariantProps<typeof nesProgressVariants>;
