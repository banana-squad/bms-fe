import type { Preview } from '@storybook/react';
import { withQuery } from './decorators/withQuery';
import { withModal } from './decorators/withModal';
import 'nes.css/css/nes.min.css';
import '../src/shared/styles/base.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withModal, withQuery],
};

export default preview;
