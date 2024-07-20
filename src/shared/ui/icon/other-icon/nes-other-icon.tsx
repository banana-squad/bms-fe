import type { NesOtherIconVariants } from '@/shared/ui/icon/other-icon/nes-other-icon.css';
import { nesOtherIconVariants } from '@/shared/ui/icon/other-icon/nes-other-icon.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesOtherIconProps = HTMLAttributes<HTMLSpanElement> & NesOtherIconVariants;

export const NesOtherIcon: FunctionComponent<NesOtherIconProps> = ({ type, size, className, children, ...props }) => (
  <i {...props} className={nesOtherIconVariants({ type, size, className })}></i>
);
