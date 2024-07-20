import type { NesButtonVariants } from '@/shared/ui/button/nes-button.css';
import { nesButtonVariants } from '@/shared/ui/button/nes-button.css';
import type { ButtonHTMLAttributes, FunctionComponent } from 'react';

export type NesButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & NesButtonVariants;

export const NesButton: FunctionComponent<NesButtonProps> = ({ children, variant, disabled, ...props }) => (
  <button className={nesButtonVariants({ variant, disabled })} {...props}>
    {children}
  </button>
);
