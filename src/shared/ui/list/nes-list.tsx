import type { NesListVariants } from '@/shared/ui/list/nes-list.css';
import { nesListVariants } from '@/shared/ui/list/nes-list.css';
import type { FunctionComponent, ReactNode } from 'react';

export type NesListType = 'circle' | 'disc';

export type NesListProps = NesListVariants & {
  type?: NesListType;
  children?: ReactNode;
};

export const NesList: FunctionComponent<NesListProps> = ({ type = 'circle', children }) =>(
  <div className="lists">
    <ul className={nesListVariants({ type })}>
      {children}
    </ul>
  </div>
);
