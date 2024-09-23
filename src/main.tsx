import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/global.css';

import AppViewer from '@/AppViewer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppViewer />
  </React.StrictMode>
);
