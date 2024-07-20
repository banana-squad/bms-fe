import type { NesModalFooterVariants } from '@/shared/ui/modal/nes-modal/nes-modal-footer.css';
import { nesModalFooterVariants } from '@/shared/ui/modal/nes-modal/nes-modal-footer.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesModalFooterProps = HTMLAttributes<HTMLMenuElement> & NesModalFooterVariants;

export const NesModalFooter: FunctionComponent<NesModalFooterProps> = ({ className, children, ...props }) => (
  <menu {...props} className={nesModalFooterVariants({ className })}>
    {children}
  </menu>
);
