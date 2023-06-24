import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './globalStyle.ts';
import {BrowserRouter} from "react-router-dom" ;
import { QueryClient,QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <GlobalStyle/>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
