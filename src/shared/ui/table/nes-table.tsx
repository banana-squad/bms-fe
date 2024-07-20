import type { FunctionComponent } from 'react';
import React from 'react';
import type { NesTableVariants } from '@/shared/ui/table/nes-table.css';
import { nesTableVariants } from '@/shared/ui/table/nes-table.css';

type BaseTableProps = NesTableVariants & {
  headers: string[];
  data: string[][];
  className?: string;
};

export const NesTable: FunctionComponent<BaseTableProps> = ({ headers, data, className, bordered, dark, centered }) => (
  <div className="nes-table-responsive">
    <table className={nesTableVariants({ bordered, dark, centered, className })}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
