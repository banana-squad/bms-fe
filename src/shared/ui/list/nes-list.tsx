import type { NesListVariants } from '@/shared/ui/list/nes-list.css';
import { nesListVariants } from '@/shared/ui/list/nes-list.css';
import type { FunctionComponent, PropsWithChildren } from 'react';

export type NesListProps = PropsWithChildren<NesListVariants>;

export const NesList: FunctionComponent<NesListProps> = ({ type = 'circle', children }) =>(
  <div className="lists">
    <ul className={nesListVariants({ type })}>
      {children}
    </ul>
  </div>
);
