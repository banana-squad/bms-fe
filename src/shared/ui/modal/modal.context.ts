import type { ModalController } from '@/shared/ui/modal/modal.controller';
import { createContext } from 'react';

export const ModalContext = createContext<ModalController>(null!);
