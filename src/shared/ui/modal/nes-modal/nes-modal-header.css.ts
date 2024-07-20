import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesModalHeaderVariants = cva(['text-2xl']);

export type NesModalHeaderVariants = VariantProps<typeof nesModalHeaderVariants>;
