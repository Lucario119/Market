import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from 'react-moralis';

const appId = 'jrwXPTSxlWZ7Iioh5YgaAj8aA37wC27SDcT1aIkP';
const serverUrl = 'https://6t06t7maza2a.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
