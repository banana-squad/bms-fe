import { ReactQueryProvider } from '@/shared/providers/reactQuery.provider.tsx';
import { ReactRouterProvider } from '@/shared/providers/reactRouter.provider.tsx';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <ReactQueryProvider>
    <ReactRouterProvider />
  </ReactQueryProvider>,
);
