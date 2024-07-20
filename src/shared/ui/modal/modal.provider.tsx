import ModalContainer from '@/shared/ui/modal/modal-container';
import { ModalContext } from '@/shared/ui/modal/modal.context';
import { ModalController } from '@/shared/ui/modal/modal.controller';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

export function ModalProvider({ children }: PropsWithChildren) {
  const rerenderState = useState(1);
  const [modalController] = useState(() => new ModalController(rerenderState));

  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
}
