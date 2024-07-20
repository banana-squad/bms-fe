import type { FunctionComponent, PropsWithChildren } from 'react';
import type { HTMLAttributes } from 'react';
import type { NesContainerVariants } from '@/shared/ui/container/nes-container.css';
import { nesContainerVariants } from '@/shared/ui/container/nes-container.css';

type NesContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement> & NesContainerVariants>;

export const NesContainer: FunctionComponent<NesContainerProps> = ({ title, dark, centered, rounded, withTitle, className, children, ...props }) => (
  <section {...props} className={nesContainerVariants({ dark, rounded, centered, className, withTitle: Boolean(title) })}>
    {title && <header className="title">{title}</header>}
    <p>{children}</p>
  </section>
);
