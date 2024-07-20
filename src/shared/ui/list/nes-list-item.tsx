import type { LiHTMLAttributes, PropsWithChildren } from 'react';

type NesListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>;

export function NesListItem({ className, children, ...props }: NesListItemProps) {
  return (
    <li {...props} className={className}>{children}</li>
  );
}
