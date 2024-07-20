import { NesCheckboxContext } from '@/shared/ui/checkbox/nes-checkbox.context';
import type { NesCheckboxVariants } from '@/shared/ui/checkbox/nes-checkbox.css';
import type { ChangeEventHandler, FunctionComponent, PropsWithChildren } from 'react';

export type NesCheckboxGroupProps = PropsWithChildren<NesCheckboxVariants & {
  label?: string;
  name?: string;
  values: string[];
  disabled?: boolean;
  onChange?(checkedValues?: string[]): void;
}>;

export const NesCheckboxGroup: FunctionComponent<NesCheckboxGroupProps> = ({ label, children, values, onChange, ...props }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { value, checked } = e.target;

    onChange?.(checked
      ? [...values, value]
      : values.filter(checkedValue => checkedValue !== value));
  };

  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      <NesCheckboxContext.Provider value={{ handleChange, values, ...props }}>
        {children}
      </NesCheckboxContext.Provider>
    </fieldset>
  );
};
