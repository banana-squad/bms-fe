import type { FunctionComponent } from 'react';
import React from 'react';
import type { NesTableVariants } from '@/shared/ui/table/nes-table.css';
import { nesTableVariants } from '@/shared/ui/table/nes-table.css';

type BaseTableProps = NesTableVariants & {
  headers: string[];
  data: string[][];
};

export const NesTable: FunctionComponent<BaseTableProps> = ({ headers, data, ...props }) => (
  <div className="nes-table-responsive">
    <table className={nesTableVariants(props)}>
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
