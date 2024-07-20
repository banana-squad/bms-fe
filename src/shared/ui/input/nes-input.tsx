import { useFocusElement } from '@/shared/hooks/useFocusElement';
import { useSequence } from '@/shared/hooks/useSequence';
import type { NesInputVariants, NesInputWrapperVariants } from '@/shared/ui/input/nes-input.css';
import { nesInputVariants } from '@/shared/ui/input/nes-input.css';
import { nesInputWrapperVariants } from '@/shared/ui/input/nes-input.css';
import type { ChangeEventHandler, FunctionComponent, InputHTMLAttributes } from 'react';

export type NesInputProps = NesInputVariants & NesInputWrapperVariants & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label?: string;
  focus?: boolean;
  onChange(value: string): void;
};

export const NesInput: FunctionComponent<NesInputProps> = ({ label, focus, variant, inline, onChange, className, children, ...props }) => {
  const sequence = useSequence();
  const inputId = props.id || sequence;
  const focusRef = useFocusElement(focus);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange(e.target.value);
  };

  return (
    <div className={nesInputWrapperVariants({ inline, className })}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...props}
        ref={focusRef}
        type={props.type ?? 'text'}
        id={inputId}
        className={nesInputVariants({ variant })}
        onChange={handleChange}
      />
      {children}
    </div>
  );
};
