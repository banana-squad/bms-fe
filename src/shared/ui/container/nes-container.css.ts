import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesContainerVariants = cva(['nes-container'], {
  variants: {
    dark: {
      true: 'is-dark',
      false: '',
    },
    withTitle: {
      true: 'with-title',
      false: '',
    },
    centered: {
      true: 'is-centered',
      false: '',
    },
    rounded: {
      true: 'is-rounded',
      false: '',
    },
  },
});

export type NesContainerVariants = VariantProps<typeof nesContainerVariants>;
