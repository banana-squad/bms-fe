import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const nesFieldErrorTextStyle = cva(['inline-flex mt-1']);

export type NesFieldErrorTextStyle = VariantProps<typeof nesFieldErrorTextStyle>;
