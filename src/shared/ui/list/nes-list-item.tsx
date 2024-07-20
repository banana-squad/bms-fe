import type { LiHTMLAttributes } from 'react';

type NesListItemProps = LiHTMLAttributes<HTMLLIElement>;

export function NesListItem({ className, children, ...props }: NesListItemProps) {
  return (
    <li {...props} className={className}>{children}</li>
  );
}
