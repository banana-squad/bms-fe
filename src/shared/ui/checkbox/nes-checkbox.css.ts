import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesCheckboxVariants = cva(['nes-checkbox'], {
  variants: {
    dark: {
      true: 'is-dark',
      false: '',
    },
  },
});

export type NesCheckboxVariants = VariantProps<typeof nesCheckboxVariants>;
