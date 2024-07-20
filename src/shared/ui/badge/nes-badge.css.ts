import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesBadgeVariants = cva(['nes-badge'], {
  variants: {
    split: {
      true: 'is-splited',
      false: '',
    },
    icon: {
      true: 'is-icon',
      false: '',
    },
    dark: {
      true: 'is-dark',
      false: '',
    },
  },
});

export const nesBadgeTextVariants = cva(null, {
  variants: {
    variant: {
      primary: 'is-primary',
      success: 'is-success',
      warning: 'is-warning',
      error: 'is-error',
      default: '',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
});

export type NesBadgeVariants = VariantProps<typeof nesBadgeVariants>;

export type NesBadgeTextVariants = VariantProps<typeof nesBadgeTextVariants>;
