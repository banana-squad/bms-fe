import type { NesRadioVariants } from '@/shared/ui/radio/nes-button.css';
import { nesRadioVariants } from '@/shared/ui/radio/nes-button.css';
import { NesRadioContext } from '@/shared/ui/radio/nes-radio.context';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { useContext } from 'react';

type NesRadioProps = NesRadioVariants & PropsWithChildren<{
  value: string;
  name?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}>;

export const NesRadio: FunctionComponent<NesRadioProps> = ({ children, dark, value, name, defaultChecked, disabled }) => {
  const radioGroup = useContext(NesRadioContext);

  return (
    <label>
      <input
        type="radio"
        name={radioGroup.name ?? name}
        className={nesRadioVariants({ dark: radioGroup.dark ?? dark })}
        defaultChecked={defaultChecked}
        value={value}
        checked={radioGroup.value !== undefined ? value === radioGroup.value : undefined}
        disabled={radioGroup.disabled ?? disabled}
        onChange={radioGroup.onChange}
      />
      <span>{children}</span>
    </label>
  );
};
