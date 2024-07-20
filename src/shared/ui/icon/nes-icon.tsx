import type { FunctionComponent } from 'react';
import React from 'react';
import type { NesIconVariants } from '@/shared/ui/icon/nes-icon.css';
import { nesIconVariants } from '@/shared/ui/icon/nes-icon.css';

type NesIconProps = NesIconVariants;

export const NesIcon: FunctionComponent<NesIconProps> = ({ type, size, state }) => (
  <i className={nesIconVariants({ size, state, type })}></i>
);
