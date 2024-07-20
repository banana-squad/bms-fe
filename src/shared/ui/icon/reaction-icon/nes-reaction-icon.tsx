import type { FunctionComponent, HTMLAttributes } from 'react';
import React from 'react';
import type { NesReactionIconVariants } from '@/shared/ui/icon/reaction-icon/nes-reaction-icon.css';
import { nesReactionIconVariants } from '@/shared/ui/icon/reaction-icon/nes-reaction-icon.css';

export type NesReactionIconProps = HTMLAttributes<HTMLSpanElement> & NesReactionIconVariants;

export const NesReactionIcon: FunctionComponent<NesReactionIconProps> = ({ type, size, state, className, children, ...props }) => (
  <i {...props} className={nesReactionIconVariants({ type, size, state, className })}></i>
);
