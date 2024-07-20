import type { NesRadioVariants } from '@/shared/ui/radio/nes-button.css';
import { nesRadioVariants } from '@/shared/ui/radio/nes-button.css';
import { NesRadioContext } from '@/shared/ui/radio/nes-radio.context';
import type { FunctionComponent, InputHTMLAttributes } from 'react';
import { useContext } from 'react';

export type NesRadioProps = NesRadioVariants & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const NesRadio: FunctionComponent<NesRadioProps> = ({ dark, className, children, ...props }) => {
  const radioGroup = useContext(NesRadioContext);

  return (
    <label>
      <input
        {...props}
        type="radio"
        name={radioGroup.name ?? props.name}
        className={nesRadioVariants({ dark: radioGroup.dark ?? dark, className })}
        checked={radioGroup.value !== undefined && props.value === radioGroup.value}
        disabled={radioGroup.disabled ?? props.disabled}
        onChange={radioGroup.onChange ?? props.onChange}
      />
      <span>{children}</span>
    </label>
  );
};
