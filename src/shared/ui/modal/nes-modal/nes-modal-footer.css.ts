import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesModalFooterVariants = cva(['dialog-menu flex justify-center gap-4']);

export type NesModalFooterVariants = VariantProps<typeof nesModalFooterVariants>;
