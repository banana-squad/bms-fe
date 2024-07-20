import type { NesModalHeaderVariants } from '@/shared/ui/modal/nes-modal/nes-modal-header.css';
import { nesModalHeaderVariants } from '@/shared/ui/modal/nes-modal/nes-modal-header.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesModalHeaderProps = HTMLAttributes<HTMLParagraphElement> & NesModalHeaderVariants;

export const NesModalHeader: FunctionComponent<NesModalHeaderProps> = ({ children, className, ...props }: NesModalHeaderProps) => (
  <p {...props} className={nesModalHeaderVariants({ className })}>{children}</p>
);
