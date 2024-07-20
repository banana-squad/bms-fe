import type { NesOtherIconVariants } from '@/shared/ui/icon/other-icon/nes-other-icon.css';
import { nesOtherIconVariants } from '@/shared/ui/icon/other-icon/nes-other-icon.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesIconProps = HTMLAttributes<HTMLSpanElement> & NesOtherIconVariants;

export const NesOtherIcon: FunctionComponent<NesIconProps> = ({ type, size, className, children, ...props }) => (
  <i {...props} className={nesOtherIconVariants({ type, size, className })}></i>
);
