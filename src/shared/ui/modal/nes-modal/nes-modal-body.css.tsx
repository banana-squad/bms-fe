import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesModalBodyVariants = cva(['text-lg']);

export type NesModalBodyVariants = VariantProps<typeof nesModalBodyVariants>;
