import type { NesButtonVariants } from '@/shared/ui/button/nes-button.css';
import { nesButtonVariants } from '@/shared/ui/button/nes-button.css';
import type { ButtonHTMLAttributes, FunctionComponent } from 'react';

export type NesButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & NesButtonVariants;

export const NesButton: FunctionComponent<NesButtonProps> = ({ variant, disabled, className, children, ...props }) => (
  <button {...props} className={nesButtonVariants({ variant, disabled, className })} disabled={disabled}>
    {children}
  </button>
);
