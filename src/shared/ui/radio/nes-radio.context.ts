import type { NesRadioGroupProps } from '@/shared/ui/radio/nes-radio-group';
import { createContext } from 'react';

export const NesRadioContext = createContext<NesRadioGroupProps>(null!);
