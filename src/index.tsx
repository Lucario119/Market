import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from 'react-moralis';

const appId = '6AclqxleorgcVQJY4s48gyZzezGLkJrdRnJZViIa';
const serverUrl = 'https://v37mrt9mhhmb.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
