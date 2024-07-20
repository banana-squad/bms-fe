import { useModal } from '@/shared/hooks/useModal';
import type { FunctionComponent } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const MODAL_ID = 'modal-container';

export const ModalContainer: FunctionComponent = () => {
  const modal = useModal();
  const ModalState = modal.top;

  useEffect(() => {
    if (document.getElementById(MODAL_ID)) return;

    const modalDOM = document.createElement('div');
    modalDOM.id = MODAL_ID;

    document.body.append(modalDOM);
  }, []);

  return modal.isModal && createPortal(
    <div>
      <ModalState.Component
        resolve={ModalState.resolve}
        reject={ModalState.reject}
        {...ModalState.props ?? {}}
      />
    </div>,
    document.getElementById(MODAL_ID) as HTMLElement,
  );
};
