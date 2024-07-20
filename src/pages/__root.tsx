import type { RouterContext } from '@/shared/libs/router.ts';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import type { FunctionComponent } from 'react';

export const Root: FunctionComponent = () => (
  <Outlet />
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});
