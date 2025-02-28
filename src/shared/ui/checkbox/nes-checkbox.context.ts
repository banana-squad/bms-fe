import type { NesCheckboxGroupProps } from '@/shared/ui/checkbox/nes-checkbox-group';
import { type ChangeEventHandler, createContext } from 'react';

export type NesCheckboxContextType = Omit<NesCheckboxGroupProps, 'onChange'> & {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const NesCheckboxContext = createContext<NesCheckboxContextType>(null!);
