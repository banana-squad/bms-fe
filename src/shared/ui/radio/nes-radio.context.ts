import type { NesRadioGroupProps } from '@/shared/ui/radio/nes-radio-group';
import { type ChangeEventHandler, createContext } from 'react';

export type NesRadioContextType = Omit<NesRadioGroupProps, 'onChange'> & {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const NesRadioContext = createContext<NesRadioContextType>(null!);
