import { useModal } from '@/shared/hooks/useModal';
import { NesButton } from '@/shared/ui/button/nes-button';
import { NesConfirmModal } from '@/shared/ui/modal/confirm-modal/nes-confirm-modal';
import type { Meta, StoryObj } from '@storybook/react';

const story = {
  title: 'shared/ui/modal/nes-confirm-modal',
  component: NesConfirmModal,
  args: {
    title: '',
    body: '',
    resolve: () => {},
    reject: () => {},
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    body: {
      control: { type: 'text' },
    },
  },
  render(args) {
    const modal = useModal();

    const handleModal = async () => {
      const result = await modal.push<boolean>('nes-confirm-modal', NesConfirmModal, args);

      console.log('### handleModal', result);
    };

    return (
      <NesButton variant="primary" onClick={handleModal}>모달</NesButton>
    );
  },
} satisfies Meta<typeof NesConfirmModal>;

export default story;

type Story = StoryObj<typeof story>;

export const DefaultNesConfirmModal: Story = {
  args: {
    title: 'Default nes confirm modal title',
    body: 'Default nes confirm modal body',
  },
};
