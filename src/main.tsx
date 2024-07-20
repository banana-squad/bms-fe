import { ReactQueryProvider } from '@/shared/providers/reactQuery.provider';
import { ReactRouterProvider } from '@/shared/providers/reactRouter.provider';
import { ModalProvider } from '@/shared/ui/modal/modal.provider';
import ReactDOM from 'react-dom/client';
import 'nes.css/css/nes.min.css';
import '@/shared/styles/base.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <ModalProvider>
    <ReactQueryProvider>
      <ReactRouterProvider />
    </ReactQueryProvider>
  </ModalProvider>,
);
