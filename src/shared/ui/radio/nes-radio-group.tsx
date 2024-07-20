import type { NesRadioVariants } from '@/shared/ui/radio/nes-button.css';
import { NesRadioContext } from '@/shared/ui/radio/nes-radio.context';
import type { ChangeEventHandler, FunctionComponent, PropsWithChildren } from 'react';

export type NesRadioGroupProps = PropsWithChildren<NesRadioVariants & {
  label?: string;
  name?: string;
  disabled?: boolean;
  value: string;
  onChange(value: string): void;
}>;

export const NesRadioGroup: FunctionComponent<NesRadioGroupProps> = ({ label, children, ...props }) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    props.onChange(e.target.value);
  };

  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      <NesRadioContext.Provider value={{ ...props, onChange }}>
        {children}
      </NesRadioContext.Provider>
    </fieldset>
  );
};
