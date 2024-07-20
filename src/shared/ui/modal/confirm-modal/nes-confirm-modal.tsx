import { NesButton } from '@/shared/ui/button/nes-button';
import type { ModalPromise } from '@/shared/ui/modal/modal.controller';
import { NesModal } from '@/shared/ui/modal/nes-modal';
import type { ReactNode } from 'react';

export type NesConfirmModalProps<T> = ModalPromise<T> & {
  title?: ReactNode;
  body?: ReactNode;
};

export const NesConfirmModal = <T = boolean>({ title, body, resolve, reject }: NesConfirmModalProps<T>) => {
  const handleCancel = () => reject(false);
  const handleConfirm = () => resolve(true as T);

  return (
    <NesModal>
      <NesModal.Header>{title}</NesModal.Header>
      <NesModal.Body>{body}</NesModal.Body>
      <NesModal.Footer>
        <NesButton type="button" onClick={handleCancel}>Cancel</NesButton>
        <NesButton type="submit" variant="primary" onClick={handleConfirm}>Confirm</NesButton>
      </NesModal.Footer>
    </NesModal>
  );
};
