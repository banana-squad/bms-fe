import type { FunctionComponent, HTMLAttributes } from 'react';
import React from 'react';
import type { NesIconVariants } from '@/shared/ui/icon/nes-icon.css';
import { nesIconVariants } from '@/shared/ui/icon/nes-icon.css';

export type NesIconProps = HTMLAttributes<HTMLSpanElement> & NesIconVariants;

export const NesIcon: FunctionComponent<NesIconProps> = ({ type, className, children, ...props }) => (
  <i {...props} className={nesIconVariants({ type, className })}></i>
);
