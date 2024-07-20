import type { NesProgressVariants } from '@/shared/ui/progress/nes-progress.css';
import { nesProgressVariants } from '@/shared/ui/progress/nes-progress.css';
import type { FunctionComponent } from 'react';

export type NesProgressProps = NesProgressVariants & {
  value: number;
  max?: number;
};

export const NesProgress: FunctionComponent<NesProgressProps> = ({ variant, value, max = 100 }) => (
  <progress className={nesProgressVariants({ variant })} value={value} max={max}></progress>
);
