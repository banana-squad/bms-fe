import type { FunctionComponent, PropsWithChildren } from 'react';
import React from 'react';
import type { NesContainerVariants } from '@/shared/ui/container/nes-container.css';
import { nesContainerVariants } from '@/shared/ui/container/nes-container.css';

type NesContainerProps = PropsWithChildren<NesContainerVariants & {
  title?: string;
}>;

export const NesContainer: FunctionComponent<NesContainerProps> = ({ title, children, ...props }) => (
  <div className={nesContainerVariants({ withTitle: Boolean(title), ...props })}>
    {title && <p className="title">{title}</p>}
    <p>{children}</p>
  </div>
);
