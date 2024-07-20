import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesButtonVariants = cva(['nes-btn'], {
  variants: {
    variant: {
      primary: 'is-primary',
      success: 'is-success',
      warning: 'is-warning',
      error: 'is-error',
    },
    disabled: {
      true: 'is-disabled',
      false: '',
    },
  },
});

export type NesButtonVariants = VariantProps<typeof nesButtonVariants>;
