import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesTableVariants = cva(['nes-table'], {
  variants: {
    bordered: {
      true: 'is-bordered',
      false: '',
    },
    centered: {
      true: 'is-centered',
      false: '',
    },
    dark: {
      true: 'is-dark',
      false: '',
    },
  },
});

export type NesTableVariants = VariantProps<typeof nesTableVariants>;
