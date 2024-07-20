import { ReactQueryProvider } from '@/shared/providers/reactQuery.provider.tsx';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>,
);
