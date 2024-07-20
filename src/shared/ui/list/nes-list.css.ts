import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesListVariants = cva(['nes-list'], {
  variants: {
    type: {
      disc: 'is-disc',
      circle: 'is-circle',
    },
  },
});

export type NesListVariants = VariantProps<typeof nesListVariants>;
