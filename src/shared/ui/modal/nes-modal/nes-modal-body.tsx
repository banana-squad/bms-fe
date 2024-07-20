import type { NesModalBodyVariants } from '@/shared/ui/modal/nes-modal/nes-modal-body.css';
import { nesModalBodyVariants } from '@/shared/ui/modal/nes-modal/nes-modal-body.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesModalBodyProps = HTMLAttributes<HTMLDivElement> & NesModalBodyVariants;

export const NesModalBody: FunctionComponent<NesModalBodyProps> = ({ className, children, ...props }) => (
  <div {...props} className={nesModalBodyVariants({ className })}>{children}</div>
);
