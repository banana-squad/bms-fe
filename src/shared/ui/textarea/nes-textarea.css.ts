import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesTextareaVariants = cva(['nes-textarea']);

export type NesTextareaVariants = VariantProps<typeof nesTextareaVariants>;
