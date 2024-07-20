import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const loginFormContainer = cva(['flex flex-col justify-center gap-4 mx-auto w-full max-w-80 h-screen xs:max-w-96']);

export const loginFieldsetStyle = cva(['flex flex-col gap-3 w-full']);

export type LoginFormContainer = VariantProps<typeof loginFormContainer>;
