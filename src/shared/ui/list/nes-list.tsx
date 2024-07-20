import type { NesListVariants } from '@/shared/ui/list/nes-list.css';
import { nesListVariants } from '@/shared/ui/list/nes-list.css';
import type { FunctionComponent, PropsWithChildren, LiHTMLAttributes } from 'react';

export type NesListProps = PropsWithChildren<LiHTMLAttributes<HTMLUListElement> & NesListVariants>;

export const NesList: FunctionComponent<NesListProps> = ({ type = 'circle', className, children, ...props }) =>(
  <div className="lists">
    <ul {...props} className={nesListVariants({ type, className })}>
      {children}
    </ul>
  </div>
);
