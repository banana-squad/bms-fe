import { NesModalBody } from '@/shared/ui/modal/nes-modal/nes-modal-body';
import { NesModalFooter } from '@/shared/ui/modal/nes-modal/nes-modal-footer';
import { NesModalHeader } from '@/shared/ui/modal/nes-modal/nes-modal-header';
import type { NesModalVariants } from '@/shared/ui/modal/nes-modal/nes-modal.css';
import { nesModalFormStyle } from '@/shared/ui/modal/nes-modal/nes-modal.css';
import { nesModalVariants } from '@/shared/ui/modal/nes-modal/nes-modal.css';
import type { DialogHTMLAttributes, FunctionComponent } from 'react';

type NesModalProps = DialogHTMLAttributes<HTMLDialogElement> & NesModalVariants;

type NesModalComponent = FunctionComponent<NesModalProps> & {
  Header: typeof NesModalHeader;
  Body: typeof NesModalBody;
  Footer: typeof NesModalFooter;
};

export const NesModal: NesModalComponent = ({ dark, rounded, className, children, ...props }) => (
  <dialog {...props} className={nesModalVariants({ dark, rounded, className })} open>
    <form method="dialog" className={nesModalFormStyle()}>
      {children}
    </form>
  </dialog>
);

NesModal.Header = NesModalHeader;
NesModal.Body = NesModalBody;
NesModal.Footer = NesModalFooter;
