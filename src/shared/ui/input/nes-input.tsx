import { useSequence } from '@/shared/hooks/useSequence';
import type { NesInputVariants, NesInputWrapperVariants } from '@/shared/ui/input/nes-input.css';
import { nesInputVariants } from '@/shared/ui/input/nes-input.css';
import { nesInputWrapperVariants } from '@/shared/ui/input/nes-input.css';
import type { FunctionComponent, InputHTMLAttributes } from 'react';

export type NesInputProps = InputHTMLAttributes<HTMLInputElement> & NesInputVariants & NesInputWrapperVariants & {
  label?: string;
};

export const NesInput: FunctionComponent<NesInputProps> = ({ label, variant, inline, children, ...props }) => {
  const sequence = useSequence();
  const inputId = props.id || sequence;

  return (
    <div className={nesInputWrapperVariants({ inline })}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...props}
        type={props.type ?? 'text'}
        id={inputId}
        className={nesInputVariants({ variant })}
      />
    </div>
  );
};
