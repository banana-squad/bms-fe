import { Decorator } from '@storybook/react';
import { ReactQueryProvider } from '../../src/shared/providers/reactQuery.provider';

export const withQuery: Decorator = (Story) => {
  return (
    <ReactQueryProvider>
      <Story />
    </ReactQueryProvider>
  )
}