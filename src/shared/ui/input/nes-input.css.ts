import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesInputVariants = cva(['nes-input'], {
  variants: {
    variant: {
      success: 'is-success',
      warning: 'is-warning',
      error: 'is-error',
      dark: 'is-dark',
    },
  },
});

export const nesInputWrapperVariants = cva(['nes-field'], {
  variants: {
    inline: {
      true: 'is-inline',
      false: '',
    },
  },
});

export type NesInputVariants = VariantProps<typeof nesInputVariants>;

export type NesInputWrapperVariants = VariantProps<typeof nesInputWrapperVariants>;
