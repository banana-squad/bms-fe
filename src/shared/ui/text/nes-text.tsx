import type { FunctionComponent, HTMLAttributes } from 'react';
import React from 'react';
import type { NesTextVariants } from '@/shared/ui/text/nes-text.css';
import { nesTextVariants } from '@/shared/ui/text/nes-text.css';

type NesTextProps = HTMLAttributes<HTMLSpanElement> & NesTextVariants;

export const NesText: FunctionComponent<NesTextProps> = ({ variant, className, children, ...props }) => (
  <span {...props} className={nesTextVariants({ variant, className })}>
    {children}
  </span>
);
