import type { BaseButtonVariants } from '@/shared/ui/button/nes-button.css';
import { baseButtonVariants } from '@/shared/ui/button/nes-button.css';
import type { ButtonHTMLAttributes } from 'react';

export type BaseButtonProps = BaseButtonVariants & ButtonHTMLAttributes<HTMLButtonElement>;

export function NesButton({ children, variant, disabled, ...props }: BaseButtonProps) {
  return (
    <button className={baseButtonVariants({ variant, disabled })} {...props}>
      {children}
    </button>
  );
}
