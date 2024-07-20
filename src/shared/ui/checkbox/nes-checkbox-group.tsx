import { NesCheckboxContext } from '@/shared/ui/checkbox/nes-checkbox.context';
import type { NesCheckboxVariants } from '@/shared/ui/checkbox/nes-checkbox.css';
import type { ChangeEventHandler, FunctionComponent, PropsWithChildren } from 'react';

export type NesCheckboxGroupProps = PropsWithChildren<NesCheckboxVariants & {
  label?: string;
  name?: string;
  disabled?: boolean;
  values: string[];
  onChange(checkedValues?: string[]): void;
}>;

export const NesCheckboxGroup: FunctionComponent<NesCheckboxGroupProps> = ({ label, children, ...props }) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value, checked } = e.target;

    props.onChange(checked
      ? [...props.values, value]
      : props.values.filter(checkedValue => checkedValue !== value));
  };

  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      <NesCheckboxContext.Provider value={{ ...props, onChange }}>
        {children}
      </NesCheckboxContext.Provider>
    </fieldset>
  );
};
