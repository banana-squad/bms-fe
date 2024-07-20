import type { AnchorHTMLAttributes, FunctionComponent, ReactElement } from 'react';
import { Children } from 'react';
import { isValidElement } from 'react';
import { cloneElement } from 'react';
import type { NesBadgeTextVariants, NesBadgeVariants } from '@/shared/ui/badge/nes-badge.css';
import { nesBadgeTextVariants } from '@/shared/ui/badge/nes-badge.css';
import { nesBadgeVariants } from '@/shared/ui/badge/nes-badge.css';

export type NesBadgeProps = AnchorHTMLAttributes<HTMLAnchorElement> & NesBadgeTextVariants & NesBadgeVariants;

export const NesBadge: FunctionComponent<NesBadgeProps> = ({ dark, variant, split, icon, href, className, children, ...props }) => {
  const addClassNameToElement = (children: ReactElement) => cloneElement(children, { className: nesBadgeTextVariants({ variant, className }) });
  const wrapStringInSpan = (child: string): ReactElement => <span className={nesBadgeTextVariants({ variant, className })}>{child}</span>;

  return (
    <a {...props} href={href ?? '#'} className={nesBadgeVariants({ dark, split, icon, className })}>
      {Children.map(children, child => {
        if (typeof child === 'string') return wrapStringInSpan(child);
        if (isValidElement(child)) return addClassNameToElement(child);

        return child;
      })}
    </a>
  );
};
