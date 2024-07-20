import { router } from '@/shared/libs/router.ts';
import { RouterProvider } from '@tanstack/react-router';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const ReactRouterProvider: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <RouterProvider router={router} />
);
