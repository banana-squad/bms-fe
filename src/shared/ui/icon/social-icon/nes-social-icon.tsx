import type { NesSocialIconVariants } from '@/shared/ui/icon/social-icon/nes-social-icon.css';
import { nesSocialIconVariants } from '@/shared/ui/icon/social-icon/nes-social-icon.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesSocialIconProps = HTMLAttributes<HTMLSpanElement> & NesSocialIconVariants;

export const NesSocialIcon: FunctionComponent<NesSocialIconProps> = ({ type, size, className, children, ...props }) => (
  <i {...props} className={nesSocialIconVariants({ type, size, className })}></i>
);
