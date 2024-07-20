import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesModalVariants = cva(['nes-dialog border-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0'], {
  variants: {
    dark: {
      true: 'is-dark',
      false: '',
    },
    rounded: {
      true: 'is-rounded',
      false: '',
    },
  },
  defaultVariants: {
    dark: false,
    rounded: false,
  },
});

export const nesModalFormStyle = cva(['flex flex-col gap-3']);

export type NesModalVariants = VariantProps<typeof nesModalVariants>;

export type NesModalFormStyle = VariantProps<typeof nesModalFormStyle>;
