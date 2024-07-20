import type { NesBalloonVariants } from '@/shared/ui/balloon/nes-balloon.css';
import { nesBalloonVariants } from '@/shared/ui/balloon/nes-balloon.css';
import type { FunctionComponent, HTMLAttributes } from 'react';

export type NesBalloonProps = HTMLAttributes<HTMLDivElement> & NesBalloonVariants;

export const NesBalloon: FunctionComponent<NesBalloonProps> = ({ dark, align, className, children, ...props }) => (
  <div {...props} className={nesBalloonVariants({ dark, align })}>
    {children}
  </div>
);
