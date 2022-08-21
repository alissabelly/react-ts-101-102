import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Context from './Context';
import Test1 from './Test1';
import Test2 from './Test2';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Test1 />
    <Test2 />
    <Context />
    <App />
  </StrictMode>
);
