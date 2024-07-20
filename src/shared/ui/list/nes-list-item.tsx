import type { ReactNode } from 'react';

type NesListItemProps = {
  children: ReactNode;
};

export function NesListItem({ children }: NesListItemProps) {
  return (
    <li>{children}</li>
  );
}
