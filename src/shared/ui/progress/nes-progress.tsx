import type { NesProgressVariants } from '@/shared/ui/progress/nes-progress.css';
import { nesProgressVariants } from '@/shared/ui/progress/nes-progress.css';
import type { FunctionComponent, ProgressHTMLAttributes } from 'react';

export type NesProgressProps = NesProgressVariants & ProgressHTMLAttributes<HTMLProgressElement>;

export const NesProgress: FunctionComponent<NesProgressProps> = ({ variant, className, ...props }) => (
  <progress {...props} className={nesProgressVariants({ variant, className })} max={props.max ?? 100}></progress>
);
