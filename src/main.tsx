import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
