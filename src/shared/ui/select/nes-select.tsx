import { useSequence } from '@/shared/hooks/useSequence';
import type { NesSelectVariants } from '@/shared/ui/select/nes-select.css';
import { nesSelectVariants } from '@/shared/ui/select/nes-select.css';
import type { FunctionComponent } from 'react';

export type NesOption = {
  value: string;
  label: string;
};

export type NesSelectProps = NesSelectVariants & {
  id?: string;
  label: string;
  options: NesOption[];
  defaultOption?: NesOption;
};

export const NesSelect: FunctionComponent<NesSelectProps> = ({ id, label, options, defaultOption, ...props }) => {
  const sequence = useSequence();
  const selectId = id || sequence;

  return (
    <>
      {label && <label htmlFor={selectId}>{label}</label>}
      <div className={nesSelectVariants(props)}>
        <select id={selectId} required>
          {defaultOption && <option value={defaultOption.value} disabled selected hidden>{defaultOption.label}</option>}
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};
