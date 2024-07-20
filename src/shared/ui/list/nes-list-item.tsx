import type { PropsWithChildren } from 'react';

type NesListItemProps = PropsWithChildren;

export function NesListItem({ children }: NesListItemProps) {
  return (
    <li>{children}</li>
  );
}
