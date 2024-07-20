import { Decorator } from '@storybook/react';
import { ModalProvider } from '../../src/shared/ui/modal/modal.provider';

export const withModal: Decorator = (Story) => {
  return (
    <ModalProvider>
      <Story />
    </ModalProvider>
  )
}