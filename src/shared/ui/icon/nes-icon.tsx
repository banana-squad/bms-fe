import type { FunctionComponent, HTMLAttributes } from 'react';
import React from 'react';
import type { NesIconVariants } from '@/shared/ui/icon/nes-icon.css';
import { nesIconVariants } from '@/shared/ui/icon/nes-icon.css';

type NesIconProps = HTMLAttributes<HTMLSpanElement> & NesIconVariants;

export const NesIcon: FunctionComponent<NesIconProps> = ({ type, size, state, className, children, ...props }) => (
  <i {...props} className={nesIconVariants({ type, size, state, className })}></i>
);
