import { queryClient } from '@/shared/libs/queryClient.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const ReactQueryProvider: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);
