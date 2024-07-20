import type { Preview } from '@storybook/react';
import { withQuery } from './decorators/withQuery';
import 'nes.css/css/nes.min.css';
import '@/shared/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withQuery],
};

export default preview;
