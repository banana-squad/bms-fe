import type { NesRadioVariants } from '@/shared/ui/radio/nes-button.css';
import { NesRadioContext } from '@/shared/ui/radio/nes-radio.context';
import type { FunctionComponent, InputHTMLAttributes } from 'react';

export type NesRadioGroupProps = InputHTMLAttributes<HTMLInputElement> & NesRadioVariants & {
  label?: string;
};

export const NesRadioGroup: FunctionComponent<NesRadioGroupProps> = ({ label, children, ...props }) => (
  <fieldset>
    {label && <legend>{label}</legend>}
    <NesRadioContext.Provider value={props}>
      {children}
    </NesRadioContext.Provider>
  </fieldset>
);
