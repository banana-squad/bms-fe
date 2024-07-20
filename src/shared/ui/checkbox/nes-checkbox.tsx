import { NesCheckboxContext } from '@/shared/ui/checkbox/nes-checkbox.context';
import { type NesCheckboxVariants, nesCheckboxVariants } from '@/shared/ui/checkbox/nes-checkbox.css';
import type { FunctionComponent, InputHTMLAttributes, PropsWithChildren } from 'react';
import { useContext } from 'react';

type NesCheckboxProps = PropsWithChildren<NesCheckboxVariants & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;

export const NesCheckbox: FunctionComponent<NesCheckboxProps> = ({ dark, className, children, ...props }) => {
  const checkboxGroup = useContext(NesCheckboxContext);

  return (
    <label>
      <input
        {...props}
        type="checkbox"
        name={checkboxGroup.name ?? props.name}
        className={nesCheckboxVariants({ dark: checkboxGroup.dark ?? dark, className })}
        checked={checkboxGroup.values.some(checkedValue => checkedValue === props.value)}
        disabled={checkboxGroup.disabled ?? props.disabled}
        onChange={checkboxGroup.onChange ?? props.onChange}
      />
      <span>{children}</span>
    </label>
  );
};
