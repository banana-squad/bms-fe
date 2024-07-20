import { useSequence } from '@/shared/hooks/useSequence';
import type { FunctionComponent, TextareaHTMLAttributes } from 'react';
import React from 'react';
import { nesTextareaVariants } from '@/shared/ui/textarea/nes-textarea.css';

export type NesTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
  label: string;
  onChange(value: string): void;
};

export const NesTextarea: FunctionComponent<NesTextareaProps> = ({ label, className, ...props }) => {
  const sequence = useSequence();
  const id = props.id ?? sequence;

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        {...props}
        id={id}
        className={nesTextareaVariants({ className })}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </>
  );
};
