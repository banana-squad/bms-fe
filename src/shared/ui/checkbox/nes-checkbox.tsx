import { NesCheckboxContext } from '@/shared/ui/checkbox/nes-checkbox.context';
import { type NesCheckboxVariants, nesCheckboxVariants } from '@/shared/ui/checkbox/nes-checkbox.css';
import type { FunctionComponent, InputHTMLAttributes, PropsWithChildren } from 'react';
import React, { useContext } from 'react';

type NesCheckboxProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement> & NesCheckboxVariants & {
  defaultChecked?: boolean;
}>;

export const NesCheckbox: FunctionComponent<NesCheckboxProps> = ({ dark, value, defaultChecked, name, children, disabled, onChange }) => {
  const checkboxGroup = useContext(NesCheckboxContext);

  return (
    <label>
      <input
        type="checkbox"
        name={checkboxGroup.name ?? name}
        className={nesCheckboxVariants({ dark: checkboxGroup.dark ?? dark })}
        defaultChecked={defaultChecked}
        value={value}
        checked={checkboxGroup.values.some(checkedValue => checkedValue === value)}
        disabled={checkboxGroup.disabled ?? disabled}
        onChange={checkboxGroup.handleChange ?? onChange}
      />
      <span>{children}</span>
    </label>
  );
};
