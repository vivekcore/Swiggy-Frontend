import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function Main() {
    return (<>

    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>

  </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
